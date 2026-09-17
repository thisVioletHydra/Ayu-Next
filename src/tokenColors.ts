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
  TYPING_NAME_HEX,
} from '#ts/tsTypes';
import { thisPaint, THIS_HEX } from '#ts/tsLanguage';
import { propKeyPaint, propFieldPaint, PROP_HEX } from '#ts/tsProps';

export type { TokenRule } from '#tokenLayers';
export { TokenLayer, describePipeline } from '#tokenLayers';

/** L4 LOCK — this / props (before typing so ThemeId stays absolute last). */
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

/** L4 LOCK — interface then type-alias lime `#B9F6CA` (alias must be last rule). */
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
    id: 'lock.typing',
    filePriority: 20, // after this/prop — ThemeId absolute last
    rules: typingNameLockTokenColors,
  },
];

export const tokenColors: TokenRule[] = assembleTokenColors(tokenColorSlices);

export const tokenColorPipeline = describePipeline(tokenColorSlices);
