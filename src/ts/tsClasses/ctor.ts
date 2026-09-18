/**
 * Lib constructors (`new Date`, `new HttpException`) — cyan `#5CCFE6`.
 * Do NOT use bare `new.expr entity.name.function` — it paints chained
 * `.toISOString()` under `new Date().toISOString()`.
 * Type-position Map/Readonly — lavender via typePositionLibPaint.
 */
export const ctorValuePaint = {
  role: 'syntax.entity' as const,
  semantic: [
    'class.defaultLibrary',
    'variable.defaultLibrary',
  ] as const,
  textmate: [
    'meta.function-call.constructor',
    'meta.function-call.constructor entity.name.function',
    'meta.function-call.constructor entity.name.function.ts',
    'meta.function-call.constructor entity.name.type',
    'meta.function-call.constructor entity.name.type.ts',
    'meta.function-call.constructor support.class',
    'meta.function-call.constructor support.class.builtin',
    'meta.function-call.constructor variable.other.readwrite',
    // ctor type name only — not chained methods
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
 * Type-position lib / utility (Map, Readonly in annotations) — lavender `#D5BFFF`.
 */
export const typePositionLibPaint = {
  role: 'syntax.ctor' as const,
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

export const ctorPaint = ctorValuePaint;
export const CTOR_HEX = '#5CCFE6' as const;
export const TYPE_POSITION_LIB_HEX = '#D5BFFF' as const;
