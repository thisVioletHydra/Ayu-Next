/**
 * Semantic color tokens (see each *Catalog file for per-role desc).
 *
 * Groups: bg surfaces · fg text · border · accent · state · term ANSI slots 0–15 · debug
 *
 * term.* = protocol slot index, NOT a promise of hue.
 *   0 black 1 red 2 green 3 yellow 4 blue 5 magenta 6 cyan 7 white · 8–15 bright
 */
import { accentCatalog } from '#tokens/catalog/accent';
import { bgCatalog } from '#tokens/catalog/bg';
import { borderCatalog } from '#tokens/catalog/border';
import { debugCatalog } from '#tokens/catalog/debug';
import { fgCatalog } from '#tokens/catalog/fg';
import { stateCatalog } from '#tokens/catalog/state';
import { termCatalog } from '#tokens/catalog/term';

export type { CatalogEntry } from '#tokens/catalog/bg';

export const tokenCatalog = {
  ...bgCatalog,
  ...fgCatalog,
  ...borderCatalog,
  ...accentCatalog,
  ...stateCatalog,
  ...termCatalog,
  ...debugCatalog,
} as const;

export type TokenRole = keyof typeof tokenCatalog;
