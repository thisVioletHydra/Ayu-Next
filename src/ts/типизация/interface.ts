import { SALAD_GREEN } from '#ts/типизация/salad';
import type { TypingPaint } from '#ts/типизация/kinds';

/**
 * Interfaces only (`interface TokenDto`, `dto: TokenDto`).
 * Name color is locked salad green — fields stay on other roles.
 */
export const interfacePaint: TypingPaint = {
  id: 'interface',
  status: 'painted',
  semantic: {
    interface: SALAD_GREEN,
    'interface.declaration': SALAD_GREEN,
    'interface.defaultLibrary': SALAD_GREEN,
  },
  textmate: [
    {
      scope: [
        'entity.name.type.interface',
        'meta.interface entity.name.type.interface',
        'meta.type.annotation entity.name.type.interface',
      ],
      settings: { foreground: SALAD_GREEN },
    },
  ],
};
