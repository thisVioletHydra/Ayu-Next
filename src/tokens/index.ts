import type { HexColor } from '#types/workbench-colors';
import type { TokenRole } from '#tokens/catalog';

import { tokenCatalog } from '#tokens/catalog';
import { tokenValues } from '#tokens/values';

export type { TokenRole } from '#tokens/catalog';
export { tokenCatalog } from '#tokens/catalog';

/** Runtime map role → hex (for iteration / tooling). Prefer `token()` / `tokenEntry()` for lookups. */
export const tokens = new Map<TokenRole, HexColor>(
  Object.entries(tokenValues) as [TokenRole, HexColor][],
);

/**
 * Hex for a role. Generic keeps the literal type:
 * `token('bg.base')` → `'#1F2430'`, not a fat `#${string}` union.
 * Types still erase at runtime — only the string value remains.
 */
export function token<R extends TokenRole>(role: R): (typeof tokenCatalog)[R]['hex'] {
  return tokenCatalog[role].hex;
}

/** Full catalog row `{ hex, desc }` by key — this is what you can actually use at runtime. */
export function tokenEntry<R extends TokenRole>(role: R): (typeof tokenCatalog)[R] {
  return tokenCatalog[role];
}

export function tokenDesc<R extends TokenRole>(role: R): (typeof tokenCatalog)[R]['desc'] {
  return tokenCatalog[role].desc;
}
