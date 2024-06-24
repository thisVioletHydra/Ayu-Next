import { writeFile } from 'node:fs/promises';

import { fsStatFile } from './index';

type FsWriteFile = { data: string; filePath: string };
type FsWriteFileClear = { filePath: string };

/**
 * This function will write a file to a specified location.
 * @param {FsWriteFile}  - file - the file to write to the file system
 * @returns A promise that resolves to undefined.
 */
export async function fsWriteFile({ data, filePath }: FsWriteFile) {
  try {
    if (await fsStatFile(filePath)) {
      await writeFile(filePath, data, 'utf8');
    }

    // _bool ?  : undefined;
  } catch (error) {
    console.log(`[fsWriteFile] error`, `<${typeof error}>`, error);

    // return String(error);
  }
}

/**
 * It checks if a file exists, if it does, it clears the file
 * @param {FsWriteFile}  - filePath: string
 * @returns The return value is a Promise that resolves to the value that was passed to the resolve
 * function (which is passed as the first argument to the promise executor - the function you pass to
 * the Promise constructor).
 */
export async function fsWriteFileClear({ filePath }: FsWriteFileClear) {
  try {
    if (await fsStatFile(filePath)) {
      await writeFile(filePath, '', 'utf8');
    }
  } catch (error) {
    console.log(`[fsWriteFile] error`, `<${typeof error}>`, error);

    // return String(error);
  }
}