import type { HexColor } from '#types/workbench-colors';

export type CatalogEntry = { hex: HexColor; desc: string };

export const debugCatalog = {
  'debug.marker': {
    hex: '#ff00ff',
    desc: 'Hot-pink placeholder for unfinished highlights — not a real theme color',
  },
} as const satisfies Record<string, CatalogEntry>;
