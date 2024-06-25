import { palette } from '@/src/palette';
import { promiseMap } from '@/src/shared/promiseMap';

export async function commandCenter() {
  return promiseMap([
    ['commandCenter.activeBackground', palette('darkBackgroundSecondary')],
    ['commandCenter.activeBorder', palette('empty')],
    ['commandCenter.activeForeground', palette('neutral')],
    ['commandCenter.background', palette('darkPrimary')],
    ['commandCenter.border', palette('empty')],
    ['commandCenter.foreground', palette('neutral')],
    ['commandCenter.inactiveBorder', palette('empty')],
    ['commandCenter.inactiveForeground', palette('neutral')],
  ]);
}