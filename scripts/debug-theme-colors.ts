/**
 * Apply Ayu Next tokenColors to a TS sample the same way VS Code/TextMate does.
 * Needs Cursor.app (ships vscode-textmate + oniguruma).
 * Usage: pnpm theme:debug [path/to/file.ts]
 */
// @ts-nocheck
import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import process from 'node:process';
import url from 'node:url';

const require = createRequire(import.meta.url);
const cursorRoot = '/Applications/Cursor.app/Contents/Resources/app';
const tm = require(`${cursorRoot}/node_modules/vscode-textmate/release/main.js`);
const onig = require(`${cursorRoot}/node_modules/vscode-oniguruma/release/main.js`);

const root = path.join(path.dirname(url.fileURLToPath(import.meta.url)), '..');
const themePath = path.join(root, 'themes/ayu-next-color-theme.json');
const samplePath = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.join(root, 'playground/node/nest/app.controller.ts');
const grammarPath = `${cursorRoot}/extensions/typescript-basics/syntaxes/TypeScript.tmLanguage.json`;
const wasmPath = `${cursorRoot}/node_modules/vscode-oniguruma/release/onig.wasm`;

const o = onig.default ?? onig;
await o.loadWASM(fs.readFileSync(wasmPath));

const theme = JSON.parse(fs.readFileSync(themePath, 'utf8'));

const registry = new tm.Registry({
  theme: {
    name: theme.name,
    settings: [
      {
        settings: {
          foreground: theme.colors['editor.foreground'] ?? '#CBCCC6',
          background: theme.colors['editor.background'] ?? '#1F2430',
        },
      },
      ...theme.tokenColors.map((rule: { scope: unknown, settings: unknown }) => ({
        scope: rule.scope,
        settings: rule.settings,
      })),
    ],
  },
  onigLib: {
    createOnigScanner: o.createOnigScanner,
    createOnigString: o.createOnigString,
  },
  loadGrammar: async (scopeName: string) => {
    if (scopeName !== 'source.ts') {
      return null;
    }
    return tm.parseRawGrammar(fs.readFileSync(grammarPath, 'utf8'), grammarPath);
  },
});

const grammar = await registry.loadGrammarWithConfiguration('source.ts', 1, {});
const colorMap = registry.getColorMap();
const code = fs.readFileSync(samplePath, 'utf8');

const watch = new Set([
  '@', 'Injectable', 'Controller', 'Get', 'Post', 'Param', 'Body', 'HttpCode',
  'HttpException', 'Date', 'Map', 'toISOString', 'startsWith', 'resolve', 'putToken',
  'getTheme', 'createToken', 'private', 'readonly', 'ThemeService', 'ThemeController',
  'ThemeId', 'TokenDto', 'string', 'Variables', 'requestId', 'set', 'get',
]);

process.stdout.write(`theme=${themePath}\n`);
process.stdout.write(`sample=${samplePath}\n`);
process.stdout.write(`semanticHighlighting=${theme.semanticHighlighting} semanticRules=${Object.keys(theme.semanticTokenColors ?? {}).length}\n\n`);

let ruleStack = tm.INITIAL;
for (const line of code.split('\n')) {
  const result = grammar.tokenizeLine2(line, ruleStack);
  ruleStack = result.ruleStack;
  const tokens = result.tokens;
  for (let i = 0; i < tokens.length; i += 2) {
    const start = tokens[i];
    const meta = tokens[i + 1];
    const end = i + 2 < tokens.length ? tokens[i + 2] : line.length;
    const text = line.slice(start, end).trim();
    if (!watch.has(text)) {
      continue;
    }
    const fg = (meta >>> 15) & 0xFF;
    const fontStyle = (meta >>> 11) & 0xF;
    const color = colorMap[fg] ?? `idx:${fg}`;
    const italic = (fontStyle & 1) ? ' italic' : '';
    process.stdout.write(`${String(color).padEnd(9)}${italic.padEnd(8)} ${JSON.stringify(text)}\n`);
  }
}
