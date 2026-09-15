import type { HexColor } from '#types/workbench-colors';

export type CatalogEntry = { hex: HexColor; desc: string };

/**
 * Ayu Mirage syntax roles. One role → one hex.
 * Semantic tokens and TextMate scopes must both read from here
 * so type/function/keyword rules cannot drift apart.
 */
export const syntaxCatalog = {
  'syntax.fg': {
    hex: '#CBCCC6',
    desc: 'Default source text, punctuation, variables',
  },
  'syntax.comment': {
    hex: '#5C6773',
    desc: 'Comments',
  },
  'syntax.keyword': {
    hex: '#FF9944',
    desc: 'Keywords and storage (`type`, `class`, `return`, `new`)',
  },
  'syntax.operator': {
    hex: '#F29E74',
    desc: 'Operators, accessors, modules',
  },
  'syntax.string': {
    hex: '#BAE67E',
    desc: 'Strings',
  },
  'syntax.regexp': {
    hex: '#95E6CB',
    desc: 'Regexp, enum members, special characters',
  },
  'syntax.number': {
    hex: '#8C9EFF',
    desc: 'Numbers',
  },
  'syntax.constant': {
    hex: '#D4BFFF',
    desc: 'Named constants and parameters',
  },
  'syntax.func': {
    hex: '#FFD580',
    desc: 'Functions, methods, decorators',
  },
  'syntax.entity': {
    hex: '#73D0FF',
    desc: 'Types, classes, structs, enums',
  },
  'syntax.tag': {
    hex: '#5CCFE6',
    desc: 'Interfaces, tags, library types, `this`',
  },
  'syntax.markup': {
    hex: '#F28779',
    desc: 'Member variables, library functions (console.*)',
  },
  'syntax.special': {
    hex: '#FFE6B3',
    desc: 'Macros / special punctuation leftover',
  },
  'syntax.invalid': {
    hex: '#E74C3C',
    desc: 'Invalid / error tokens',
  },
} as const satisfies Record<string, CatalogEntry>;
