import { palette } from '@/src/palette';
import { token } from '@/src/shared/convertTC';

export function variables() {
  return token(
    {
      name: 'punctuation.terminator',
      foreground: '#CBCCC6B3',

      scope: `punctuation.terminator.statement.ts
      source.ts`,
    },
    {
      name: 'string.quoted.single',
      foreground: '#BAE67E',

      scope: `string.quoted.single.ts
      meta.import.ts
      source.ts`,
    },
    {
      name: 'from',
      foreground: '#FF9944',

      scope: `keyword.control.from.ts
      meta.import.ts
      source.ts`,
    },
    {
      name: 'readwrite',
      foreground: '#CBCCC6',

      scope: `variable.other.readwrite.alias.ts
      meta.import.ts
      source.ts`,
    },
    {
      name: 'const',
      foreground: palette('lightPrimary'),

      scope: `storage.type.ts
      meta.var.expr.ts
      source.ts`,
    },
    {
      name: 'export',
      foreground: '#F29E74',

      scope: `keyword.control.export.ts
      meta.type.declaration.ts
      source.ts`,
    },
    {
      name: 'import',
      foreground: '#F29E74',

      scope: `keyword.control.import.ts
      meta.import.ts
      source.ts`,
    },
    {
      name: 'console',
      foreground: '#59C9DE99',

      scope: `variable.other.object.ts
      meta.function-call.ts
      source.ts`,
    },
    {
      name: 'new',
      foreground: '#F27983',

      scope: `keyword.operator.new.ts
      new.expr.ts
      meta.var.expr.ts
      source.ts`,
    },
    {
      name: 'variable',
      foreground: '#CBCCC6',

      scope: `variable.other.constant.ts
      meta.definition.variable.ts
      meta.var-single-variable.expr.ts
      meta.var.expr.ts
      source.ts`,
    },
    {
      name: 'type',
      foreground: '#90E1C6',

      scope: `entity.name.type.ts
      meta.var.expr.ts
      source.ts`,
    },
    {
      name: 'storage',
      foreground: '#FF9944',

      scope: `storage.type.type.ts
      meta.type.declaration.ts
      source.ts`,
    },
    {
      name: 'class',
      foreground: '#5CCFE6',

      scope: `entity.name.function.ts
      meta.function-call.ts
      new.expr.ts
      meta.var.expr.ts
      source.ts`,
    },
    {
      name: 'punctuation',
      foreground: '#CBCCC6',

      scope: `punctuation.accessor.ts
      meta.function-call.ts
      source.ts`,
    },
    {
      name: 'parameter',
      foreground: '#D4BFFF',

      scope: `variable.object.property.ts
      meta.definition.property.ts
      meta.field.declaration.ts
      meta.object.type.ts
      meta.type.paren.cover.ts
      meta.type.declaration.ts
      source.ts`,
    },

  );
}