import type { MapModule, MapValue } from '@/src/types';

import { readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';

import { useRootDir } from '@/src/shared/toPath';

export async function tokenColors() {
  const _map: MapModule = new Map();
  const path: string = join(useRootDir(), 'src', 'parts', 'tokens', 'tokenColors');
  const getFiles: string[] = await readdir(path);

  const modules: MapModule[] = await Promise.all(getFiles.map(async (f) => {
    const module: Record<string, () => MapModule> = await import(`${path}/${f}`);

    return module[f.replace('.ts', '')]();
  }));

  const flattenedArray = modules.reduce((acc, f) => acc.concat(f), []);

  return Promise.resolve(flattenedArray);
}