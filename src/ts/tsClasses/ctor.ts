/**
 * Lib classes Map / Date / HttpException / Readonly — etalon lavender `#D5BFFF`.
 * Must beat bare entity.name.function (methods) and fg for import/value positions.
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
    'support.class',
    'support.class.builtin',
    'support.class.builtin.ts',
    'support.function.builtin',
    // type-position lib / utility
    'entity.name.type',
    'entity.name.type.ts',
    'meta.type.annotation entity.name.type',
    'meta.type.annotation entity.name.type.ts',
    'meta.type.annotation support.class',
    // `new Map` / `new Date` / `new HttpException` — function leaf under new.expr
    'meta.function-call.constructor',
    'meta.function-call.constructor entity.name.function',
    'meta.function-call.constructor entity.name.function.ts',
    'meta.function-call.constructor entity.name.type',
    'meta.function-call.constructor support.class',
    'meta.function-call.constructor support.class.builtin',
    'meta.function-call.constructor variable.other.readwrite',
    'new.expr entity.name.type',
    'new.expr entity.name.type.ts',
    'new.expr entity.name.function',
    'new.expr entity.name.function.ts',
    'new.expr entity.name.type.class',
    'new.expr support.class',
    'new.expr support.class.builtin',
    'new.expr variable.other.readwrite',
    'new.expr variable.other.constant',
    'meta.new-expression entity.name.type',
    'meta.new-expression entity.name.function',
    'source new.expr entity.name.type',
    'source new.expr entity.name.function',
    // import { HttpException } — often variable.other.readwrite / support
    'meta.import support.class',
    'meta.import entity.name.type',
    'meta.import variable.other.readwrite',
    'meta.import.ts support.class',
    'meta.import.ts entity.name.type',
    'meta.import.ts variable.other.readwrite.ts',
  ] as const,
};

export const CTOR_HEX = '#D5BFFF' as const;
