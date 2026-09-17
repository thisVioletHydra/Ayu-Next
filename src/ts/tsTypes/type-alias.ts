import { TYPING_NAME_HEX } from './lock.js';

/**
 * Type-alias names (`ThemeId`) + type parameters.
 * High-specificity TM last-wins; semantic includes declarations.
 * MUST stay salad — never orange.
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
    'meta.type.declaration entity.name.type',
    'meta.type.declaration entity.name.type.alias',
    'meta.type.annotation entity.name.type',
    'meta.type.annotation entity.name.type.alias',
    'meta.interface meta.type.annotation entity.name.type',
    'meta.function meta.return.type entity.name.type',
    'meta.function meta.parameters entity.name.type',
    'entity.name.type',
  ] as const,
};

export const typeAliasTypingHex = TYPING_NAME_HEX;
