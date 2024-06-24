import { join } from 'node:path';

import { fsCreateFile, fsStatFile, fsWriteFile } from './fs';
import { info } from './parts/info';
import { colors } from './parts/tokens/colors';
import { semanticTokenColors } from './parts/tokens/semanticTokenColors';
import { tokenColors } from './parts/tokens/tokenColors';
import { root } from './root';
import { toObject } from './shared/toObject';

export async function findMyFile() {
  const storage = await info();
  storage.set('colors', Object.fromEntries(await colors()));
  storage.set('semanticTokenColors', Object.fromEntries(await semanticTokenColors()));
  storage.set('tokenColors', await tokenColors());

  const convertFormMapToJson = toObject(storage);

  const _path = join(root().get('~~'), 'dist', 'ayu-next-color-theme.json');

  if (!(await fsStatFile(_path))) {
    await fsCreateFile({
      data: convertFormMapToJson,
      filePath: _path,
    });
  }

  await fsWriteFile({
    data: convertFormMapToJson,
    filePath: _path,
  });
}