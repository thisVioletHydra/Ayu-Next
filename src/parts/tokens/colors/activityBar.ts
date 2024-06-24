/**
 *
 * @returns activityBar - самая левая боковая панелька
 */
export async function activityBar() {
  const _map = new Map();

  _map.set('activityBar.background', '#1F2430');
  _map.set('activityBar.activeBackground', '#191E2A');
  _map.set('activityBar.border', '#191E2A');
  _map.set('activityBar.dropBorder', '#FF9944');
  _map.set('activityBar.activeFocusBorder', '#FFCC66');
  _map.set('activityBar.foreground', '#CBCCC6');
  _map.set('activityBar.inactiveForeground', '#707A8C');
  _map.set('activityBar.activeBorder', '#FFCC66');

  return Promise.resolve(_map);
}