/**
 * `this` / `super` — cyan italic #5CCFE6.
 * TS semantic often labels `this` as keyword — we do NOT paint semantic keyword orange.
 */
export const thisPaint = {
  role: 'syntax.this' as const,
  semantic: ['variable.language', 'variable.language.this'] as const,
  textmate: [
    'variable.language.this',
    'variable.language.super',
    'variable.language',
  ] as const,
  fontStyle: 'italic' as const,
};

export const THIS_HEX = '#5CCFE6' as const;
