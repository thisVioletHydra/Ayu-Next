import { normalize, parse, relative } from 'node:path';
import { cwd } from 'node:process';

export function root() {
  const _map = new Map();

  _map.set('~~', normalize(cwd()));

  return _map;
}