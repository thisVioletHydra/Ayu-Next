import type { MapModule, MapValue } from '@/src/types';

import { readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';

import { useRootDir } from '@/src/shared/toPath';

export async function tokenColors() {
  const path: string = join(useRootDir(), 'src', 'parts', 'tokens', 'tokenColors');
  const getFiles: string[] = await readdir(path);
  console.log(`[LOG] getFiles`, `<${typeof getFiles}>`, getFiles);

  const modules: MapModule[] = await Promise.all(getFiles.map(async (f) => {
    const module: Record<string, () => MapModule> = await import(`${path}/${f}`);

    return module[f.replace('.ts', '')]();
  }));

  const result = modules.map((map) => Object.fromEntries(map));

  return Promise.resolve(result);
}