import { colors } from '#colors';
import {
  semanticHighlighting,
  semanticTokenColors,
} from '#semanticTokenColors';
import { ownedScopeHex, rolePaint } from '#syntax/roles';
import { token } from '#tokens';
import { typingNameLock } from '#ts/tsTypes';
import {
  tokenColors,
  typingNameLockTokenColors,
  tokenColorPipeline,
  tokenColorSlices,
  TokenLayer,
} from '#tokenColors';

import fsPromises from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import url from 'node:url';

const root = path.join(path.dirname(url.fileURLToPath(import.meta.url)), '..');
const schemaPath = path.join(root, 'schemas/workbench-colors.json');
const outPath = path.join(root, 'themes/ayu-next-color-theme.json');

const HEX_RE = /^#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;

async function loadKnownKeys(): Promise<Set<string>> {
  const schema = JSON.parse(await fsPromises.readFile(schemaPath, 'utf8')) as {
    properties?: Record<string, unknown>;
  };

  return new Set(Object.keys(schema.properties ?? {}));
}

function assertHex(key: string, value: string): void {
  if (!HEX_RE.test(value)) {
    throw new Error(`Invalid hex for ${key}: ${JSON.stringify(value)}`);
  }
}

function validateColors(known: Set<string>): void {
  const unknown: string[] = [];

  for (const [key, value] of Object.entries(colors)) {
    if (!known.has(key)) {
      unknown.push(key);
    }

    assertHex(key, String(value));
  }

  if (unknown.length > 0) {
    throw new Error(
      `Unknown workbench color keys (${unknown.length}): ${unknown.join(', ')}`,
    );
  }
}

type TokenRule = {
  scope?: string | string[];
  settings?: { foreground?: string };
};

function scopesOf(rule: TokenRule): string[] {
  const scope = rule.scope;

  if (Array.isArray(scope)) {
    return scope;
  }

  if (!scope) {
    return [];
  }

  return scope.split(',').map((part) => part.trim());
}

function hexOf(value: string | { foreground?: string } | undefined): string {
  if (typeof value === 'string') {
    return value.toLowerCase();
  }

  return String(value?.foreground ?? '').toLowerCase();
}

function assertSyntaxAligned(): void {
  const mismatches: string[] = [];
  const owned = ownedScopeHex();
  const semanticOwner = new Map<string, string>();
  const banned = [
    '*.declaration',
    'customLiteral',
    'newOperator',
    'stringLiteral',
    'numberLiteral',
  ];

  for (const key of banned) {
    if (key in semanticTokenColors) {
      mismatches.push(`semantic ${key} must not exist — it fights other roles`);
    }
  }

  for (const paint of rolePaint) {
    const expected = token(paint.role).toLowerCase();

    for (const selector of paint.semantic) {
      const prev = semanticOwner.get(selector);

      if (prev && prev !== paint.role) {
        mismatches.push(
          `semantic ${selector} owned by both ${prev} and ${paint.role}`,
        );
      }

      semanticOwner.set(selector, paint.role);

      const actual = hexOf(
        semanticTokenColors[selector as keyof typeof semanticTokenColors],
      );

      if (actual !== expected) {
        mismatches.push(
          `semantic ${selector} is ${actual || '(missing)'}, expected ${paint.role} ${expected}`,
        );
      }
    }
  }

  for (const rule of tokenColors as TokenRule[]) {
    const foreground = String(rule.settings?.foreground ?? '').toLowerCase();

    for (const scope of scopesOf(rule)) {
      if (scope === 'entity.name') {
        mismatches.push(
          `TextMate entity.name is banned — it paints methods sky (got ${foreground || 'empty'})`,
        );
      }

      const owner = owned.get(scope);

      if (owner && foreground !== owner.hex) {
        mismatches.push(
          `TextMate ${scope} is ${foreground}, owned by ${owner.role} ${owner.hex}`,
        );
      }
    }
  }

  const methodHex = hexOf(semanticTokenColors.method);
  const funcHex = token('syntax.func').toLowerCase();

  if (methodHex !== funcHex) {
    mismatches.push(`semantic method is ${methodHex || '(missing)'}, expected syntax.func ${funcHex}`);
  }

  if (!owned.has('entity.name.function') || owned.get('entity.name.function')?.role !== 'syntax.func') {
    mismatches.push('TextMate entity.name.function must be owned by syntax.func');
  }

  if (token('syntax.keywordStrong').toLowerCase() !== token('syntax.keyword').toLowerCase()) {
    mismatches.push('syntax.keywordStrong must stay the same hex as syntax.keyword');
  }


  // Lib constructors (Date/HttpException) → cyan syntax.entity; type-position Map/Readonly → lavender syntax.ctor
  const ctorValueSelectors = [
    'class.defaultLibrary',
    'variable.defaultLibrary',
  ];

  for (const selector of ctorValueSelectors) {
    const actual = hexOf(
      semanticTokenColors[selector as keyof typeof semanticTokenColors],
    );
    const expected = token('syntax.entity').toLowerCase();

    if (actual !== expected) {
      mismatches.push(
        `semantic ${selector} must be syntax.entity ${expected} (constructors cyan; got ${actual || 'missing'})`,
      );
    }
  }

  if (mismatches.length > 0) {
    throw new Error(`Syntax roles drifted:\n- ${mismatches.join('\n- ')}`);
  }
}



function assertTokenLayers(): void {
  const errors: string[] = [];
  // L3 semantic is separate field — must be enabled
  // (checked via semanticHighlighting export in buildTheme)

  let maxGeneral = -1;
  let maxNarrow = -1;
  let minLock = tokenColors.length;
  // Reconstruct indices from slices (source of truth)
  let cursor = 0;
  const ranges: { id: string; layer: number; start: number; end: number }[] = [];
  for (const slice of [...tokenColorSlices].sort((a, b) =>
    a.layer !== b.layer ? a.layer - b.layer : a.filePriority - b.filePriority || a.id.localeCompare(b.id),
  )) {
    const start = cursor;
    cursor += slice.rules.length;
    ranges.push({ id: slice.id, layer: slice.layer, start, end: cursor });
    if (slice.layer === TokenLayer.General) maxGeneral = cursor - 1;
    if (slice.layer === TokenLayer.Narrow) maxNarrow = cursor - 1;
    if (slice.layer === TokenLayer.Lock) minLock = Math.min(minLock, start);
  }
  if (cursor !== tokenColors.length) {
    errors.push(`slice rule count ${cursor} != tokenColors ${tokenColors.length}`);
  }
  if (maxGeneral >= 0 && maxNarrow >= 0 && maxGeneral >= minLock) {
    errors.push(`GENERAL overlaps LOCK (maxGeneral=${maxGeneral}, minLock=${minLock})`);
  }
  if (maxNarrow >= 0 && maxNarrow >= minLock) {
    errors.push(`NARROW overlaps LOCK (maxNarrow=${maxNarrow}, minLock=${minLock}) — leftover/roles would beat lime`);
  }
  const lastSlice = ranges[ranges.length - 1];
  if (!lastSlice || lastSlice.layer !== TokenLayer.Lock || lastSlice.id !== 'lock.typing.alias') {
    errors.push(`pipeline must end with lock.typing.alias, got ${lastSlice?.id}`);
  }
  // No non-lock slice after first lock
  let seenLock = false;
  for (const r of ranges) {
    if (r.layer === TokenLayer.Lock) seenLock = true;
    else if (seenLock) errors.push(`non-LOCK slice ${r.id} after LOCK`);
  }
  if (errors.length > 0) {
    throw new Error(`Token layer pipeline broken:\n- ${errors.join('\n- ')}\nPipeline: ${tokenColorPipeline}`);
  }
}

function assertTypingNameLock(): void {
  const expected = typingNameLock.hex.toLowerCase();
  const mismatches: string[] = [];

  for (const role of typingNameLock.roles) {
    const actual = token(role).toLowerCase();
    if (actual !== expected) {
      mismatches.push(`${role} is ${actual}, locked lime ${expected}`);
    }
  }

  for (const selector of typingNameLock.semantic) {
    const actual = hexOf(
      semanticTokenColors[selector as keyof typeof semanticTokenColors],
    );
    if (actual !== expected) {
      mismatches.push(`semantic ${selector} is ${actual || '(missing)'}, locked lime ${expected}`);
    }
  }

  const owned = ownedScopeHex();
  for (const scope of typingNameLock.textmate) {
    const owner = owned.get(scope);
    if (!owner) {
      mismatches.push(`TextMate ${scope} has no owner — typing lock broken`);
      continue;
    }
    if (owner.hex !== expected) {
      mismatches.push(
        `TextMate ${scope} owned by ${owner.role} ${owner.hex}, locked lime ${expected}`,
      );
    }
    if (!typingNameLock.roles.includes(owner.role as typeof typingNameLock.roles[number])) {
      mismatches.push(
        `TextMate ${scope} stolen by ${owner.role} — only typing roles may own salad names`,
      );
    }
  }

  // Регресс: синий entity/ctor не должен владеть type/interface scopes.
  for (const paint of rolePaint) {
    if (typingNameLock.roles.includes(paint.role as typeof typingNameLock.roles[number])) {
      continue;
    }
    for (const selector of paint.semantic) {
      if ((typingNameLock.semantic as readonly string[]).includes(selector)) {
        mismatches.push(`${paint.role} steals semantic ${selector} from typing lock`);
      }
    }
    for (const scope of paint.textmate) {
      if ((typingNameLock.textmate as readonly string[]).includes(scope)) {
        mismatches.push(`${paint.role} steals TextMate ${scope} from typing lock`);
      }
    }
  }


  // Typing-name lock rules must appear after leftover/roles (last-wins for names).
  // this/prop lock may follow them.
  const lockScopes = new Set(
    typingNameLockTokenColors.flatMap((r) =>
      Array.isArray(r.scope) ? r.scope : [r.scope],
    ),
  );
  let lastTypingLockIdx = -1;
  for (let i = 0; i < tokenColors.length; i++) {
    const raw = tokenColors[i]?.scope;
    const scopes = (Array.isArray(raw) ? raw : [raw]).map((s) => String(s));
    if (scopes.some((s) => lockScopes.has(s))) lastTypingLockIdx = i;
  }
  if (lastTypingLockIdx < 0) {
    mismatches.push('tokenColors missing lime lock rules for type/interface names');
  } else {
    // nothing after typing lock may paint typing-name scopes non-salad (checked below)
    void lastTypingLockIdx;
  }

  for (let i = 0; i < tokenColors.length; i++) {
    const rule = tokenColors[i];
    const fg = String(rule.settings?.foreground ?? '').toLowerCase();
    const scopes = (Array.isArray(rule.scope) ? rule.scope : [rule.scope]).map(String);
    for (const scope of scopes) {
      const isTypingName =
        scope === 'entity.name.type' ||
        scope.startsWith('entity.name.type.alias') ||
        scope.startsWith('entity.name.type.interface') ||
        scope.includes('entity.name.type.alias') ||
        scope.includes('entity.name.type.interface');
      if (!isTypingName) continue;
      // after the last lock rule index, only salad allowed; before, warn if orange
      if (fg === '#ff9944') {
        mismatches.push(
          `tokenColors[${i}] paints typing name scope ${scope} orange ${fg} — lock broken`,
        );
      }
    }
  }

  // semantic declarations also locked
  for (const selector of ['type.declaration', 'interface.declaration'] as const) {
    const actual = hexOf(
      semanticTokenColors[selector as keyof typeof semanticTokenColors],
    );
    if (actual && actual !== expected) {
      mismatches.push(`semantic ${selector} is ${actual}, locked lime ${expected}`);
    }
  }


  // Ban bare storage→orange (Roman Inspect). Language leaves `.ts`/`.tsx` OK —
  // Host does not match exclusion selectors like `storage.type.class - entity.name.type`
  // against `storage.type.class.ts`. ThemeId stays lime via typing lock last-wins.
  for (let i = 0; i < tokenColors.length; i++) {
    const rule = tokenColors[i];
    const fg = String(rule.settings?.foreground ?? '').toLowerCase();
    if (fg !== '#ff9944') continue;
    const scopes = (Array.isArray(rule.scope) ? rule.scope : [rule.scope]).map((s) => String(s));
    for (const s of scopes) {
      const base = s.split(' - ')[0].trim();
      const isLangLeaf = /\.(ts|tsx|js|jsx|mts|cts)$/.test(base);
      if (base === 'storage') {
        mismatches.push(`tokenColors[${i}] bare storage → orange (scope ${s})`);
      }
      // exclusion selectors are broken on Host for class/interface/modifier — ban them
      if (s.includes('- entity.name.type') && base.startsWith('storage.')) {
        mismatches.push(
          `tokenColors[${i}] exclusion scope broken on Host (use leaf .ts instead): ${s}`,
        );
      }
      if (
        !isLangLeaf &&
        (base === 'storage.modifier' ||
          base === 'storage.type' ||
          base === 'storage.type.type' ||
          base === 'storage.type.interface' ||
          base === 'storage.type.namespace' ||
          base === 'storage.type.module' ||
          base === 'storage.type.class' ||
          base === 'storage.type.function')
      ) {
        mismatches.push(
          `tokenColors[${i}] bare ${base} → orange (use ${base}.ts leaf, not exclusion)`,
        );
      }
    }
  }

    
  // ThemeId lock must be absolute last tokenColors entry
  const last = tokenColors[tokenColors.length - 1];
  const lastScopes = (Array.isArray(last?.scope) ? last.scope : [last?.scope]).map(String);
  if (!lastScopes.some((s) => s.includes('entity.name.type.alias'))) {
    mismatches.push('last tokenColors rule must lock entity.name.type.alias (ThemeId) — was ' + lastScopes.slice(0, 3).join(','));
  }
  // Ban unscoped storage.type.type → orange (use .ts leaf or exclusion)
  for (let i = 0; i < tokenColors.length; i++) {
    const rule = tokenColors[i];
    const fg = String(rule.settings?.foreground ?? '').toLowerCase();
    if (fg !== '#ff9944') continue;
    const scopes = (Array.isArray(rule.scope) ? rule.scope : [rule.scope]).map((s) => String(s));
    if (scopes.some((s) => s === 'storage.type.type')) {
      mismatches.push(`tokenColors[${i}] has bare storage.type.type → orange (use storage.type.type.ts or exclusion)`);
    }
  }

if (mismatches.length > 0) {
    throw new Error(`Typing name lock (lime ${expected}) broken:\n- ${mismatches.join('\n- ')}`);
  }
}

async function assertPlaygroundProject(): Promise<void> {
  const tsconfigPath = path.join(root, 'playground/tsconfig.json');
  const nestTsconfigPath = path.join(root, 'playground/node/nest/tsconfig.json');
  const nestSample = path.join(root, 'playground/node/nest/app.controller.ts');
  const nestDts = path.join(root, 'playground/node/nest/nestjs-common.d.ts');
  const missing: string[] = [];

  for (const filePath of [tsconfigPath, nestTsconfigPath, nestSample, nestDts]) {
    try {
      await fsPromises.access(filePath);
    }
    catch {
      missing.push(path.relative(root, filePath));
    }
  }

  if (missing.length > 0) {
    throw new Error(`Playground project incomplete (No tsconfig / no Nest types):\n- ${missing.join('\n- ')}`);
  }

  const tsconfig = JSON.parse(await fsPromises.readFile(tsconfigPath, 'utf8')) as {
    compilerOptions?: { experimentalDecorators?: boolean };
  };

  if (tsconfig.compilerOptions?.experimentalDecorators !== true) {
    throw new Error('playground/tsconfig.json must set experimentalDecorators so Nest decorators get semantic tokens');
  }
}

function buildTheme() {
  return {
    name: 'ayu-next',
    $schema: 'vscode://schemas/color-theme',
    type: 'dark' as const,
    colors: { ...colors },
    semanticHighlighting,
    semanticTokenColors: { ...semanticTokenColors },
    tokenColors: [...tokenColors],
  };
}

const known = await loadKnownKeys();
validateColors(known);
assertSyntaxAligned();
assertTokenLayers();
assertTypingNameLock();
await assertPlaygroundProject();

const theme = buildTheme();
await fsPromises.mkdir(path.dirname(outPath), { recursive: true });
await fsPromises.writeFile(outPath, `${JSON.stringify(theme, null, 2)}\n`);

process.stdout.write(
  `Built ${outPath} (${Object.keys(colors).length} colors, ${tokenColors.length} token rules)\n` +
  `Layers: ${tokenColorPipeline}\n`,
);
