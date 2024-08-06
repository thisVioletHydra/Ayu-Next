import type { MapListValue } from '@/src/types';

import { palette } from '@/src/palette';
import { token } from '@/src/shared/convertTC';
import { promiseMap } from '@/src/shared/promiseMap';

export function functions() {
  return token({
    name: 'export',
    foreground: palette('pink'),
    fontStyle: '',
    scope: 'source.1ts meta.function.1ts keyword.control.export.1ts',
  });
}