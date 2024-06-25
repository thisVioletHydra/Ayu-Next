import { join } from 'node:path';

import { fsCreateFile, fsStatFile, fsWriteFile } from './fs';
import { info } from './parts/info';
import { colors } from './parts/tokens/colors';
import { semanticTokenColors } from './parts/tokens/semanticTokenColors';
import { tokenColors } from './parts/tokens/tokenColors';
import { toObject } from './shared/toObject';

import { useRootDir } from '@/src/shared/toPath';

export async function findMyFile() {
  const storage = await info();
  storage.set('colors', Object.fromEntries(await colors()));
  storage.set('semanticTokenColors', Object.fromEntries(await semanticTokenColors()));
  storage.set('tokenColors', await tokenColors());

  const convertFormMapToJson = toObject(storage);

  const _path = join(useRootDir(), 'themes', 'ayu-next-color-theme.json');
  console.log(`[LOG] _path`, `<${typeof _path}>`, _path);

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