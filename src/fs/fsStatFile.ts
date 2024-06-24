import { stat } from 'node:fs/promises';

import { toPath } from './index';

/**
 * It returns a boolean value indicating whether or not a file exists
 * @param {string} file - string - The file to check if it exists.
 * @returns A boolean value.
 */
export async function fsStatFile(filePath: string) {
  try {
    return Boolean(await stat(toPath(filePath)));
  } catch {
    return false;
  }
}
