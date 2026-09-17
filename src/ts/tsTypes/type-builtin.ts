/**
 * Builtin primitives in annotations (`string`, `number`) — lavender `#D4BFFF`.
 * Custom type/interface names stay lime lock `#B9F6CA`.
 */
export const typeBuiltinTyping = {
  role: 'syntax.typeBuiltin' as const,
  semantic: ['type.defaultLibrary'] as const,
  textmate: [
    'support.type.primitive',
    'support.type.builtin',
    'support.type',
    'storage.type.primitive',
  ] as const,
  hex: '#D5BFFF' as const,
} as const;
