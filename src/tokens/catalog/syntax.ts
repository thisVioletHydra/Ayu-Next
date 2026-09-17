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
    hex: '#CBCCC6',
    desc: 'Operators/accessors/punctuation — light (not orange); keywords own import/export',
  },
  'syntax.string': {
    hex: '#FF9944',
    desc: 'String literals — orange per Nest original shot',
  },
  'syntax.propKey': {
    hex: '#CBCCC6',
    desc: 'Object-literal / destructure / property keys — light like params',
  },
  'syntax.propField': {
    hex: '#CBCCC6',
    desc: 'Interface / type-literal field names (role, hex) — fg white, not keys',
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
    hex: '#CBCCC6',
    desc: 'Function params (id, dto) — white/fg, not purple',
  },
  'syntax.func': {
    hex: '#FF9944',
    desc: 'Methods — orange/gold; decorator names own syntax.decoratorName cyan',
  },
  'syntax.entity': {
    hex: '#5CCFE6',
    desc: 'Class identifiers (ThemeService, ThemeController) — cyan, not salad types',
  },
  'syntax.typeAlias': {
    hex: '#B9F6CA',
    desc: 'Type-alias names (ThemeId) — salad lock (tsTypes)',
  },
  'syntax.interface': {
    hex: '#B9F6CA',
    desc: 'Interface names (TokenDto) — salad lock (tsTypes), forever',
  },
  'syntax.ctor': {
    hex: '#D4BFFF',
    desc: 'Lib classes in type/value (Map, Date, HttpException, Readonly) — lavender',
  },
  'syntax.typeBuiltin': {
    hex: '#D4BFFF',
    desc: 'Primitive/lib annotations (`string`) + utilities — lavender (not salad names)',
  },
  'syntax.decoratorName': {
    hex: '#5CCFE6',
    desc: 'Decorator names (Injectable, Controller) — light cyan; `@` stays keywordStrong orange',
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
