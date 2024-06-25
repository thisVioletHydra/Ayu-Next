import { palette } from '@/src/palette';
import { promiseMap } from '@/src/shared/promiseMap';

async function active() {
  return promiseMap([
    ['tab.activeBackground', palette('darkBackground')],
    ['tab.activeBorder', palette('darkBackground')],
    ['tab.activeBorderTop', palette('lightSecondary')],
    ['tab.activeForeground', palette('neutral')],
    ['tab.activeModifiedBorder', palette('lightPrimary')],
    ['tab.border', palette('darkBackground')],
    ['tab.hoverBackground', palette('darkSecondary')],
    ['tab.hoverBorder', palette('empty')],
    ['tab.hoverForeground', palette('neutral')],
    ['tab.inactiveBackground', palette('darkPrimary')],
    ['tab.inactiveForeground', palette('textPrimary')],
    ['tab.inactiveModifiedBorder', palette('brown')],
  ]);
}
async function unfocus() {
  return promiseMap([
    ['tab.unfocusedActiveBackground', palette('darkBackground')],
    ['tab.unfocusedActiveBorder', palette('empty')],
    ['tab.unfocusedActiveBorderTop', palette('lightSecondary')],
    ['tab.unfocusedActiveForeground', palette('textPrimary')],
    ['tab.unfocusedActiveModifiedBorder', palette('brown')],
    ['tab.unfocusedHoverBackground', palette('darkSecondary')],
    ['tab.unfocusedHoverBorder', palette('darkBackground')],
    ['tab.unfocusedHoverForeground', palette('neutral')],
    ['tab.unfocusedInactiveBackground', palette('darkPrimary')],
    ['tab.unfocusedInactiveForeground', palette('textPrimary')],
    ['tab.unfocusedInactiveModifiedBorder', palette('brown')],
  ]);
}

export async function tab() {
  const modules = await Promise.all([
    active(),
    unfocus(),
  ]);

  const _map = new Map();
  for (const module of modules) {
    for (const [key, value] of module.entries()) {
      _map.set(key, value);
    }
  }

  return _map;
}