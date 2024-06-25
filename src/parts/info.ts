import type { MapListValue, MapValue } from '../types';

export async function info() {
  const _map = new Map<string, MapListValue>([
    ['name', 'ayu-next'],
    ['$schema', 'vscode://schemas/color-theme'],
    ['type', 'dark'],
    ['workbench.sash.size', 2],
    ['semanticHighlighting', true],

    ['colors', {}],
    ['semanticTokenColors', {}],
    ['tokenColors', []],
  ]);

  return Promise.resolve(_map);
}