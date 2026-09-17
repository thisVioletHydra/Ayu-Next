/**
 * Decorator NAMES (`Injectable` in @Injectable()) — etalon cream `#FFE6B3`.
 * Live stack: meta.decorator.ts › meta.function-call.ts › entity.name.function.ts
 * LOCK must beat bare entity.name.function (methods gold) AND leftover fg.
 * `@` stays keywordStrong orange.
 */
export const decoratorNamePaint = {
  role: 'syntax.decoratorName' as const,
  semantic: ['decorator'] as const,
  textmate: [
    'entity.name.function.decorator',
    'entity.name.function.decorator.ts',
    'meta.decorator entity.name.function',
    'meta.decorator.ts entity.name.function',
    'meta.decorator.ts entity.name.function.ts',
    'meta.decorator meta.function-call entity.name.function',
    'meta.decorator.ts meta.function-call.ts entity.name.function',
    'meta.decorator.ts meta.function-call.ts entity.name.function.ts',
    'meta.decorator meta.function-call.ts entity.name.function.ts',
    'meta.decorator variable.other',
    'meta.decorator.ts variable.other.readwrite',
    'meta.decorator.ts variable.other.readwrite.ts',
    'meta.decorator support.function',
    'meta.decorator.ts support.function',
    'storage.type.annotation',
    'variable.annotation',
  ] as const,
};

export const DECORATOR_NAME_HEX = '#FFE6B3' as const;
