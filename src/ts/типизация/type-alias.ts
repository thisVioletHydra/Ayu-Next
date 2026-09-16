import { SALAD_GREEN } from '#ts/типизация/salad';
import type { TypingPaint } from '#ts/типизация/kinds';

/**
 * Type alias names (`type ThemeId`, `id: ThemeId`, `export type { ThemeId }`).
 * Catch-all `entity.name.type` is salad so references cannot fall back to sky.
 * More specific `entity.name.type.class` / `new.expr entity.name.type` stay elsewhere.
 */
export const typeAliasPaint: TypingPaint = {
  id: 'type-alias',
  status: 'painted',
  semantic: {
    type: SALAD_GREEN,
    'type.declaration': SALAD_GREEN,
  },
  textmate: [
    {
      scope: [
        'entity.name.type.alias',
        'meta.type.declaration entity.name.type.alias',
        'entity.name.type',
      ],
      settings: { foreground: SALAD_GREEN },
    },
  ],
};
