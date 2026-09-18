/**
 * Interface / type-literal / object-literal KEYS — green `#BAE67F`.
 * Class fields (`accents`) are NOT green — see classFieldPaint (white).
 *
 * No semantic `property.declaration` here: it paints both interface AND class
 * fields the same. Interface keys = TextMate only; class fields = white lock.
 */
export const propKeyPaint = {
  role: 'syntax.propKey' as const,
  // property access (dto.role) — green; declarations handled by TM / classField
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

/** Interface / type object field names (`role`, `hex`) — green, TextMate only. */
export const propFieldPaint = {
  role: 'syntax.propField' as const,
  semantic: [] as const,
  textmate: [
    'meta.interface meta.field.declaration variable.object.property',
    'meta.interface meta.field.declaration variable.object.property.ts',
    'meta.interface meta.field.declaration variable.other.readwrite',
    'meta.interface meta.field.declaration variable.other.readwrite.ts',
    'meta.interface variable.object.property',
    'meta.interface.ts variable.object.property.ts',
    'meta.type.declaration meta.field.declaration variable.object.property',
    'meta.type.object.type meta.field.declaration variable.object.property',
    'meta.type.object.type meta.field.declaration variable.other.readwrite',
  ] as const,
};

/**
 * Class fields / private vars (`accents`) — white `#CBCCC6`.
 * Semantic property.declaration → white so Inspect matches Host.
 */
export const classFieldPaint = {
  role: 'syntax.fg' as const,
  semantic: ['property.declaration'] as const,
  textmate: [
    'meta.class meta.field.declaration variable.object.property',
    'meta.class meta.field.declaration variable.object.property.ts',
    'meta.class meta.field.declaration variable.other.readwrite',
    'meta.class meta.field.declaration variable.other.readwrite.ts',
    'meta.class meta.field.declaration meta.definition.property variable',
    'meta.class.ts meta.field.declaration.ts variable.object.property.ts',
    'meta.class property.declaration',
  ] as const,
};

export const PROP_HEX = '#BAE67F' as const;
export const CLASS_FIELD_HEX = '#CBCCC6' as const;
