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
import { propKeyPaint, propFieldPaint, PROP_HEX } from '#ts/tsProps';
import { decoratorNamePaint, DECORATOR_NAME_HEX } from '#ts/tsDecorators';
import { ctorPaint, CTOR_HEX } from '#ts/tsClasses';

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

/** L4 LOCK — decorator names light cyan (beats syntax.func orange). */
export const decoratorLockTokenColors: TokenRule[] = [
  {
    scope: [...decoratorNamePaint.textmate],
    settings: { foreground: DECORATOR_NAME_HEX },
  },
];

/** L4 LOCK — lib/utility lavender (Readonly/Map/Date/string) before lime. */
export const libLockTokenColors: TokenRule[] = [
  {
    scope: [...typeBuiltinTyping.textmate],
    settings: { foreground: typeBuiltinTyping.hex },
  },
  {
    scope: [...ctorPaint.textmate],
    settings: { foreground: CTOR_HEX },
  },
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
  ...decoratorNamePaint.textmate,
  ...typeBuiltinTyping.textmate,
  ...ctorPaint.textmate,
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
    id: 'lock.punct',
    filePriority: 15,
    rules: [
      {
        scope: [
          'punctuation.definition.block',
          'punctuation.definition.block.ts',
          'punctuation.definition.parameters',
          'punctuation.definition.parameters.ts',
          'punctuation.definition.array',
          'punctuation.definition.array.ts',
          'punctuation.section.block',
          'punctuation.section.block.ts',
          'meta.brace.curly',
          'meta.brace.curly.ts',
          'meta.brace.round',
          'meta.brace.round.ts',
          'meta.brace.square',
          'meta.brace.square.ts',
          'punctuation.brackets',
          'punctuation.parentheses',
          'punctuation.separator',
          'punctuation.separator.comma',
          'punctuation.separator.comma.ts',
          'punctuation.terminator',
          'punctuation.terminator.statement',
          'punctuation.terminator.statement.ts',
          'punctuation.separator.key-value',
          'punctuation.separator.key-value.ts',
          'punctuation.section',
        ],
        settings: { foreground: '#CBCCC6' },
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
    id: 'lock.lib',
    filePriority: 25,
    rules: libLockTokenColors,
  },
  {
    layer: TokenLayer.Lock,
    id: 'lock.typing.interface',
    filePriority: 40,
    rules: [typingNameLockTokenColors[0]],
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
