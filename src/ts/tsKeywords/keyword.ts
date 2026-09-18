/**
 * Keywords from app.controller.ts.
 * Orange #FF9944 via TextMate only — NO semantic `keyword`.
 *
 * Roman Inspect: `class` is storage.type.class.ts (no entity.name.type on token).
 * Leaf `.ts`/`.tsx` selectors required — exclusion-only can be «No theme selector».
 * Never bare `storage` / bare `storage.type.class` / bare `storage.type.type`.
 * Always keep `- entity.name.type` on non-leaf storage.* so ThemeId lime holds.
 */
export const keywordPaint = {
  role: 'syntax.keyword' as const,
  semantic: [] as const,
  textmate: [
    'keyword.control',
    'keyword.control.ts',
    'keyword.control.tsx',
    'keyword.control.default',
    'keyword.control.default.ts',
    'keyword.control.import',
    'keyword.control.import.ts',
    'keyword.control.export',
    'keyword.control.export.ts',
    'keyword.control.from',
    'keyword.control.from.ts',
    'keyword.control.as',
    'keyword.control.as.ts',
    'keyword.control.flow',
    'keyword.control.flow.ts',
    'keyword.control.conditional',
    'keyword.control.conditional.ts',
    'keyword.control.trycatch',
    'keyword.control.trycatch.ts',
    'keyword.operator.new',
    'keyword.operator.new.ts',
    // private / readonly / public …
    'storage.modifier.ts',
    'storage.modifier.tsx',
    'storage.modifier - entity.name.type',
    // function keyword
    'storage.type.function.ts',
    'storage.type.function.tsx',
    'storage.type.function - entity.name.type',
    // interface / namespace / module keywords
    'storage.type.interface.ts',
    'storage.type.interface.tsx',
    'storage.type.interface - entity.name.type',
    'storage.type.namespace.ts',
    'storage.type.namespace.tsx',
    'storage.type.namespace - entity.name.type',
    'storage.type.module.ts',
    'storage.type.module.tsx',
    'storage.type.module - entity.name.type',
    // const / let / var / constructor (leaf + exclusion only)
    'storage.type.ts - entity.name.type',
    'storage.type.tsx - entity.name.type',
  ] as const,
};

/** `type` keyword — leaf only, never paints ThemeId. */
export const typeKeywordPaint = {
  role: 'syntax.keyword' as const,
  semantic: [] as const,
  textmate: [
    'storage.type.type.ts',
    'storage.type.type.tsx',
    'storage.type.type - entity.name.type',
  ] as const,
};

/** `class` keyword + decorator `@`. Leaf scopes required for Host. */
export const keywordStrongPaint = {
  role: 'syntax.keywordStrong' as const,
  semantic: [] as const,
  textmate: [
    'storage.type.class.ts',
    'storage.type.class.tsx',
    'storage.type.class - entity.name.type',
    'meta.class.ts storage.type.class.ts',
    'meta.class.tsx storage.type.class.tsx',
    'punctuation.decorator',
    'punctuation.definition.decorator',
    'punctuation.definition.annotation',
  ] as const,
  fontStyle: 'bold' as const,
};

export const KEYWORD_HEX = '#FF9944' as const;
