import { TYPING_NAME_HEX } from './lock.js';

/**
 * Type-alias names (`ThemeId`) + type parameters → lime `#B9F6CA`.
 *
 * Short TS TextMate scopes only. Do NOT add ultra-long Vue-style scope chains
 * (space-separated stacks like `source.vue meta… meta… entity.name…`): those
 * fire only on exact stack match and are useless for Nest/TS (`app.controller.ts`).
 * Rely on short `entity.name.type*` + semantic `type` / `type.declaration`.
 * MUST stay lime — never orange.
 */
export const typeAliasTypingPaint = {
  role: 'syntax.typeAlias' as const,
  semantic: [
    'type',
    'type.declaration',
    'typeParameter',
    'typeParameter.declaration',
  ] as const,
  textmate: [
    'entity.name.type',
    'entity.name.type.alias',
    'entity.name.type.alias.ts',
    'entity.name.type.alias.tsx',
  ] as const,
};

export const typeAliasTypingHex = TYPING_NAME_HEX;
