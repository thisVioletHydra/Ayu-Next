import { palette } from '@/src/palette';
import { promiseMap } from '@/src/shared/promiseMap';

export async function peekView() {
  return promiseMap([
    ['peekView.border', palette('darkSecondary')],
    ['peekViewEditor.background', palette('backgroundPrimary')],
    ['peekViewEditor.matchHighlightBackground', palette('transparentSecondary')],
    ['peekViewResult.background', palette('backgroundPrimary')],
    ['peekViewResult.fileForeground', palette('textPrimary')],
    ['peekViewResult.matchHighlightBackground', palette('transparentSecondary')],
    ['peekViewTitle.background', palette('backgroundPrimary')],
    ['peekViewTitleDescription.foreground', palette('textPrimary')],
    ['peekViewTitleLabel.foreground', palette('textPrimary')],
  ]);
}