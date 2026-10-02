/**
 * Primitive annotations only (`string`, `number`, `boolean`) — white `#CBCCC6`.
 * Do NOT include bare `support.type` (too broad).
 * Complex lib (Map/Readonly/Date/Http*) → syntax.ctor lavender `#D5BFFF`.
 * ThemeId/TokenDto → lime lock.
 */
export const typeBuiltinTyping = {
  role: 'syntax.typeBuiltin' as const,
  // primitives use support.type.primitive TM; type.defaultLibrary = Readonly/Map (lavender)
  semantic: [] as const,
  textmate: [
    'support.type.primitive',
    'support.type.primitive.ts',
    'support.type.builtin',
    'support.type.builtin.ts',
    'storage.type.primitive',
    'storage.type.primitive.ts',
  ] as const,
  hex: '#CBCCC6' as const,
} as const;
