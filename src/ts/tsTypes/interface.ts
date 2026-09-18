import { TYPING_NAME_HEX } from './lock.js';

/**
 * Interface names (`TokenDto`) only — not fields → lime `#B9F6CA`.
 *
 * Short TS TextMate scopes only. No Vue ultra-long exact-match chains —
 * they never hit Nest/TS tokens. Semantic `interface` covers declarations.
 * MUST stay lime — never orange.
 */
export const interfaceTypingPaint = {
  role: 'syntax.interface' as const,
  semantic: [
    'interface',
    'interface.declaration',
    'interface.defaultLibrary',
  ] as const,
  textmate: [
    'entity.name.type.interface',
    'entity.name.type.interface.ts',
    'entity.name.type.interface.tsx',
  ] as const,
};

export const interfaceTypingHex = TYPING_NAME_HEX;
