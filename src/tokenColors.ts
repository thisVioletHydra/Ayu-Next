import leftoverJson from '#data/token-colors.json' with { type: 'json' };
import { textMateFromRoles } from '#syntax/roles';
import {
  interfaceTypingPaint,
  typeAliasTypingPaint,
  TYPING_NAME_HEX,
} from '#ts/tsTypes';

type TokenRule = {
  scope: string | string[];
  settings: { foreground?: string; fontStyle?: string };
};

/** Salad lock rules — MUST be last so no leftover/keyword orange can win. */
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

export const tokenColors: TokenRule[] = [
  // 1) leftover first (lowest priority)
  ...(leftoverJson as TokenRule[]),
  // 2) role paints, but without typing-name scopes (those go last)
  ...stripTypingScopesFromRoles(textMateFromRoles()),
  // 3) HARD LOCK last — type/interface names cannot be overridden to orange
  ...typingNameLockTokenColors,
];
