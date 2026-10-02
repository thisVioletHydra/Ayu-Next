/**
 * `this` / `super` — cyan italic #5CCFE6.
 * Do NOT use bare `variable.language` — too broad.
 * TS semantic often labels `this` as keyword — no semantic keyword orange.
 */
export const thisPaint = {
  role: 'syntax.this' as const,
  semantic: ['variable.language.this'] as const,
  textmate: [
    'variable.language.this',
    'variable.language.this.ts',
    'variable.language.super',
    'variable.language.super.ts',
  ] as const,
  fontStyle: 'italic' as const,
};

export const THIS_HEX = '#5CCFE6' as const;
