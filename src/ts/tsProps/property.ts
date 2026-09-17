/**
 * Property access: dto.role / accents / object keys — light #CBCCC6.
 * Never orange. Does not own type/interface names.
 */
export const propKeyPaint = {
  role: 'syntax.propKey' as const,
  semantic: ['property'] as const,
  textmate: [
    'meta.object-literal.key',
    'meta.object-binding-pattern variable.object.property',
    'meta.array-binding-pattern variable.object.property',
    'variable.object.property',
    'variable.other.property',
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
    'meta.interface meta.field.declaration variable.other.readwrite',
    'meta.type.declaration meta.field.declaration variable.object.property',
    'meta.type.object.type meta.field.declaration variable.object.property',
    'meta.class meta.field.declaration variable.object.property',
    'meta.class meta.field.declaration meta.definition.property variable',
  ] as const,
};

export const PROP_HEX = '#F29E74' as const;
