import { TYPING_NAME_HEX } from './lock.js';

/**
 * Type-alias names (`ThemeId`) + type parameters → lime `#B9F6CA`.
 *
 * Do NOT include bare `entity.name.type` — it paints Readonly/Map lime.
 * Alias + interface leaves only; lib/utility → lavender via ctor/typeBuiltin locks.
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
    'meta.type.declaration entity.name.type.alias.tsx',
  ] as const,
};

export const typeAliasTypingHex = TYPING_NAME_HEX;
