/**
 * @returns debugExceptionWidget - debug exception widget
 */
async function debugExceptionWidget() {
  const _map = new Map();

  _map.set('debugExceptionWidget.background', '#232834');
  _map.set('debugExceptionWidget.border', '#191e2a');

  return Promise.resolve(_map);
}

/**
 * @returns debugToolBar - debug toolbar
 */
async function debugToolBar() {
  const _map = new Map();

  _map.set('debugToolBar.background', '#232834');

  return Promise.resolve(_map);
}

/**
 * @returns debugView - debug view
 */
async function debugView() {
  const _map = new Map();

  _map.set('debugView.exceptionLabelForeground', '#1F2430');
  _map.set('debugView.exceptionLabelBackground', '#eeb85a');

  return Promise.resolve(_map);
}

export async function debug() {
  const _map = new Map();
  const modules = await Promise.all([debugExceptionWidget(), debugToolBar(), debugView()]);

  for (const f of modules) {
    for (const [key, value] of f.entries()) {
      _map.set(key, value);
    }
  }

  return Promise.resolve(_map);
}