/**
 * Builtin / lib types in annotations (`string`, `number`, `Readonly`).
 * Cyan `#5CCFE6` — not salad (salad is only custom type/interface names).
 */
export const typeBuiltinTyping = {
  role: 'syntax.typeBuiltin' as const,
  semantic: ['type.defaultLibrary'] as const,
  textmate: [
    'support.type.primitive',
    'support.type.builtin',
    'storage.type.primitive',
  ] as const,
  hex: '#5CCFE6' as const,
} as const;
