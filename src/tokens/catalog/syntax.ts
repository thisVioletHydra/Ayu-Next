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
    desc: 'Default text / values — etalon fg',
  },
  'syntax.comment': {
    hex: '#5C6773',
    desc: 'Comments',
  },
  'syntax.keyword': {
    hex: '#FF9944',
    desc: 'Keywords — etalon orange',
  },
  'syntax.keywordStrong': {
    hex: '#FF9944',
    desc: 'Thick keyword + decorator @ — etalon orange',
  },
  'syntax.operator': {
    hex: '#CBCCC6',
    desc: 'Operators/punct — etalon fg',
  },
  'syntax.string': {
    hex: '#FFE6B3',
    desc: 'String literals — etalon warm yellow',
  },
  'syntax.propKey': {
    hex: '#F29E74',
    desc: 'Object keys — etalon peach',
  },
  'syntax.propField': {
    hex: '#F29E74',
    desc: 'Interface fields — etalon peach',
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
    desc: 'Methods — etalon gold',
  },
  'syntax.entity': {
    hex: '#5BD0E6',
    desc: 'Class names — etalon cyan',
  },
  'syntax.typeAlias': {
    hex: '#BAE67F',
    desc: 'Type-alias ThemeId — etalon green',
  },
  'syntax.interface': {
    hex: '#BAE67F',
    desc: 'Interface TokenDto — etalon green',
  },
  'syntax.ctor': {
    hex: '#D5BFFF',
    desc: 'Lib Map/Date/Http*/Readonly — etalon lavender',
  },
  'syntax.typeBuiltin': {
    hex: '#D5BFFF',
    desc: 'Primitive string annotations — etalon lavender',
  },
  'syntax.decoratorName': {
    hex: '#5BD0E6',
    desc: 'Decorator names — etalon cyan',
  },
  'syntax.this': {
    hex: '#5BD0E6',
    desc: 'this/super — etalon cyan',
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
