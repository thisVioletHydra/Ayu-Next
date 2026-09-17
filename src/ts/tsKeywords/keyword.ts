/**
 * Keywords from app.controller.ts.
 * Orange #FF9944 via TextMate only — NO semantic `keyword`
 * (TypeScript classifies `this` as keyword; semantic would force orange).
 *
 * CRITICAL (Roman/Tester Inspect):
 * - Never bare `storage` / bare `keyword`.
 * - `storage.type.type` on a shared rule can win over type-alias NAMES in live
 *   Host matching even when grammar leaf is `entity.name.type.alias` — keep the
 *   `type` keyword on its OWN leaf selector `storage.type.type.ts` and always
 *   exclude `entity.name.type` on other storage.* rules.
 * - Interface names were OK; type-alias (`ThemeId`) was still #FF9944 — do not
 *   put `storage.type.type` in the same array as broad keyword.control scopes.
 */
export const keywordPaint = {
  role: 'syntax.keyword' as const,
  semantic: [] as const,
  textmate: [
    'keyword.control',
    'keyword.control.default',
    'keyword.control.import',
    'keyword.control.export',
    'keyword.control.from',
    'keyword.control.as',
    'keyword.control.flow',
    'keyword.control.conditional',
    'keyword.control.trycatch',
    'keyword.operator.new',
    'storage.modifier - entity.name.type',
    'storage.type.function',
    // NOT storage.type.type here — see typeKeywordPaint
    'storage.type.interface - entity.name.type',
    'storage.type.namespace - entity.name.type',
    'storage.type.module - entity.name.type',
  ] as const,
};

/** `type` keyword only — leaf `.ts` so it cannot paint `ThemeId` (entity.name.type.alias). */
export const typeKeywordPaint = {
  role: 'syntax.keyword' as const,
  semantic: [] as const,
  textmate: [
    'storage.type.type.ts',
    'storage.type.type.tsx',
    'storage.type.type - entity.name.type',
  ] as const,
};

export const keywordStrongPaint = {
  role: 'syntax.keywordStrong' as const,
  semantic: [] as const,
  textmate: [
    'storage.type.class - entity.name.type',
    'punctuation.decorator',
    'punctuation.definition.decorator',
    'punctuation.definition.annotation',
  ] as const,
  fontStyle: 'bold' as const,
};

export const KEYWORD_HEX = '#FF9944' as const;
