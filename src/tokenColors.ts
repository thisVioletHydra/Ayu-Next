import leftoverJson from '#data/token-colors.json' with { type: 'json' };
import { textMateFromRoles } from '#syntax/roles';
import {
  assembleTokenColors,
  describePipeline,
  TokenLayer,
  type LayerSlice,
  type TokenRule,
} from '#tokenLayers';
import {
  interfaceTypingPaint,
  typeAliasTypingPaint,
  typeBuiltinTyping,
  TYPING_NAME_HEX,
} from '#ts/tsTypes';
import { thisPaint, THIS_HEX } from '#ts/tsLanguage';
import { modifierKeywordPaint, KEYWORD_HEX } from '#ts/tsKeywords';
import { propKeyPaint, propFieldPaint, classFieldPaint, memberAccessPaint, PROP_HEX, CLASS_FIELD_HEX } from '#ts/tsProps';
import { decoratorNamePaint, DECORATOR_NAME_HEX } from '#ts/tsDecorators';
import { ctorValuePaint, typePositionLibPaint, CTOR_HEX, TYPE_POSITION_LIB_HEX } from '#ts/tsClasses';

export type { TokenRule } from '#tokenLayers';
export { TokenLayer, describePipeline } from '#tokenLayers';

/** L4 LOCK — this / props (before lib/decorator/typing). */
export const thisPropLockTokenColors: TokenRule[] = [
  {
    scope: [...thisPaint.textmate],
    settings: { foreground: THIS_HEX, fontStyle: thisPaint.fontStyle },
  },
  {
    scope: [...propKeyPaint.textmate, ...propFieldPaint.textmate],
    settings: { foreground: PROP_HEX },
  },
];

/** L4 LOCK — class fields white (after prop green). */
export const modifierLockTokenColors: TokenRule[] = [
  {
    scope: [...modifierKeywordPaint.textmate],
    settings: { foreground: KEYWORD_HEX, fontStyle: 'italic' },
  },
];


/** L4 LOCK — `constructor` keyword gold like methods (beats storage.type.ts orange). */
export const constructorKeywordLockTokenColors: TokenRule[] = [
  {
    scope: [
      'meta.method.declaration storage.type',
      'meta.method.declaration storage.type.ts',
      'meta.method.declaration.ts storage.type.ts',
      'meta.method.declaration.tsx storage.type.tsx',
      'meta.definition.method storage.type',
      'meta.definition.method storage.type.ts',
      'meta.definition.method.ts storage.type.ts',
      'meta.class meta.method.declaration storage.type.ts',
      'meta.class.ts meta.method.declaration.ts storage.type.ts',
    ],
    settings: { foreground: '#FFD580' },
  },
];

export const classFieldLockTokenColors: TokenRule[] = [
  {
    scope: [...classFieldPaint.textmate, ...memberAccessPaint.textmate],
    settings: { foreground: CLASS_FIELD_HEX },
  },
];

/** L4 LOCK — decorator names light cyan (beats syntax.func orange). */
export const decoratorLockTokenColors: TokenRule[] = [
  {
    scope: [...decoratorNamePaint.textmate],
    settings: { foreground: DECORATOR_NAME_HEX },
  },
];

/** L4 LOCK — complex lib lavender (Map/Readonly/Date/Http*). */
export const libComplexLockTokenColors: TokenRule[] = [
  {
    scope: [...typePositionLibPaint.textmate],
    settings: { foreground: TYPE_POSITION_LIB_HEX },
  },
];

export const libCtorLockTokenColors: TokenRule[] = [
  {
    scope: [...ctorValuePaint.textmate],
    settings: { foreground: CTOR_HEX },
  },
];

/** L4 LOCK — primitive annotations white (AFTER complex lib). */
export const libPrimitiveLockTokenColors: TokenRule[] = [
  {
    scope: [...typeBuiltinTyping.textmate],
    settings: { foreground: typeBuiltinTyping.hex },
  },
];

/** @deprecated combined — prefer complex + primitive locks */
export const libLockTokenColors: TokenRule[] = [
  ...libComplexLockTokenColors,
  ...libCtorLockTokenColors,
  ...libPrimitiveLockTokenColors,
];

/** L4 LOCK — interface then type-alias lime `#B9F6CA` (alias absolute last). */
export const typingNameLockTokenColors: TokenRule[] = [
  {
    scope: [...interfaceTypingPaint.textmate],
    settings: { foreground: TYPING_NAME_HEX },
  },
  {
    scope: [...typeAliasTypingPaint.textmate],
    settings: { foreground: TYPING_NAME_HEX },
  },
  {
    // ThemeService in type position — lime; not bare entity.name.type (Readonly)
    scope: [
      'meta.type.annotation entity.name.type.class',
      'meta.type.annotation.ts entity.name.type.class.ts',
      'meta.type.annotation entity.name.type.class.ts',
      'meta.function.parameters entity.name.type.class',
      'meta.function.parameters.ts entity.name.type.class.ts',
    ],
    settings: { foreground: TYPING_NAME_HEX },
  },
];

function stripLockedScopes(rules: TokenRule[], locked: Set<string>): TokenRule[] {
  const out: TokenRule[] = [];
  for (const rule of rules) {
    const scopes = Array.isArray(rule.scope) ? rule.scope : [rule.scope];
    const kept = scopes.filter((s) => s && !locked.has(s));
    if (kept.length === 0) continue;
    out.push({ ...rule, scope: kept });
  }
  return out;
}

const lockedTm = new Set<string>([
  ...interfaceTypingPaint.textmate,
  ...typeAliasTypingPaint.textmate,
  ...thisPaint.textmate,
  ...propKeyPaint.textmate,
  ...propFieldPaint.textmate,
  ...classFieldPaint.textmate,
  ...modifierKeywordPaint.textmate,
  ...decoratorNamePaint.textmate,
  ...typeBuiltinTyping.textmate,
  ...typePositionLibPaint.textmate,
  ...ctorValuePaint.textmate,
]);

/**
 * Pipeline slices. Order inside the array does not matter — `assembleTokenColors`
 * sorts by TokenLayer then filePriority.
 *
 * L3 SEMANTIC is `semanticTokenColors` (see `#semanticTokenColors`), not tokenColors.
 */
export const tokenColorSlices: LayerSlice[] = [
  {
    layer: TokenLayer.General,
    id: 'leftover',
    filePriority: 10,
    rules: leftoverJson as TokenRule[],
  },
  {
    layer: TokenLayer.Narrow,
    id: 'roles.ts',
    filePriority: 10,
    rules: stripLockedScopes(textMateFromRoles(), lockedTm),
  },
  {
    layer: TokenLayer.Lock,
    id: 'lock.thisProp',
    filePriority: 10,
    rules: thisPropLockTokenColors,
  },
  {
    layer: TokenLayer.Lock,
    id: 'lock.classField',
    filePriority: 12,
    rules: classFieldLockTokenColors,
  },
  {
    layer: TokenLayer.Lock,
    id: 'lock.modifier',
    filePriority: 13,
    rules: modifierLockTokenColors,
  },
  {
    layer: TokenLayer.Lock,
    id: 'lock.constructorKeyword',
    filePriority: 13,
    rules: constructorKeywordLockTokenColors,
  },
  {
    layer: TokenLayer.Lock,
    id: 'lock.operators',
    filePriority: 14,
    rules: [
      {
        scope: [
          // catch-all operators (last-wins over gray keyword.operator role)
          'keyword.operator',
          'keyword.operator.ts',
          'keyword.operator.tsx',
          'keyword.operator.arrow',
          'keyword.operator.arrow.ts',
          'keyword.operator.arrow.tsx',
          'keyword.operator.assignment',
          'keyword.operator.assignment.ts',
          'keyword.operator.assignment.tsx',
          'keyword.operator.assignment.compound',
          'keyword.operator.assignment.compound.ts',
          'keyword.operator.comparison',
          'keyword.operator.comparison.ts',
          'keyword.operator.comparison.tsx',
          'keyword.operator.relational',
          'keyword.operator.relational.ts',
          'keyword.operator.equality',
          'keyword.operator.equality.ts',
          'keyword.operator.ternary',
          'keyword.operator.ternary.ts',
          'keyword.operator.ternary.tsx',
          'keyword.operator.optional',
          'keyword.operator.optional.ts',
          'keyword.operator.optional-chaining',
          'keyword.operator.optional-chaining.ts',
          'punctuation.accessor.optional',
          'punctuation.accessor.optional.ts',
          'keyword.operator.nullish-coalescing',
          'keyword.operator.nullish-coalescing.ts',
          'keyword.operator.logical',
          'keyword.operator.logical.ts',
          'keyword.operator.spread',
          'keyword.operator.spread.ts',
          'keyword.operator.spread.tsx',
          'keyword.operator.rest',
          'keyword.operator.rest.ts',
          'keyword.operator.rest.tsx',
          'keyword.operator.arithmetic',
          'keyword.operator.arithmetic.ts',
          'keyword.operator.increment',
          'keyword.operator.decrement',
          'keyword.operator.bitwise',
          'keyword.operator.bitwise.ts',
          'keyword.operator.expression',
          'keyword.operator.type',
          'keyword.operator.type.ts',
        ],
        settings: { foreground: '#F29E74' },
      },
    ],
  },
  {
    layer: TokenLayer.Lock,
    id: 'lock.templateString',
    filePriority: 15,
    rules: [
      {
        // template string CONTENT — green (not orange keyword)
        scope: [
          'string.template',
          'string.template.ts',
          'string.template.tsx',
        ],
        settings: { foreground: '#BAE67F' },
      },
      {
        // backticks + ${ } + $ — coral operators
        scope: [
          'punctuation.definition.string.template',
          'punctuation.definition.string.template.begin',
          'punctuation.definition.string.template.end',
          'punctuation.definition.string.template.ts',
          'punctuation.definition.string.template.begin.ts',
          'punctuation.definition.string.template.end.ts',
          'string.template punctuation.definition.string.template.begin',
          'string.template punctuation.definition.string.template.end',
          'source string.template punctuation.definition.string.template.begin',
          'source string.template punctuation.definition.string.template.end',
          'source punctuation.definition.string.template.begin.js',
          'source punctuation.definition.string.template.end.js',
          'punctuation.definition.template-expression',
          'punctuation.definition.template-expression.begin',
          'punctuation.definition.template-expression.end',
          'punctuation.definition.template-expression.begin.ts',
          'punctuation.definition.template-expression.end.ts',
          'source punctuation.definition.template-expression.begin',
          'source punctuation.definition.template-expression.end',
          'source.js meta.template.expression.js punctuation.definition.template-expression.begin.js',
          'source.js meta.template.expression.js punctuation.definition.template-expression.end.js',
          'punctuation.definition.template-expression.begin.js',
          'punctuation.definition.template-expression.end.js',
        ],
        settings: { foreground: '#F29E74' },
      },
    ],
  },
  {
    layer: TokenLayer.Lock,
    id: 'lock.comma',
    filePriority: 15,
    rules: [
      {
        scope: [
          'punctuation.separator.comma',
          'punctuation.separator.comma.ts',
          'meta.brace.round punctuation.separator.comma',
          'source punctuation.separator.comma',
        ],
        settings: { foreground: '#F29E74' },
      },
    ],
  },
  {
    layer: TokenLayer.Lock,
    id: 'lock.keywordNew',
    filePriority: 16,
    rules: [
      {
        // `new` stays keyword orange — beats bare keyword.operator coral
        scope: [
          'keyword.operator.new',
          'keyword.operator.new.ts',
          'keyword.operator.new.tsx',
        ],
        settings: { foreground: '#FF9944' },
      },
    ],
  },

  {
    layer: TokenLayer.Lock,
    id: 'lock.decorator',
    filePriority: 35,
    rules: decoratorLockTokenColors,
  },
  {
    layer: TokenLayer.Lock,
    id: 'lock.lib.complex',
    filePriority: 25,
    rules: libComplexLockTokenColors,
  },
  {
    layer: TokenLayer.Lock,
    id: 'lock.lib.ctor',
    filePriority: 36,
    rules: libCtorLockTokenColors,
  },
  {
    layer: TokenLayer.Lock,
    id: 'lock.libMethod',
    filePriority: 37,
    rules: [
      {
        scope: [
          'support.function',
          'support.function.ts',
          'support.function.builtin',
          'support.function.builtin.ts',
          'entity.name.function.defaultLibrary',
          'meta.function-call support.function',
          'meta.function-call.support support.function',
        ],
        settings: { foreground: '#F28779' },
      },
    ],
  },
  {
    layer: TokenLayer.Lock,
    id: 'lock.lib.primitive',
    filePriority: 28,
    rules: libPrimitiveLockTokenColors,
  },
  {
    layer: TokenLayer.Lock,
    id: 'lock.typing.interface',
    filePriority: 40,
    rules: [typingNameLockTokenColors[0]],
  },
  {
    layer: TokenLayer.Lock,
    id: 'lock.typing.classRef',
    filePriority: 45,
    rules: [typingNameLockTokenColors[2]],
  },
  {
    layer: TokenLayer.Lock,
    id: 'lock.typing.alias',
    filePriority: 50,
    rules: [typingNameLockTokenColors[1]],
  },
];

export const tokenColors: TokenRule[] = assembleTokenColors(tokenColorSlices);

export const tokenColorPipeline = describePipeline(tokenColorSlices);
