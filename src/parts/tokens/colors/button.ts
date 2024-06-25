import { palette } from '@/src/palette';
import { promiseMap } from '@/src/shared/promiseMap';

export async function button() {
  return promiseMap([
    ['button.background', palette('accentPrimary')],
    ['button.foreground', palette('darkPrimary')],
    ['button.hoverBackground', palette('accentSecondary')],
  ]);
}