/**
 * Keywords from app.controller.ts only.
 * Orange #FF9944. No bare `keyword`/`storage` (they paint half the file).
 * Does not own type/interface *names* (salad lock).
 */
export const keywordPaint = {
  role: 'syntax.keyword' as const,
  semantic: ['keyword'] as const,
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
    'keyword.other',
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
