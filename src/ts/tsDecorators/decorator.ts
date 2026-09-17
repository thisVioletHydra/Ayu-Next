/**
 * Decorator NAMES (`Injectable` in @Injectable()) — light cyan `#5CCFE6`.
 * Live stack: meta.decorator.ts › meta.function-call.ts › entity.name.function.ts
 * Must LOCK above bare syntax.func orange. `@` stays keywordStrong.
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
    'meta.decorator.ts meta.function-call.ts entity.name.function.ts',
    'meta.decorator variable.other',
    'meta.decorator.ts variable.other.readwrite.ts',
    'storage.type.annotation',
    'variable.annotation',
  ] as const,
};

export const DECORATOR_NAME_HEX = '#5CCFE6' as const;
