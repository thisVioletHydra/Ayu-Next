/**
 * Keywords from app.controller.ts.
 * Orange #FF9944 via TextMate only — NO semantic `keyword`
 * (TypeScript classifies `this` as keyword; semantic would force orange).
 *
 * CRITICAL (Roman Inspect): bare `storage` / broad `storage.modifier` /
 * `storage.type.type|interface` match PARENT scopes on ThemeId/TokenDto and
 * flood them orange over lime. Use TextMate exclusions `- entity.name.type`
 * so keywords stay orange but type/interface NAMES do not.
 * Never emit bare `storage` or bare `keyword`.
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
    // exclusions: storage.* appears in parent stack of type names
    'storage.modifier - entity.name.type',
    'storage.type.function',
    'storage.type.type - entity.name.type',
    'storage.type.interface - entity.name.type',
    'storage.type.namespace - entity.name.type',
    'storage.type.module - entity.name.type',
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
