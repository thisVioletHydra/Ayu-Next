import type { HexColor } from '#types/workbench-colors';

export type CatalogEntry = { hex: HexColor; desc: string };

export const bgCatalog = {
  'bg.base': {
    hex: '#1F2430',
    desc: 'Default canvas — editor, side bar, panel, status, title',
  },
  'bg.baseMuted': {
    hex: '#1F2430ae',
    desc: 'Same as base with alpha (badges / overlays on base)',
  },
  'bg.sunken': {
    hex: '#171C24',
    desc: 'Darker than base — active tab, pressed chrome, deep wells',
  },
  'bg.raised': {
    hex: '#191E2A',
    desc: 'Slightly lifted from base — hover rows, line highlight, recesses',
  },
  'bg.widget': {
    hex: '#232834',
    desc: 'Floating / nested panels — peek, widgets, empty editor group',
  },
  'bg.hoverSoft': {
    hex: '#20232F',
    desc: 'Soft hover / remote status chip background',
  },
  'bg.input': {
    hex: '#1a1d29',
    desc: 'Text fields and command-center active fill',
  },
  'bg.selection': {
    hex: '#3d516a',
    desc: 'Solid text selection',
  },
  'bg.selectionMuted': {
    hex: '#3D516ACC',
    desc: 'Selection / hover with transparency',
  },
  'bg.selectionDeep': {
    hex: '#2a3546fd',
    desc: 'Global selection.background (workbench)',
  },
  'bg.drop': {
    hex: '#FFFFFF17',
    desc: 'Drag-and-drop target wash',
  },
  'bg.overlay': {
    hex: '#00000030',
    desc: 'Dim overlay (e.g. status item prominent hover)',
  },
  'bg.shadow': {
    hex: '#141925',
    desc: 'Shadow / no-folder status border tone',
  },
  'bg.fold': {
    hex: '#24AEF317',
    desc: 'Folded code range tint',
  },
  'bg.filterWarn': {
    hex: '#653723',
    desc: 'List filter widget when matches are sparse / warn tone',
  },
} as const satisfies Record<string, CatalogEntry>;
