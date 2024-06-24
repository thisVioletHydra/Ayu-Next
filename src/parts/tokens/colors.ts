import { readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';

import { root } from '@/src/root';

export async function colors() {
  const _map = new Map();
  const path = join(root().get('~~'), 'src', 'parts', 'tokens', 'colors');
  const getFiles = await readdir(path);

  const modules = await Promise.all(getFiles.map(async (f) => {
    const module = await import(`${path}/${f}`);
    const result = await module[f.replace('.ts', '')]();

    return result;
  }));

  for (const f of modules) {
    for (const [key, value] of f.entries()) {
      _map.set(key, value);
    }
  }

  return Promise.resolve(_map);
}