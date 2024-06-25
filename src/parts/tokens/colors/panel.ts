import { palette } from '@/src/palette';
import { promiseMap } from '@/src/shared/promiseMap';

export async function panel() {
  return promiseMap([
    ['panel.background', palette('darkPrimary')],
    ['panel.border', palette('darkSecondary')],
    ['panelSection.border', palette('darkSecondary')],
    ['panelSection.dropBackground', palette('white17')],
    ['panelSectionHeader.background', palette('darkPrimary')],
    ['panelSectionHeader.foreground', palette('textPrimary')],
    ['panelTitle.activeBorder', palette('lightSecondary')],
    ['panelTitle.activeForeground', palette('neutral')],
    ['panelTitle.inactiveForeground', palette('textPrimary')],
  ]);
}