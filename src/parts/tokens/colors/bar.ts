import { palette } from '@/src/palette';
import { promiseMap } from '@/src/shared/promiseMap';

async function statusBar() {
  return promiseMap([
    ['statusBar.background', palette('darkPrimary')],
    ['statusBar.border', palette('darkSecondary')],
    ['statusBar.debuggingBackground', palette('lightGreen')],
    ['statusBar.debuggingForeground', palette('darkPrimary')],
    ['statusBar.debuggingBorder', palette('empty')],
    ['statusBar.foreground', palette('textPrimary')],
    ['statusBar.noFolderBorder', palette('ultraDark')],
    ['statusBar.noFolderBackground', palette('backgroundPrimary')],
    ['statusBar.noFolderForeground', palette('textPrimary')],
  ]);
}
async function scrollbar() {
  return promiseMap([
    ['scrollbar.shadow', palette('darkSecondary')],
    ['scrollbarSlider.activeBackground', palette('textPrimary')],
    ['scrollbarSlider.background', palette('transparentTextPrimary')],
    ['scrollbarSlider.hoverBackground', palette('transparentTextSecondary')],
  ]);
}
async function sideBar() {
  return promiseMap([
    ['sideBar.background', palette('darkPrimary')],
    ['sideBar.foreground', palette('textPrimary')],
    ['sideBar.dropBackground', palette('white17')],
    ['sideBar.border', palette('darkSecondary')],
    ['sideBarSectionHeader.border', palette('transparentSecondary')],
    ['sideBarSectionHeader.background', palette('darkPrimary')],
    ['sideBarSectionHeader.foreground', palette('textPrimary')],
    ['sideBarTitle.foreground', palette('neutral')],
  ]);
}
async function activityBar() {
  return promiseMap([
    ['activityBar.background', palette('darkPrimary')],
    ['activityBar.activeBackground', palette('darkSecondary')],
    ['activityBar.border', palette('darkSecondary')],
    ['activityBar.dropBorder', palette('lightPrimary')],
    ['activityBar.activeFocusBorder', palette('lightSecondary')],
    ['activityBar.foreground', palette('neutral')],
    ['activityBar.inactiveForeground', palette('textPrimary')],
    ['activityBar.activeBorder', palette('lightSecondary')],
  ]);
}
async function activityBarBadge() {
  return promiseMap([
    ['activityBarBadge.background', palette('lightSecondary')],
    ['activityBarBadge.foreground', palette('darkPrimary')],
  ]);
}
async function statusBarItem() {
  return promiseMap([
    ['statusBarItem.prominentForeground', palette('darkBackgroundTertiary')],
    ['statusBarItem.remoteBackground', palette('darkBackgroundTertiary')],
    ['statusBarItem.remoteForeground', palette('neutral')],
    ['statusBarItem.errorBackground', palette('pink')],
    ['statusBarItem.errorForeground', palette('neutral')],
    ['statusBarItem.activeBackground', palette('darkBackground')],
    ['statusBarItem.hoverBackground', palette('darkSecondary')],
    ['statusBarItem.prominentBackground', palette('darkSecondary')],
    ['statusBarItem.prominentHoverBackground', palette('empty')],
  ]);
}

export async function bar() {
  const modules = await Promise.all([
    activityBarBadge(),
    activityBar(),
    sideBar(),
    scrollbar(),
    statusBar(),
    statusBarItem(),
  ]);

  const _map = new Map();
  for (const module of modules) {
    for (const [key, value] of module.entries()) {
      _map.set(key, value);
    }
  }

  return _map;
}