import { colors } from '#colors';
import {
  semanticHighlighting,
  semanticTokenColors,
} from '#semanticTokenColors';
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
  const entity = token('syntax.entity').toLowerCase();
  const func = token('syntax.func').toLowerCase();
  const mismatches: string[] = [];
  const banned = [
    '*.declaration',
    'customLiteral',
    'newOperator',
    'stringLiteral',
    'numberLiteral',
  ] as const;

  for (const key of banned) {
    if (key in semanticTokenColors) {
      mismatches.push(`semantic ${key} must not exist — it fights other roles`);
    }
  }

  const semanticExpect: Record<string, string> = {
    type: entity,
    class: entity,
    function: func,
    method: func,
    decorator: func,
  };

  for (const [key, expected] of Object.entries(semanticExpect)) {
    const actual = hexOf(
      semanticTokenColors[key as keyof typeof semanticTokenColors],
    );

    if (actual !== expected) {
      mismatches.push(`semantic ${key} is ${actual || '(missing)'}, expected ${expected}`);
    }
  }

  for (const rule of tokenColors as TokenRule[]) {
    const scopes = scopesOf(rule);
    const foreground = String(rule.settings?.foreground ?? '').toLowerCase();

    if (scopes.length === 1 && scopes[0] === 'entity.name.type' && foreground !== entity) {
      mismatches.push(`TextMate entity.name.type is ${foreground}, expected ${entity}`);
    }

    if (scopes.length === 1 && scopes[0] === 'entity.name' && foreground !== entity) {
      mismatches.push(`TextMate entity.name is ${foreground}, expected ${entity}`);
    }

    if (scopes.some((scope) => scope.includes('punctuation.decorator')) && foreground !== func) {
      mismatches.push(`TextMate decorator punctuation is ${foreground}, expected ${func}`);
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
