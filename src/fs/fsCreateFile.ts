import { appendFile, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';

import { fsStatFile } from './index';

type FsAppendFile = { data: string; filePath: string };

export async function fsCreateFolder(dirPath: string) {
  try {
    await mkdir(dirPath, { recursive: true });
  } catch (error) {
    console.log(`[createFolder] error`, `<${typeof error}>`, error);
  }
}

export async function fsCreateFile({ data, filePath }: FsAppendFile) {
  try {
    const _bool = await fsStatFile(filePath);
    if (!_bool) await appendFile(filePath, data, 'utf8');

    return undefined;
  } catch (error) {
    console.log(`[fsCreateFile] error`, `<${typeof error}>`, error);
    await fsCreateFolder(dirname(filePath));
    await fsCreateFile({
      data,
      filePath,
    });

    return error;
  }
}