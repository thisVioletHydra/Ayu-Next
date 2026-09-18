/**
 * Interface/object field KEYS — green `#BAE67F` (same as string literals).
 * Never peach/orange. Does not own type names.
 */
export const propKeyPaint = {
  role: 'syntax.propKey' as const,
  semantic: ['property'] as const,
  textmate: [
    'meta.object-literal.key',
    'meta.object-literal.key.ts',
    'meta.object-binding-pattern variable.object.property',
    'meta.array-binding-pattern variable.object.property',
    'variable.object.property',
    'variable.object.property.ts',
    'variable.other.property',
    'variable.other.property.ts',
    'variable.other.object.property',
    'entity.name.variable.property',
    'meta.definition.property',
    'meta.definition.property variable',
  ] as const,
};

export const propFieldPaint = {
  role: 'syntax.propField' as const,
  semantic: ['property.declaration'] as const,
  textmate: [
    'meta.interface meta.field.declaration variable.object.property',
    'meta.interface meta.field.declaration variable.object.property.ts',
    'meta.interface meta.field.declaration variable.other.readwrite',
    'meta.interface meta.field.declaration variable.other.readwrite.ts',
    'meta.interface variable.object.property',
    'meta.interface.ts variable.object.property.ts',
    'meta.type.declaration meta.field.declaration variable.object.property',
    'meta.type.object.type meta.field.declaration variable.object.property',
    'meta.class meta.field.declaration variable.object.property',
    'meta.class meta.field.declaration meta.definition.property variable',
  ] as const,
};

export const PROP_HEX = '#BAE67F' as const;
