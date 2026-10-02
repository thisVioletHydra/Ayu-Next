/**
 * Lib constructors (`new Date`, `new HttpException`) — cyan `#5CCFE6`.
 *
 * Grammar is `new.expr meta.function-call entity.name.function` (not
 * `meta.function-call.constructor`). Do NOT use bare
 * `source new.expr entity.name.function` — that paints chained `.toISOString()`.
 *
 * Type-position Map/Readonly — lavender via typePositionLibPaint.
 */
export const ctorValuePaint = {
  role: 'syntax.entity' as const,
  semantic: [
    'class.defaultLibrary',
    'variable.defaultLibrary',
  ] as const,
  textmate: [
    // actual TS grammar for `new Date()` / `new HttpException()`
    'new.expr meta.function-call entity.name.function',
    'new.expr meta.function-call entity.name.function.ts',
    'new.expr.ts meta.function-call.ts entity.name.function.ts',
    'new.expr meta.function-call support.class',
    'new.expr meta.function-call support.class.builtin',
    'new.expr meta.function-call entity.name.type',
    'new.expr.ts meta.function-call.ts support.class.ts',
    // legacy constructor meta (if grammar emits it)
    'meta.function-call.constructor',
    'meta.function-call.constructor entity.name.function',
    'meta.function-call.constructor entity.name.function.ts',
    'meta.function-call.constructor entity.name.type',
    'meta.function-call.constructor support.class',
    'meta.function-call.constructor support.class.builtin',
    // type-name form of ctor
    'new.expr entity.name.type',
    'new.expr entity.name.type.ts',
    'new.expr entity.name.type.class',
    'new.expr support.class',
    'new.expr support.class.builtin',
    'new.expr support.class.builtin.ts',
    'meta.new-expression entity.name.type',
  ] as const,
};

/**
 * Type-position lib / utility (Map, Readonly in annotations) — lime `#B9F6CA`.
 */
export const typePositionLibPaint = {
  // Readonly/Map type-position → lime via typeAlias + libComplex lock (not lavender)
  role: 'syntax.typeAlias' as const,
  semantic: ['type.defaultLibrary'] as const,
  textmate: [
    'support.class',
    'support.class.builtin',
    'support.class.builtin.ts',
    'entity.name.type',
    'entity.name.type.ts',
    'meta.type.annotation entity.name.type',
    'meta.type.annotation entity.name.type.ts',
    'meta.type.annotation support.class',
    'meta.import support.class',
    'meta.import entity.name.type',
    'meta.import.ts support.class',
    'meta.import.ts entity.name.type',
  ] as const,
};

export const ctorPaint = ctorValuePaint;
export const CTOR_HEX = '#5CCFE6' as const;
export const TYPE_POSITION_LIB_HEX = '#B9F6CA' as const;
