import type { HexColor } from '#types/workbench-colors';

export type CatalogEntry = { hex: HexColor; desc: string };

export const termCatalog = {
  'term.0': {
    hex: '#191E2A',
    desc: 'ANSI slot 0 (protocol “black”) — currently dark raised bg',
  },
  'term.1': {
    hex: '#ed8274',
    desc: 'ANSI slot 1 (protocol “red”) — current coral',
  },
  'term.2': {
    hex: '#A6CC70',
    desc: 'ANSI slot 2 (protocol “green”) — shares state.added',
  },
  'term.3': {
    hex: '#fad07b',
    desc: 'ANSI slot 3 (protocol “yellow”)',
  },
  'term.4': {
    hex: '#6dcbfa',
    desc: 'ANSI slot 4 (protocol “blue”)',
  },
  'term.5': {
    hex: '#cfbafa',
    desc: 'ANSI slot 5 (protocol “magenta”)',
  },
  'term.6': {
    hex: '#90e1c6',
    desc: 'ANSI slot 6 (protocol “cyan”)',
  },
  'term.7': {
    hex: '#c7c7c7',
    desc: 'ANSI slot 7 (protocol “white”)',
  },
  'term.8': {
    hex: '#686868',
    desc: 'ANSI slot 8 — bright black',
  },
  'term.9': {
    hex: '#f28779',
    desc: 'ANSI slot 9 — bright red',
  },
  'term.10': {
    hex: '#bae67e',
    desc: 'ANSI slot 10 — bright green',
  },
  'term.11': {
    hex: '#ffd580',
    desc: 'ANSI slot 11 — bright yellow (same hex as accent.auxHover)',
  },
  'term.12': {
    hex: '#73d0ff',
    desc: 'ANSI slot 12 — bright blue',
  },
  'term.13': {
    hex: '#D4BFFFAE',
    desc: 'ANSI slot 13 — bright magenta',
  },
  'term.14': {
    hex: '#95e6cb',
    desc: 'ANSI slot 14 — bright cyan',
  },
  'term.15': {
    hex: '#FFFFFF',
    desc: 'ANSI slot 15 — bright white (same as fg.onDark)',
  },
} as const satisfies Record<string, CatalogEntry>;
