/**
 * Decorators from app.controller.ts: @Injectable / @Controller / @Get / ...
 * `@` stays keywordStrong (bold orange). Decorator NAME is orange like methods.
 * Must never repaint salad type/interface names.
 */
export const decoratorNamePaint = {
  role: 'syntax.func' as const,
  semantic: ['decorator'] as const,
  textmate: [
    'entity.name.function.decorator',
    'meta.decorator entity.name.function',
    'meta.decorator variable.other',
    'storage.type.annotation',
    'variable.annotation',
  ] as const,
};

export const DECORATOR_NAME_HEX = '#FF9944' as const;
