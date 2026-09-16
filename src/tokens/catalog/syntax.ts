import type { HexColor } from '#types/workbench-colors';

export type CatalogEntry = { hex: HexColor; desc: string };

/**
 * One role → one hex. Ownership of TextMate + semantic selectors
 * lives in `src/syntax/roles.ts` — do not assign the same scope
 * to two roles.
 */
export const syntaxCatalog = {
  'syntax.fg': {
    hex: '#CBCCC6',
    desc: 'Default text, values, builtin types (`string` in annotations)',
  },
  'syntax.comment': {
    hex: '#5C6773',
    desc: 'Comments',
  },
  'syntax.keyword': {
    hex: '#FF9944',
    desc: 'Keywords: type/interface/return/new/if/private/readonly',
  },
  'syntax.keywordStrong': {
    hex: '#FF9944',
    desc: 'Thick keyword: `class` keyword and decorator `@` (bold)',
  },
  'syntax.operator': {
    hex: '#F29E74',
    desc: 'Operators, accessors, import/export',
  },
  'syntax.string': {
    hex: '#BAE67E',
    desc: 'String literals only — not types, not object keys',
  },
  'syntax.propKey': {
    hex: '#BAE67E',
    desc: 'Object-literal and destructure KEYS on the left',
  },
  'syntax.propField': {
    hex: '#C48464',
    desc: 'Interface / type-literal field names (`role`, `hex`, `{ id, accent }`)',
  },
  'syntax.propDecl': {
    hex: '#BD7F63',
    desc: 'Class field declaration (`private readonly accents`) — not access',
  },
  'syntax.propAccess': {
    hex: '#98BC6C',
    desc: 'Property access (`dto.hex`, `this.accents`) — not declaration',
  },
  'syntax.regexp': {
    hex: '#95E6CB',
    desc: 'Regexp, enum members',
  },
  'syntax.number': {
    hex: '#8C9EFF',
    desc: 'Numbers',
  },
  'syntax.param': {
    hex: '#A898CC',
    desc: 'Function params at declaration AND body usage',
  },
  'syntax.func': {
    hex: '#FFD580',
    desc: 'Functions, methods, decorator NAMES (not `@`)',
  },
  'syntax.entity': {
    hex: '#73D0FF',
    desc: 'Class identifiers and type-alias names (ThemeService, ThemeId)',
  },
  'syntax.interface': {
    hex: '#73D0FF',
    desc: 'Interface names (TokenDto) — own role so fields cannot steal it',
  },
  'syntax.ctor': {
    hex: '#73D0FF',
    desc: 'Every `new X` constructor name — one color, no class/string/error mix',
  },
  'syntax.typeBuiltin': {
    hex: '#CBCCC6',
    desc: 'Builtin / primitive type annotations (`string`, `number`)',
  },
  'syntax.this': {
    hex: '#4CACC0',
    desc: '`this` / `super`',
  },
  'syntax.tag': {
    hex: '#5CCFE6',
    desc: 'HTML/XML tags only — not TS types',
  },
  'syntax.markup': {
    hex: '#F28779',
    desc: 'Library callables (console.*) — not constructors',
  },
  'syntax.special': {
    hex: '#FFE6B3',
    desc: 'Macros',
  },
  'syntax.invalid': {
    hex: '#E74C3C',
    desc: 'Invalid tokens',
  },
} as const satisfies Record<string, CatalogEntry>;
