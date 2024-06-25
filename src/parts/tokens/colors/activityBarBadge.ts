import { palette } from '@/src/palette';
import { promiseMap } from '@/src/shared/promiseMap';

/**
 *
 * @returns activityBarBadge - лепешка с цифрами
 */
export async function activityBarBadge() {
  return promiseMap([
    ['activityBarBadge.background', palette('lightSecondary')],
    ['activityBarBadge.foreground', palette('darkPrimary')],
  ]);
}