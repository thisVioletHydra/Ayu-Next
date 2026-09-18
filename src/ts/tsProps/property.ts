/**
 * Interface / type / object-literal KEYS — green `#BAE67F`.
 * Class fields (`accents`) — white via classFieldPaint (not green).
 *
 * Do NOT list bare `variable.object.property` / `meta.definition.property` here:
 * they also match class fields and beat white locks on Host.
 */
export const propKeyPaint = {
  role: 'syntax.propKey' as const,
  semantic: ['property'] as const,
  textmate: [
    'meta.object-literal.key',
    'meta.object-literal.key.ts',
    'meta.object-binding-pattern variable.object.property',
    'meta.array-binding-pattern variable.object.property',
  ] as const,
};

/** Interface / type object field names (`role`, `hex`) — green, TextMate only. */
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
    'meta.type.object.type meta.field.declaration variable.other.readwrite',
  ] as const,
};

/**
 * Class fields / private vars (`accents`) — white `#CBCCC6`.
 * Exact Host Inspect winner:
 *   meta.class meta.field.declaration meta.definition.property variable.object.property
 */
export const classFieldPaint = {
  role: 'syntax.fg' as const,
  // no property.declaration semantic — it whitened interface keys (role/hex).
  // Class fields white via TextMate lock only.
  semantic: [] as const,
  textmate: [
    // exact Inspect winner
    'meta.class meta.field.declaration meta.definition.property variable.object.property',
    'meta.class meta.field.declaration meta.definition.property variable.object.property.ts',
    'meta.class.ts meta.field.declaration meta.definition.property variable.object.property.ts',
    'meta.class meta.field.declaration meta.definition.property variable',
    'meta.class meta.field.declaration variable.object.property',
    'meta.class meta.field.declaration variable.object.property.ts',
    'meta.class meta.field.declaration variable.other.readwrite',
    'meta.class meta.field.declaration variable.other.readwrite.ts',
    'meta.class.ts meta.field.declaration.ts variable.object.property.ts',
  ] as const,
};

export const PROP_HEX = '#BAE67F' as const;
export const CLASS_FIELD_HEX = '#CBCCC6' as const;
