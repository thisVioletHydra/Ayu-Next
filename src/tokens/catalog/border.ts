import type { HexColor } from '#types/workbench-colors';

export type CatalogEntry = { hex: HexColor; desc: string };

export const borderCatalog = {
  'border.default': {
    hex: '#191E2A',
    desc: 'Default opaque separator between panes',
  },
  'border.subtle': {
    hex: '#191E2A95',
    desc: 'Softer section headers (alpha)',
  },
  'border.transparent': {
    hex: '#0000',
    desc: 'Intentionally no border / no focus ring',
  },
  'border.menu': {
    hex: '#33415e',
    desc: 'Menu separator line',
  },
  'border.sash': {
    hex: '#3d516a',
    desc: 'Split sash hover',
  },
} as const satisfies Record<string, CatalogEntry>;
