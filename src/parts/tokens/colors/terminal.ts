import { palette } from '@/src/palette';
import { promiseMap } from '@/src/shared/promiseMap';

export async function terminal() {
  return promiseMap([
    ['terminal.ansiBlack', palette('darkSecondary')],
    ['terminal.ansiBlue', palette('lightSkyBlue')],
    ['terminal.ansiBrightBlack', palette('gray')],
    ['terminal.ansiBrightBlue', palette('skyBlue')],
    ['terminal.ansiBrightCyan', palette('lightGreen')],
    ['terminal.ansiBrightGreen', palette('lightTeal')],
    ['terminal.ansiBrightMagenta', palette('transparentPurpleSecondary')],
    ['terminal.ansiBrightRed', palette('lightSalmon')],
    ['terminal.ansiBrightWhite', palette('white')],
    ['terminal.ansiBrightYellow', palette('accentSecondary')],
    ['terminal.ansiCyan', palette('lightCyan')],
    ['terminal.ansiGreen', palette('green')],
    ['terminal.ansiMagenta', palette('purple')],
    ['terminal.ansiRed', palette('lightCoral')],
    ['terminal.ansiWhite', palette('lightGray')],
    ['terminal.ansiYellow', palette('lightOrange')],
    ['terminal.background', palette('darkPrimary')],
    ['terminal.foreground', palette('neutral')],
    ['terminal.selectionBackground', palette('backgroundPrimary')],
    ['terminalCursor.background', palette('backgroundPrimary')],
  ]);
}