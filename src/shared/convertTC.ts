function getProperties(props: Record<string, string>) {
  const _map = new Map<string, string>();

  Array.from(Object.entries(props), ([_KEY, _VAL]) => {
    return (_VAL ? _map.set(_KEY, _VAL) : undefined);
  });

  return _map;
}

function transformSettings(props: Record<string, string>) {
  return Object.fromEntries(getProperties(props));
}

const transformScope = (scope: string) => scope.split(/\s+/).toReversed().join(' ');

export function promiseTC({
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
  settings?: Record<string, string>
}) {
  return {
    name,
    scope: transformScope(scope),
    settings: transformSettings({
      foreground,
      background,
      fontStyle,
    }),

  };
}

export async function unwrapTC(...rest: [
  Map<string, unknown>, Map<string, unknown>, Map<string, unknown>,
][]) {
  const modules = await Promise.all([...rest]);

  const _map = new Map();
  for (const module of modules) {
    for (const [key, value] of module.entries()) {
      _map.set(key, value);
    }
  }

  return _map;
}

export function token(
    ...rest: {
      name: string
      scope: string
      foreground: string
      background?: string
      fontStyle?: string
      settings?: Record<string, string>
    }[]
) {
  return rest.map((f) => promiseTC(f));
}