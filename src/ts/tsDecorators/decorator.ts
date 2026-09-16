/**
 * Decorator NAMES from app.controller.ts — light `#CBCCC6`.
 * `@` stays keywordStrong (bold orange). Must not touch salad type lock.
 */
export const decoratorNamePaint = {
  role: 'syntax.decoratorName' as const,
  semantic: ['decorator'] as const,
  textmate: [
    'entity.name.function.decorator',
    'meta.decorator entity.name.function',
    'meta.decorator variable.other',
    'storage.type.annotation',
    'variable.annotation',
  ] as const,
};

export const DECORATOR_NAME_HEX = '#CBCCC6' as const;
