import type { MapListValue } from '@/src/types';

import { palette } from '@/src/palette';
import { convertTC, unwrapTC } from '@/src/shared/convertTC';

export async function variables() {
  return unwrapTC(
    convertTC({
      name: 'const1',
      foreground: '#FF9944',
      background: '#1F2430',
      fontStyle: '',

      scope: `storage.type.ts
  meta.var.expr.ts
  source.ts`,
    }),
    convertTC({
      name: 'const2',
      foreground: '#FF9944',
      background: '#1F2430',
      fontStyle: '',

      scope: `storage.type.ts
  meta.var.expr.ts
  source.ts`,
    }),
  );
}