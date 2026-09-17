/**
 * Class names only (`ThemeService`, `ThemeController`).
 * Cyan — never salad; lib Map/Date/Readonly → syntax.ctor lavender.
 */
export const classPaint = {
  role: 'syntax.entity' as const,
  semantic: [
    'class.declaration',
    'enum',
    'enum.defaultLibrary',
    'struct',
    'struct.defaultLibrary',
  ] as const,
  textmate: [
    'entity.name.type.class',
    'entity.name.type.class.ts',
    'entity.name.type.enum',
  ] as const,
};

export const CLASS_NAME_HEX = '#5BD0E6' as const;
