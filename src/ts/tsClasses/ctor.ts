/**
 * `new X` / lib classes in value or type position: Map, Date, HttpException, Readonly.
 * Lavender `#D4BFFF` (Roman etalon) — never cyan, never salad lime.
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
    // bare entity.name.type for lib/utility (Readonly/Map) — typing alias/interface locks win last for ThemeId/TokenDto
    'entity.name.type',
    'entity.name.type.ts',
    'meta.type.annotation entity.name.type',
    'meta.type.annotation entity.name.type.ts',
    'meta.type.annotation support.class',
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
  ] as const,
};

export const CTOR_HEX = '#D4BFFF' as const;
