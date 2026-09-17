import leftoverJson from '#data/token-colors.json' with { type: 'json' };
import { textMateFromRoles } from '#syntax/roles';
import {
  interfaceTypingPaint,
  typeAliasTypingPaint,
  TYPING_NAME_HEX,
} from '#ts/tsTypes';
import { thisPaint, THIS_HEX } from '#ts/tsLanguage';
import { propKeyPaint, propFieldPaint, PROP_HEX } from '#ts/tsProps';

type TokenRule = {
  scope: string | string[];
  settings: { foreground?: string; fontStyle?: string };
};

/** Salad lock rules — MUST be last so no leftover/keyword orange can win. */
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

function stripTypingScopesFromRoles(rules: TokenRule[]): TokenRule[] {
  const locked = new Set<string>([
    ...interfaceTypingPaint.textmate,
    ...typeAliasTypingPaint.textmate,
  ]);
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

export const tokenColors: TokenRule[] = [
  ...(leftoverJson as TokenRule[]),
  ...stripLockedScopes(textMateFromRoles(), lockedTm),
  ...typingNameLockTokenColors,
  ...thisPropLockTokenColors,
];
