/**
 * Builtin primitives in annotations (`string`, `number`) — white `#CBCCC6`.
 * Complex lib types (Map/Readonly/Date/Http*) stay lavender via syntax.ctor.
 * Custom ThemeId/TokenDto stay lime lock `#B9F6CA`.
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
  hex: '#CBCCC6' as const,
} as const;
