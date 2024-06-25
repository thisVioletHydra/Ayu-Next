import { palette } from '@/src/palette';
import { promiseMap } from '@/src/shared/promiseMap';

export async function diff() {
  return promiseMap([
    ['diffEditor.insertedTextBackground', palette('success')],
    ['diffEditor.removedTextBackground', palette('warning')],
  ]);
}