import { TYPING_NAME_HEX } from './lock.js';

/**
 * Type-alias names (`ThemeId`) + type parameters → lime `#B9F6CA`.
 *
 * Short TS scopes only (no ultra-long Vue exact-match chains — useless on Nest/TS).
 * Live FAIL (Tester): ThemeId stayed `#FF9944` while TokenDto was lime — strengthen
 * `entity.name.type.alias*` + `meta.type.declaration entity.name.type*` last-wins.
 * Semantic `type` / `type.declaration` must stay `#B9F6CA`.
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
    'entity.name.type.alias',
    'entity.name.type.alias.ts',
    'entity.name.type.alias.tsx',
    'meta.type.declaration entity.name.type.alias',
    'meta.type.declaration entity.name.type.alias.ts',
    'meta.type.declaration entity.name.type',
    'entity.name.type',
  ] as const,
};

export const typeAliasTypingHex = TYPING_NAME_HEX;
