import { promiseMap } from '@/src/shared/promiseMap';

export async function convertTC({
  name,
  scope,
  foreground,
  background = '',
  fontStyle = '',
}: {
  name: string
  scope: string
  foreground: string
  background?: string
  fontStyle?: string
}) {
  return promiseMap([
    ['name', name],
    ['scope', 'source.ts meta.var.expr.ts storage.type.ts  '],
    [
      'settings', {
        foreground,
        background,
        fontStyle,
      },
    ],

  ]);
}

export async function unwrapTC(...rest: [Map<string, unknown>, Map<string, unknown>, Map<string, unknown>][]) {
  const modules = await Promise.all([...rest]);

  const _map = new Map();
  for (const module of modules) {
    for (const [key, value] of module.entries()) {
      _map.set(key, value);
    }
  }

  return _map;
}

export async function token(parameters: type) {

}