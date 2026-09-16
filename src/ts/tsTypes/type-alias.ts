import { TYPING_NAME_HEX } from './lock.js';

/**
 * Только имена type-alias (`ThemeId`) и type-parameter.
 * Не class.declaration и не builtins.
 */
export const typeAliasTypingPaint = {
  role: 'syntax.typeAlias' as const,
  semantic: ['type', 'typeParameter'] as const,
  textmate: [
    'entity.name.type.alias',
    'entity.name.type',
  ] as const,
};

export const typeAliasTypingHex = TYPING_NAME_HEX;
