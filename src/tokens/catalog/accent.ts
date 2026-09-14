import type { HexColor } from '#types/workbench-colors';

export type CatalogEntry = { hex: HexColor; desc: string };

export const accentCatalog = {
  'accent.default': {
    hex: '#FFCC66',
    desc: 'Primary brand / focus (tabs top border, badges, progress)',
  },
  'accent.emphasis': {
    hex: '#FF9944',
    desc: 'Stronger accent — drop borders, find match, modified tab',
  },
  'accent.hover': {
    hex: '#fac761',
    desc: 'Primary accent hover (extension button)',
  },
  'accent.muted': {
    hex: '#ffcc66ae',
    desc: 'Primary with alpha — links, menu selection border',
  },
  'accent.border': {
    hex: '#FFCC66a5',
    desc: 'Active input option border',
  },
  'accent.outline': {
    hex: '#ffcc6659',
    desc: 'Filter match outline',
  },
  'accent.soft': {
    hex: '#ffcc6633',
    desc: 'Soft accent wash (peek match)',
  },
  'accent.whisper': {
    hex: '#ffcc660d',
    desc: 'Barely visible accent fill (filter match bg)',
  },
  'accent.inactive': {
    hex: '#805500',
    desc: 'Dimmed accent — unfocused modified tab border',
  },
  'accent.aux': {
    hex: '#eeb85a',
    desc: 'Secondary warm CTA (buttons, debug exception label)',
  },
  'accent.auxHover': {
    hex: '#ffd580',
    desc: 'Hover for aux / bright ANSI yellow slot fill',
  },
  'accent.lilacMuted': {
    hex: '#d4bfffb3',
    desc: 'Lilac tint — git submodule decoration',
  },
} as const satisfies Record<string, CatalogEntry>;
