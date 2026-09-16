import type { HexColor } from '#types/workbench-colors';

export type CatalogEntry = { hex: HexColor; desc: string };

/**
 * One role → one hex. Ownership of TextMate + semantic selectors
 * lives in `src/syntax/roles.ts` — do not assign the same scope
 * to two roles.
 *
 * Nest playground hexes match original Ayu Next + the ideal shot:
 * types/classes/ctors/builtins share teal, methods/decorators share accent.
 */
export const syntaxCatalog = {
  'syntax.fg': {
    hex: '#CBCCC6',
    desc: 'Default text, values, interface fields, object keys',
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
    desc: 'Thick keyword: `class` keyword (bold, same hex as keyword)',
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
    hex: '#CBCCC6',
    desc: 'Object-literal and destructure keys — same as fg, not strings',
  },
  'syntax.propField': {
    hex: '#CBCCC6',
    desc: 'Interface / type-literal field names (`role`, `hex`)',
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
    hex: '#D4BFFF',
    desc: 'Function params at declaration AND body usage',
  },
  'syntax.func': {
    hex: '#FFCC66',
    desc: 'Functions, methods, decorators including `@`',
  },
  'syntax.entity': {
    hex: '#90E1C6',
    desc: 'Class identifiers and type-alias names (ThemeService, ThemeId)',
  },
  'syntax.interface': {
    hex: '#90E1C6',
    desc: 'Interface names (TokenDto) — same hex as entity',
  },
  'syntax.ctor': {
    hex: '#90E1C6',
    desc: 'Every `new X` name (Map/Date/HttpException) — same hex as entity',
  },
  'syntax.typeBuiltin': {
    hex: '#90E1C6',
    desc: 'Builtin / primitive type annotations (`string`, `number`) — same as entity',
  },
  'syntax.this': {
    hex: '#5CCFE6',
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
