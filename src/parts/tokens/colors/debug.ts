import { palette } from '@/src/palette';
import { promiseMap } from '@/src/shared/promiseMap';

/**
 * @returns debugExceptionWidget - debug exception widget
 */
async function debugExceptionWidget() {
  return promiseMap([
    ['debugExceptionWidget.background', palette('backgroundPrimary')],
    ['debugExceptionWidget.border', palette('darkSecondary')],
  ]);
}

/**
 * @returns debugToolBar - debug toolbar
 */
async function debugToolBar() {
  return promiseMap([ //
    ['debugToolBar.background', palette('backgroundPrimary')],
  ]);
}

/**
 * @returns debugView - debug view
 */
async function debugView() {
  return promiseMap([
    ['debugView.exceptionLabelForeground', palette('darkPrimary')],
    ['debugView.exceptionLabelBackground', palette('accentPrimary')],
  ]);
}

export async function debug() {
  const modules = await Promise.all([debugExceptionWidget(), debugToolBar(), debugView()]);

  const _map = new Map();
  for (const module of modules) {
    for (const [key, value] of module.entries()) {
      _map.set(key, value);
    }
  }

  return Promise.resolve(_map);
}