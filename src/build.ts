import { colors } from '#colors';
import {
  semanticHighlighting,
  semanticTokenColors,
} from '#semanticTokenColors';
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

const theme = buildTheme();
await fsPromises.mkdir(path.dirname(outPath), { recursive: true });
await fsPromises.writeFile(outPath, `${JSON.stringify(theme, null, 2)}\n`);

process.stdout.write(
  `Built ${outPath} (${Object.keys(colors).length} colors, ${tokenColors.length} token rules)\n`,
);
