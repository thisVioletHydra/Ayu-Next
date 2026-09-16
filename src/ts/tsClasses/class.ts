/**
 * Class names only (`ThemeService`, `ThemeController`).
 * Cyan — never salad (salad lock is ts/tsTypes for interface/type-alias names).
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
    'entity.name.type.enum',
    'support.class',
  ] as const,
};

export const CLASS_NAME_HEX = '#5CCFE6' as const;
