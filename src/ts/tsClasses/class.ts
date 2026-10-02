/**
 * Class declaration names (`export class ThemeService`) — cyan `#5CCFE6`.
 * Type-position `: ThemeService` → bare semantic `class` → lime (typeAlias).
 * Lib/custom ctor in `new X` → class.defaultLibrary / TM new.expr cyan.
 */
export const classPaint = {
  role: 'syntax.entity' as const,
  semantic: [
    'class.declaration',
  ] as const,
  textmate: [
    'entity.name.type.class',
    'entity.name.type.class.ts',
    'meta.class entity.name.type.class',
    'meta.class.ts entity.name.type.class.ts',
  ] as const,
};

export const CLASS_NAME_HEX = '#5CCFE6' as const;
