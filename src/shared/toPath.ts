import crypto from 'node:crypto';
import { extname, join, resolve } from 'node:path';
import { cwd } from 'node:process';
import { normalizePath } from 'vite';

/**
 * Setting the root directory to the current working directory.
 */
export const useRootDir = () => normalizePath(resolve(cwd()));

/**
 * It takes a list of strings, joins them together, and then normalizes the path
 * @param {string[]} rest - string[]
 * @returns A function that takes a variable number of arguments and returns a string.
 */
export function toPath(...rest: string[]) {
  return normalizePath(resolve(useRootDir(), ...rest));
}

/**
 * It takes a list of strings, joins them together, and returns the result in lowercase
 * @param {string[]} rest - string[]
 * @returns A function that takes a variable number of arguments and returns a string.
 */
export function toPathLower(...rest: string[]) {
  return normalizePath(resolve(useRootDir(), ...rest)).toLocaleLowerCase();
}

/**
 * It takes a list of strings, joins them together, normalizes the path, and converts it to lowercase
 * @param {string[]} rest - string[]
 * @returns A function that takes a variable number of arguments and returns a string.
 */
export function toPathJoin(...rest: string[]) {
  return normalizePath(join(useRootDir(), ...rest)).toLocaleLowerCase();
}

/**
 * It takes a path, removes the root directory and file extension, and returns the result.
 * @param {string[]} rest - string[] - This is the path to the file.
 * @returns The path to the file without the extension.
 */
export function toPathBase(...rest: string[]) {
  const normal = normalizePath(resolve(useRootDir(), ...rest));
  const _extname = extname(normal);
  const removeRoot = normal.replace(`${useRootDir()}/`, '');
  const resultPath = removeRoot.replace(_extname, '');

  return resultPath.toLocaleLowerCase();
}

/**
 * It takes a path, hashes it, and returns a hash with the path.
 * @param {string[]} rest - string[]
 * @returns A string that is a hash of the path and the path itself.
 */
export function toPathBaseHash(...rest: string[]) {
  const normal = normalizePath(resolve(useRootDir(), ...rest));
  const _extname = extname(normal);
  const removeRoot = normal.replace(`${useRootDir()}/`, '');
  const resultPath = removeRoot.replace(_extname, '');
  const hash = crypto.createHash('sha256').update(resultPath).digest('hex');
  const liteHash = hash.slice(0, 8);

  return `${liteHash}#${resultPath.toLocaleLowerCase()}`;
}