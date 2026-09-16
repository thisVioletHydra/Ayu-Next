import { interfaceTypingPaint } from './interface.js';
import { TYPING_NAME_HEX } from './lock.js';
import { typeAliasTypingPaint } from './type-alias.js';

export { TYPING_NAME_HEX } from './lock.js';
export { interfaceTypingPaint, interfaceTypingHex } from './interface.js';
export { typeAliasTypingPaint, typeAliasTypingHex } from './type-alias.js';
export { typeBuiltinTyping } from './type-builtin.js';
export { genericTyping } from './generic.js';
export { utilityTyping } from './utility.js';

/** Роли типизации, которые уже красятся (не пустышки). */
export const typingPaints = [
  interfaceTypingPaint,
  typeAliasTypingPaint,
] as const;

/** Селекторы/скоупы под замком салатового. */
export const typingNameLock = {
  hex: TYPING_NAME_HEX,
  roles: ['syntax.interface', 'syntax.typeAlias'] as const,
  semantic: [
    ...interfaceTypingPaint.semantic,
    ...typeAliasTypingPaint.semantic,
  ],
  textmate: [
    ...interfaceTypingPaint.textmate,
    ...typeAliasTypingPaint.textmate,
  ],
} as const;
