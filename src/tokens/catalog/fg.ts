import type { HexColor } from '#types/workbench-colors';

export type CatalogEntry = { hex: HexColor; desc: string };

export const fgCatalog = {
  'fg.primary': {
    hex: '#CBCCC6',
    desc: 'Main readable text and icons on dark surfaces',
  },
  'fg.secondary': {
    hex: '#707A8C',
    desc: 'Secondary / inactive labels (side bar, status, placeholders)',
  },
  'fg.tertiary': {
    hex: '#8c8c8c',
    desc: 'De-emphasized list text',
  },
  'fg.onDark': {
    hex: '#FFFFFF',
    desc: 'High-contrast text on dark selection / menus (full white)',
  },
  'fg.onDarkMuted': {
    hex: '#ffffff73',
    desc: 'Same role as onDark but ~45% opacity (hover widget secondary text)',
  },
  'fg.lineActive': {
    hex: '#707a8ccc',
    desc: 'Active line number',
  },
  'fg.lineInactive': {
    hex: '#707a8c66',
    desc: 'Inactive line number / soft scrollbar',
  },
  'fg.guide': {
    hex: '#707a8c4d',
    desc: 'Indent guides, rulers, bracket match wash',
  },
  'fg.guideStrong': {
    hex: '#707a8c99',
    desc: 'Stronger guide / bracket match border',
  },
  'fg.scrollHover': {
    hex: '#707a8c96',
    desc: 'Scrollbar thumb hover',
  },
  'fg.picker': {
    hex: '#484f5e',
    desc: 'Quick-open group labels',
  },
  'fg.whitespace': {
    hex: '#cccccc25',
    desc: 'Visible whitespace dots',
  },
} as const satisfies Record<string, CatalogEntry>;
