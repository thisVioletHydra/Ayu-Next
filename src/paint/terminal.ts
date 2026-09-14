import type { WorkbenchColors } from '#types/workbench-colors';

import { token } from '#tokens';

/**
 * Integrated terminal.
 * ANSI workbench keys are protocol slots; our tokens are term.0–term.15 (index ≠ hue).
 */
export const terminal = {
  'terminal.background': token('bg.base'),
  'terminal.foreground': token('fg.primary'),
  'terminal.selectionBackground': token('bg.widget'),
  'terminalCursor.background': token('bg.widget'),

  // slots 0–7 (normal)
  'terminal.ansiBlack': token('term.0'),
  'terminal.ansiRed': token('term.1'),
  'terminal.ansiGreen': token('term.2'),
  'terminal.ansiYellow': token('term.3'),
  'terminal.ansiBlue': token('term.4'),
  'terminal.ansiMagenta': token('term.5'),
  'terminal.ansiCyan': token('term.6'),
  'terminal.ansiWhite': token('term.7'),

  // slots 8–15 (bright)
  'terminal.ansiBrightBlack': token('term.8'),
  'terminal.ansiBrightRed': token('term.9'),
  'terminal.ansiBrightGreen': token('term.10'),
  'terminal.ansiBrightYellow': token('term.11'),
  'terminal.ansiBrightBlue': token('term.12'),
  'terminal.ansiBrightMagenta': token('term.13'),
  'terminal.ansiBrightCyan': token('term.14'),
  'terminal.ansiBrightWhite': token('term.15'),
} as const satisfies WorkbenchColors;
