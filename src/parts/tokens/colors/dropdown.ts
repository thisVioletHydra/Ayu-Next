import { palette } from '@/src/palette';
import { promiseMap } from '@/src/shared/promiseMap';

export async function dropdown() {
  return promiseMap([
    ['dropdown.background', palette('darkBackground')],
    ['dropdown.listBackground', palette('darkPrimary')],
    ['dropdown.border', palette('empty')],
    ['dropdown.foreground', palette('textPrimary')],
  ]);
}