/**
 * Keywords — orange #FF9944, TextMate only (no semantic keyword).
 *
 * Host Inspect (2026-09-18): exclusion selectors like
 * `storage.type.class - entity.name.type` do NOT match `storage.type.class.ts`
 * («No theme selector» → fg #CBCCC6). Use language leaf scopes ONLY.
 *
 * Never bare `storage` / `storage.type.class` / `storage.type.type`.
 * ThemeId/TokenDto stay lime via typing lock on entity.name.type.* (last-wins).
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
    // private / readonly → modifierKeywordPaint (italic)
    // function keyword
    'storage.type.function.ts',
    'storage.type.function.tsx',
    // interface / namespace / module keywords
    'storage.type.interface.ts',
    'storage.type.interface.tsx',
    'storage.type.namespace.ts',
    'storage.type.namespace.tsx',
    'storage.type.module.ts',
    'storage.type.module.tsx',
    // const / let / var / constructor
    'storage.type.ts',
    'storage.type.tsx',
  ] as const,
};

/** `type` keyword — language leaf only. */
export const typeKeywordPaint = {
  role: 'syntax.keyword' as const,
  semantic: [] as const,
  textmate: [
    'storage.type.type.ts',
    'storage.type.type.tsx',
  ] as const,
};

/** `class` keyword + decorator `@` punct — language leaf only. */
export const keywordStrongPaint = {
  role: 'syntax.keywordStrong' as const,
  semantic: [] as const,
  textmate: [
    'storage.type.class.ts',
    'storage.type.class.tsx',
    'meta.class.ts storage.type.class.ts',
    'meta.class.tsx storage.type.class.tsx',
    'punctuation.decorator',
    'punctuation.definition.decorator',
    'punctuation.definition.annotation',
  ] as const,
  fontStyle: 'bold' as const,
};

/** `private` / `readonly` / `public` — orange #FF9944 + italic. */
export const modifierKeywordPaint = {
  role: 'syntax.keyword' as const,
  semantic: [] as const,
  textmate: [
    'storage.modifier.ts',
    'storage.modifier.tsx',
  ] as const,
  fontStyle: 'italic' as const,
};

export const KEYWORD_HEX = '#FF9944' as const;
