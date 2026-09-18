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
import { propKeyPaint, propFieldPaint, classFieldPaint, PROP_HEX, CLASS_FIELD_HEX } from '#ts/tsProps';
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

export const classFieldLockTokenColors: TokenRule[] = [
  {
    scope: [...classFieldPaint.textmate],
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
    id: 'lock.typing.alias',
    filePriority: 50,
    rules: [typingNameLockTokenColors[1]],
  },
];

export const tokenColors: TokenRule[] = assembleTokenColors(tokenColorSlices);

export const tokenColorPipeline = describePipeline(tokenColorSlices);
