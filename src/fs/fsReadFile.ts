import { readFile } from 'node:fs/promises';

import { fsStatFile } from './index';

/**
 * It returns a promise that resolves to a string
 * @param {PathLike} path - The path to the file. If a URL is provided, it must use the file: protocol.
 * @returns A promise that resolves to a string.
 */
export async function fsReadFile(filePath: string) {
  try {
    const _bool = await fsStatFile(filePath);

    return _bool ? String(await readFile(filePath)) : undefined;
  } catch (error) {
    console.log(`[fsReadFile] error`, `<${typeof error}>`, error);

    return String(error);
  }
}