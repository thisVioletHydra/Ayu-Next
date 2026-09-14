import type { HexColor } from '#types/workbench-colors';
import type { TokenRole } from '#tokens/catalog';

import { tokenCatalog } from '#tokens/catalog';

/** Flat hex map derived from catalog (for Map + satisfies). */
export const tokenValues = Object.fromEntries(
  (Object.entries(tokenCatalog) as [TokenRole, (typeof tokenCatalog)[TokenRole]][]).map(
    ([role, entry]) => [role, entry.hex],
  ),
) as unknown as Record<TokenRole, HexColor>;
