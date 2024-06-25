import { palette } from '@/src/palette';
import { promiseMap } from '@/src/shared/promiseMap';

/**
 *
 * @returns activityBar - самая левая боковая панелька
 */
export async function activityBar() {
  return promiseMap([
    ['activityBar.background', palette('darkPrimary')],
    ['activityBar.activeBackground', palette('darkSecondary')],
    ['activityBar.border', palette('darkSecondary')],
    ['activityBar.dropBorder', palette('lightPrimary')],
    ['activityBar.activeFocusBorder', palette('lightSecondary')],
    ['activityBar.foreground', palette('neutral')],
    ['activityBar.inactiveForeground', palette('textPrimary')],
    ['activityBar.activeBorder', palette('lightSecondary')],
  ]);
}