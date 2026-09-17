/**
 * Keywords from app.controller.ts.
 * Orange #FF9944 via TextMate only — NO semantic `keyword`
 * (TypeScript classifies `this` as keyword; semantic would force orange).
 * No bare keyword/storage scopes.
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
    'storage.modifier',
    'storage.type.function',
    'storage.type.type',
    'storage.type.interface',
    'storage.type.namespace',
    'storage.type.module',
  ] as const,
};

export const keywordStrongPaint = {
  role: 'syntax.keywordStrong' as const,
  semantic: [] as const,
  textmate: [
    'storage.type.class',
    'punctuation.decorator',
    'punctuation.definition.decorator',
    'punctuation.definition.annotation',
  ] as const,
  fontStyle: 'bold' as const,
};

export const KEYWORD_HEX = '#FF9944' as const;
