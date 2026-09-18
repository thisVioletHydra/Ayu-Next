/**
 * Lib constructors (`new Date`, `new HttpException`) — cyan `#5CCFE6`.
 * Type-position Map/Readonly — lavender via typePositionLibPaint.
 */
export const ctorValuePaint = {
  role: 'syntax.entity' as const, // cyan catalog
  semantic: [
    'class.defaultLibrary',
    'variable.defaultLibrary',
    'function.defaultLibrary',
    'property.defaultLibrary',
  ] as const,
  textmate: [
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
  ] as const,
};

/**
 * Type-position lib / utility (Map, Readonly in annotations) — lavender `#D5BFFF`.
 * Not constructors.
 */
export const typePositionLibPaint = {
  role: 'syntax.ctor' as const, // lavender catalog
  semantic: [] as const,
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

/** @deprecated alias — prefer ctorValuePaint */
export const ctorPaint = ctorValuePaint;

export const CTOR_HEX = '#5CCFE6' as const; // constructors cyan
export const TYPE_POSITION_LIB_HEX = '#D5BFFF' as const;
