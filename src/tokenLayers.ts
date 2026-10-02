/**
 * Token-color priority layers for ayu-next.
 *
 * VS Code tokenColors are last-wins at equal specificity. We never hand-order
 * the final JSON — `assembleTokenColors()` concatenates layers in this order:
 *
 *   1 GENERAL  — leftover / punctuation / broad defaults (`src/data/token-colors.json`)
 *   2 NARROW   — language constructs from `src/ts/*` roles (keywords, methods, strings…)
 *   3 SEMANTIC — not in tokenColors; emitted as `semanticTokenColors` (layer documented here)
 *   4 LOCK     — ultra-specific locks LAST (typing names `#B9F6CA`, `this`, props…)
 *
 * Storage→orange exclusions live in NARROW keyword paints; typing lime locks live in LOCK.
 * Nothing after LOCK may be appended.
 */

export const TokenLayer = {
  General: 1,
  Narrow: 2,
  Semantic: 3,
  Lock: 4,
} as const;

export type TokenLayerId = (typeof TokenLayer)[keyof typeof TokenLayer];

export type TokenRule = {
  scope: string | string[];
  settings: { foreground?: string; fontStyle?: string };
};

/** One ordered slice of the pipeline (filePriority sorts inside a layer, low → early). */
export type LayerSlice = {
  layer: TokenLayerId;
  /** Stable name for asserts / docs (`leftover`, `roles`, `lock.thisProp`, `lock.typing`). */
  id: string;
  /** Lower runs earlier inside the same layer. */
  filePriority: number;
  rules: TokenRule[];
};

export function sortSlices(slices: LayerSlice[]): LayerSlice[] {
  return [...slices].sort((a, b) => {
    if (a.layer !== b.layer) return a.layer - b.layer;
    if (a.filePriority !== b.filePriority) return a.filePriority - b.filePriority;
    return a.id.localeCompare(b.id);
  });
}

/** Flatten slices into tokenColors. Strips anything that is not a VS Code TokenRule. */
export function assembleTokenColors(slices: LayerSlice[]): TokenRule[] {
  const ordered = sortSlices(slices);
  if (ordered.length === 0) return [];

  // Hard guarantee: LOCK must be last layer present in tokenColors pipeline
  const layers = ordered.map((s) => s.layer);
  const maxLayer = Math.max(...layers);
  if (maxLayer !== TokenLayer.Lock) {
    throw new Error(
      `tokenColors pipeline must end on LOCK (4); max layer was ${maxLayer}`,
    );
  }
  for (let i = 1; i < ordered.length; i++) {
    if (ordered[i].layer < ordered[i - 1].layer) {
      throw new Error(
        `token layer regression: ${ordered[i - 1].id} (L${ordered[i - 1].layer}) then ${ordered[i].id} (L${ordered[i].layer})`,
      );
    }
  }

  return ordered.flatMap((s) => s.rules);
}

export function describePipeline(slices: LayerSlice[]): string {
  return sortSlices(slices)
    .map((s) => `L${s.layer}:${s.id}[${s.rules.length}]`)
    .join(' → ');
}
