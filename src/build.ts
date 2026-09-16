import { colors } from '#colors';
import {
  semanticHighlighting,
  semanticTokenColors,
} from '#semanticTokenColors';
import { ownedScopeHex, rolePaint } from '#syntax/roles';
import { token } from '#tokens';
import { tokenColors } from '#tokenColors';

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
    'method.defaultLibrary',
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
      const owner = owned.get(scope);

      if (owner && foreground !== owner.hex) {
        mismatches.push(
          `TextMate ${scope} is ${foreground}, owned by ${owner.role} ${owner.hex}`,
        );
      }
    }
  }

  if (token('syntax.keywordStrong').toLowerCase() !== token('syntax.keyword').toLowerCase()) {
    mismatches.push('syntax.keywordStrong must stay the same hex as syntax.keyword');
  }

  if (token('syntax.propKey').toLowerCase() !== token('syntax.string').toLowerCase()) {
    mismatches.push('syntax.propKey must stay the same hex as syntax.string');
  }

  if (token('syntax.typeBuiltin').toLowerCase() !== token('syntax.fg').toLowerCase()) {
    mismatches.push('syntax.typeBuiltin must stay the same hex as syntax.fg');
  }

  const ctorSelectors = [
    'class',
    'class.defaultLibrary',
    'variable.defaultLibrary',
    'function.defaultLibrary',
    'property.defaultLibrary',
  ];

  for (const selector of ctorSelectors) {
    const actual = hexOf(
      semanticTokenColors[selector as keyof typeof semanticTokenColors],
    );

    if (actual !== token('syntax.ctor').toLowerCase()) {
      mismatches.push(
        `semantic ${selector} must be syntax.ctor ${token('syntax.ctor')} (got ${actual || 'missing'})`,
      );
    }
  }

  if (mismatches.length > 0) {
    throw new Error(`Syntax roles drifted:\n- ${mismatches.join('\n- ')}`);
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

const theme = buildTheme();
await fsPromises.mkdir(path.dirname(outPath), { recursive: true });
await fsPromises.writeFile(outPath, `${JSON.stringify(theme, null, 2)}\n`);

process.stdout.write(
  `Built ${outPath} (${Object.keys(colors).length} colors, ${tokenColors.length} token rules)\n`,
);
