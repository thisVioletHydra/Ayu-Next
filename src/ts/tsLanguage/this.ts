/**
 * `this` / `super` — cyan italic. Does not touch salad type-name lock.
 */
export const thisPaint = {
  role: 'syntax.this' as const,
  semantic: ['variable.language.this'] as const,
  textmate: ['variable.language.this', 'variable.language.super'] as const,
  fontStyle: 'italic' as const,
};

export const THIS_HEX = '#5CCFE6' as const;
