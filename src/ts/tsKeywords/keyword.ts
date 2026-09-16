/**
 * Keywords from app.controller.ts: type/interface/export/class/private/readonly/new/return/if/throw/const.
 * Orange #FF9944. Does not own type/interface *names* (salad lock).
 */
export const keywordPaint = {
  role: 'syntax.keyword' as const,
  semantic: ['keyword'] as const,
  textmate: [
    'keyword',
    'storage',
    'storage.type.keyword',
    'storage.type.function',
    'storage.type.type',
    'storage.type.interface',
    'keyword.control.default',
    'keyword.operator.new',
    'keyword.control.import',
    'keyword.control.export',
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
