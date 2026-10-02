import { interfaceTypingPaint } from './interface.js';
import { TYPING_NAME_HEX } from './lock.js';
import { typeAliasTypingPaint } from './type-alias.js';

export { TYPING_NAME_HEX } from './lock.js';
export { interfaceTypingPaint, interfaceTypingHex } from './interface.js';
export { typeAliasTypingPaint, typeAliasTypingHex } from './type-alias.js';
export { typeBuiltinTyping } from './type-builtin.js';
export { genericTyping } from './generic.js';
export { utilityTyping } from './utility.js';

/** tsTypes roles already painted (not stubs). */
export const typingPaints = [
  interfaceTypingPaint,
  typeAliasTypingPaint,
] as const;

/** Selectors/scopes under lime `#B9F6CA` lock (short TS scopes + semantic). */
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
