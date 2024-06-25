import { palette } from '@/src/palette';
import { promiseMap } from '@/src/shared/promiseMap';

export async function debug() {
  return promiseMap([
    ['debugView.exceptionLabelForeground', palette('darkPrimary')],
    ['debugView.exceptionLabelBackground', palette('accentPrimary')],
    ['debugToolBar.border', palette('empty')],
    ['debugToolBar.background', palette('backgroundPrimary')],
    ['debugExceptionWidget.background', palette('backgroundPrimary')],
    ['debugExceptionWidget.border', palette('darkSecondary')],
  ]);
}