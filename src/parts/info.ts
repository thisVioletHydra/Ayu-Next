import type { MapFull } from '../types';

export async function info() {
  const _map: MapFull = new Map();

  _map.set('name', 'ayu-next');
  _map.set('$schema', 'vscode://schemas/color-theme');
  _map.set('type', 'dark');
  _map.set('workbench.sash.size', 2);
  _map.set('semanticHighlighting', true);

  _map.set('colors', {});
  _map.set('semanticTokenColors', {});
  _map.set('tokenColors', []);

  return Promise.resolve(_map);
}