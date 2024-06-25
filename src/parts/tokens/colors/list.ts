import { palette } from '@/src/palette';
import { promiseMap } from '@/src/shared/promiseMap';

async function listActive() {
  return promiseMap([
    ['list.activeSelectionBackground', palette('darkBackground')],
    ['list.activeSelectionForeground', palette('neutral')],
    ['list.inactiveSelectionBackground', palette('darkBackground')],
    ['list.inactiveSelectionForeground', palette('neutral')],
    ['list.hoverBackground', palette('darkSecondary')],
    ['list.hoverForeground', palette('neutral')],
    ['list.focusBackground', palette('darkSecondary')],
    ['list.focusForeground', palette('neutral')],
  ]);
}
async function listDrop() {
  return promiseMap([
    ['list.deemphasizedForeground', palette('gray')],
    ['list.dropBackground', palette('white17')],
    ['list.errorForeground', palette('error')],
    ['list.filterMatchBackground', palette('transparentPrimary')],
    ['list.filterMatchBorder', palette('transparentSecondary')],
    ['list.highlightForeground', palette('lightSecondary')],
    ['list.inactiveFocusBackground', palette('darkSecondary')],
    ['list.invalidItemForeground', palette('textPrimary')],
    ['list.warningForeground', palette('lightSecondary')],
  ]);
}
async function listFilterWidget() {
  return promiseMap([
    ['listFilterWidget.background', palette('brown')],
    ['listFilterWidget.noMatchesOutline', palette('error')],
    ['listFilterWidget.outline', palette('empty')],
  ]);
}

export async function list() {
  const modules = await Promise.all([
    listActive(),
    listDrop(),
    listFilterWidget(),
  ]);

  const _map = new Map();
  for (const module of modules) {
    for (const [key, value] of module.entries()) {
      _map.set(key, value);
    }
  }

  return _map;
}