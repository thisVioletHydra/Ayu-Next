import { palette } from '@/src/palette';
import { promiseMap } from '@/src/shared/promiseMap';

/**
 *
 * @returns badge - лепешка с цифрами
 */
export async function badge() {
  return promiseMap([
    ['badge.background', palette('darkPrimary')],
    ['badge.foreground', palette('textPrimary')],
  ]);
}