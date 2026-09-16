/**
 * Property access from app.controller.ts: dto.role / dto.hex / accents / object keys.
 * Light #CBCCC6. Does not own type/interface names (salad lock #BAE67E).
 */
export const propKeyPaint = {
  role: 'syntax.propKey' as const,
  semantic: ['property'] as const,
  textmate: [
    'meta.object-literal.key',
    'meta.object-binding-pattern variable.object.property',
    'meta.array-binding-pattern variable.object.property',
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
  ] as const,
};

export const PROP_HEX = '#CBCCC6' as const;
