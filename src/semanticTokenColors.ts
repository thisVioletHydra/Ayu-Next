import { token } from '#tokens';

/**
 * Ayu Mirage semantic map. Types/classes share `syntax.entity`;
 * functions/methods/decorators share `syntax.func`.
 *
 * Intentionally omitted: `*.declaration`, Dark+ leftovers
 * (`customLiteral`, `newOperator`, `stringLiteral`, `numberLiteral`),
 * and per-modifier property/parameter overrides — those were the
 * conflict stack that made one scope steal another.
 */
export const semanticHighlighting = true;

const entity = token('syntax.entity');
const tag = token('syntax.tag');
const func = token('syntax.func');
const markup = token('syntax.markup');

export const semanticTokenColors = {
  class: entity,
  'class.defaultLibrary': tag,
  enum: entity,
  'enum.defaultLibrary': tag,
  interface: tag,
  'interface.defaultLibrary': {
    foreground: tag,
    fontStyle: 'italic',
  },
  struct: entity,
  'struct.defaultLibrary': tag,
  type: entity,
  'type.defaultLibrary': tag,
  typeParameter: entity,
  enumMember: token('syntax.regexp'),
  event: token('syntax.operator'),
  function: func,
  method: func,
  decorator: func,
  'function.defaultLibrary': markup,
  'method.defaultLibrary': markup,
  macro: token('syntax.special'),
  comment: {
    foreground: token('syntax.comment'),
    fontStyle: 'italic',
  },
  string: token('syntax.string'),
  keyword: token('syntax.keyword'),
  number: token('syntax.number'),
  regexp: token('syntax.regexp'),
  operator: token('syntax.operator'),
  namespace: token('syntax.operator'),
  module: token('syntax.operator'),
  'variable.language.this': {
    foreground: tag,
    fontStyle: 'italic',
  },
} as const;
