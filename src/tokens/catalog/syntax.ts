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
    desc: 'Default text — etalon fg',
  },
  'syntax.comment': {
    hex: '#5C6773',
    desc: 'Comments',
  },
  'syntax.keyword': {
    hex: '#FF9944',
    desc: 'Keywords — etalon #FF9944',
  },
  'syntax.keywordStrong': {
    hex: '#FF9944',
    desc: 'Thick keyword + @ — etalon #FF9944',
  },
  'syntax.operator': {
    hex: '#CBCCC6',
    desc: 'Operators/punct — etalon fg',
  },
  'syntax.string': {
    hex: '#BAE67F',
    desc: 'String literals — etalon #BAE67F',
  },
  'syntax.propKey': {
    hex: '#BAE67F',
    desc: 'Interface/object field keys — green like strings',
  },
  'syntax.propField': {
    hex: '#BAE67F',
    desc: 'Interface field names (role, hex) — green like strings',
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
    hex: '#F29E74',
    desc: 'Params — etalon peach',
  },
  'syntax.func': {
    hex: '#FFD580',
    desc: 'Methods — etalon #FFD580 (not keyword orange)',
  },
  'syntax.entity': {
    hex: '#5CCFE6',
    desc: 'Class names — etalon cyan #5CCFE6',
  },
  'syntax.typeAlias': {
    hex: '#B9F6CA',
    desc: 'ThemeId — etalon #B9F6CA',
  },
  'syntax.interface': {
    hex: '#B9F6CA',
    desc: 'TokenDto — etalon #B9F6CA',
  },
  'syntax.ctor': {
    hex: '#D5BFFF',
    desc: 'Lib Map/Date/Http*/Readonly — etalon #D5BFFF',
  },
  'syntax.typeBuiltin': {
    hex: '#CBCCC6',
    desc: 'Primitive annotations (string/number) — white; complex types keep lime/lavender',
  },
  'syntax.decoratorName': {
    hex: '#FFE6B3',
    desc: 'Decorator names — etalon cream #FFE6B3',
  },
  'syntax.this': {
    hex: '#5CCFE6',
    desc: 'this/super — etalon cyan #5CCFE6',
  },
  'syntax.tag': {
    hex: '#5CCFE6',
    desc: 'HTML/XML tags — cyan',
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
