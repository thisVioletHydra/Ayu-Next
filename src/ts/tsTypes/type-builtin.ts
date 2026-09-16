/**
 * Builtin primitives in annotations (`string`, `number`) — light `#CBCCC6`.
 * Custom type/interface names stay salad lock `#BAE67E`.
 */
export const typeBuiltinTyping = {
  role: 'syntax.typeBuiltin' as const,
  semantic: ['type.defaultLibrary'] as const,
  textmate: [
    'support.type.primitive',
    'support.type.builtin',
    'storage.type.primitive',
  ] as const,
  hex: '#CBCCC6' as const,
} as const;
