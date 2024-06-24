/**
 *
 * @returns button - кнопка
 */
export async function button() {
  const _map = new Map();

  _map.set('button.background', '#eeb85a');
  _map.set('button.foreground', '#1F2430');
  _map.set('button.hoverBackground', '#ffd580');

  return Promise.resolve(_map);
}