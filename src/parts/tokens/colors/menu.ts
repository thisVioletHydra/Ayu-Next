import { palette } from '@/src/palette';
import { promiseMap } from '@/src/shared/promiseMap';

async function menuSelect() {
  return promiseMap([
    ['menu.background', palette('darkPrimary')],
    ['menu.foreground', palette('neutral')],
    ['menu.border', palette('empty')],
    ['menu.selectionBorder', palette('transparentSecondary')],
    ['menu.selectionBackground', palette('darkBackground')],
    ['menu.selectionForeground', palette('white')],
    ['menu.separatorBackground', palette('darkGray')],

  ]);
}
async function menubar() {
  return promiseMap([
    ['menubar.selectionBorder', palette('empty')],
    ['menubar.selectionBackground', palette('darkBackground')],
    ['menubar.selectionForeground', palette('white')],
  ]);
}

export async function menu() {
  const modules = await Promise.all([
    menuSelect(),
    menubar(),
  ]);

  const _map = new Map();
  for (const module of modules) {
    for (const [key, value] of module.entries()) {
      _map.set(key, value);
    }
  }

  return _map;
}