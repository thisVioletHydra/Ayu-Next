import { palette } from '@/src/palette';
import { promiseMap } from '@/src/shared/promiseMap';

export async function other() {
  return promiseMap([
    ['focusBorder', palette('empty')],
    ['foreground', palette('textPrimary')],
  ]);
}