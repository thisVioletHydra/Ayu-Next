import { palette } from '@/src/palette';
import { promiseMap } from '@/src/shared/promiseMap';

export async function extensionButton() {
  return promiseMap([
    ['extensionButton.prominentBackground', palette('lightSecondary')],
    ['extensionButton.prominentForeground', palette('darkPrimary')],
    ['extensionButton.prominentHoverBackground', palette('cream')],
  ]);
}