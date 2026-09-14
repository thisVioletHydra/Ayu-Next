import type { HexColor } from '#types/workbench-colors';

export type CatalogEntry = { hex: HexColor; desc: string };

export const stateCatalog = {
  'state.error': {
    hex: '#E74C3C',
    desc: 'Errors, conflicts, problem icons',
  },
  'state.info': {
    hex: '#5ccfe6',
    desc: 'Info validation border',
  },
  'state.infoIcon': {
    hex: '#75beff',
    desc: 'Problems info icon',
  },
  'state.added': {
    hex: '#A6CC70',
    desc: 'Added / untracked / gutter add',
  },
  'state.addedBright': {
    hex: '#FEF2C0',
    desc: 'Brighter added (git added resource)',
  },
  'state.addedGhost': {
    hex: '#bae67e26',
    desc: 'Diff inserted wash',
  },
  'state.deleted': {
    hex: '#F27983',
    desc: 'Deleted / gutter delete / status error chip',
  },
  'state.deletedGhost': {
    hex: '#f29e7426',
    desc: 'Diff removed wash',
  },
  'state.modified': {
    hex: '#77A8D9',
    desc: 'Modified / gutter modify',
  },
  'state.debug': {
    hex: '#89D185',
    desc: 'Status bar while debugging',
  },
} as const satisfies Record<string, CatalogEntry>;
