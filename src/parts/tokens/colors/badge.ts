/**
 *
 * @returns badge - лепешка с цифрами
 */
export async function badge() {
  const _map = new Map();

  _map.set('badge.background', '#1F2430');
  _map.set('badge.foreground', '#707A8C');

  return Promise.resolve(_map);
}