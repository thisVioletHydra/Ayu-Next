import type { MapListValue } from '@/src/types';

import { palette } from '@/src/palette';
import { promiseMap } from '@/src/shared/promiseMap';

export async function functions() {
  return promiseMap([
    ['name', 'export'],
    ['scope', 'source.ts meta.function.ts keyword.control.export.ts'],
    [
      'settings', {
        foreground: palette('lightPrimary'),
        fontStyle: '',
      },
    ],

  ]);
}