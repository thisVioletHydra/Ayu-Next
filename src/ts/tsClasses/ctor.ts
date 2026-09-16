/**
 * `new X` / lib classes in value or type position: Map, Date, HttpException, Readonly.
 * Cyan — must never repaint salad type-alias / interface names.
 */
export const ctorPaint = {
  role: 'syntax.ctor' as const,
  semantic: [
    'class',
    'class.defaultLibrary',
    'variable.defaultLibrary',
    'function.defaultLibrary',
    'property.defaultLibrary',
  ] as const,
  textmate: [
    'meta.function-call.constructor',
    'meta.function-call.constructor entity.name.function',
    'meta.function-call.constructor entity.name.type',
    'meta.function-call.constructor support.class',
    'meta.function-call.constructor support.class.builtin',
    'meta.function-call.constructor variable.other.readwrite',
    'new.expr entity.name.type',
    'new.expr entity.name.function',
    'new.expr entity.name.type.class',
    'new.expr support.class',
    'new.expr support.class.builtin',
    'new.expr variable.other.readwrite',
    'new.expr variable.other.constant',
    'meta.new-expression entity.name.type',
    'source new.expr entity.name.type',
    'source meta.export.default meta.class meta.method.declaration meta.block meta.var.expr new.expr entity.name.type',
  ] as const,
};

export const CTOR_HEX = '#5CCFE6' as const;
