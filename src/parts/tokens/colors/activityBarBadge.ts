/**
 *
 * @returns activityBarBadge - лепешка с цифрами
 */
export async function activityBarBadge() {
  const _map = new Map();

  _map.set('activityBarBadge.background', '#FFCC66');
  _map.set('activityBarBadge.foreground', '#1F2430');

  return Promise.resolve(_map);
}