import { TYPING_NAME_HEX } from './lock.js';

/**
 * Interface names (`TokenDto`) only — not fields.
 * MUST stay salad — never orange.
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
    'meta.interface entity.name.type.interface',
    'meta.interface.declaration entity.name.type.interface',
  ] as const,
};

export const interfaceTypingHex = TYPING_NAME_HEX;
