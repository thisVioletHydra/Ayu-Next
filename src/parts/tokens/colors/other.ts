import { palette } from '@/src/palette';
import { promiseMap } from '@/src/shared/promiseMap';

async function problems() {
  return promiseMap([
    ['problemsErrorIcon.foreground', palette('error')],
    ['problemsInfoIcon.foreground', palette('lightBlue')],
    ['problemsWarningIcon.foreground', palette('lightSecondary')],
  ]);
}
async function title() {
  return promiseMap([
    ['titleBar.activeBackground', palette('darkPrimary')],
    ['titleBar.activeForeground', palette('neutral')],
    ['titleBar.border', palette('darkSecondary')],
    ['titleBar.inactiveBackground', palette('darkPrimary')],
    ['titleBar.inactiveForeground', palette('textPrimary')],
  ]);
}
async function text() {
  return promiseMap([
    ['textBlockQuote.background', palette('backgroundPrimary')],
    ['textLink.activeForeground', palette('lightSecondary')],
    ['textLink.foreground', palette('transparentSecondary')],
    ['textPreformat.foreground', palette('neutral')],
  ]);
}
async function extra() {
  return promiseMap([
    ['badge.background', palette('darkPrimary')],
    ['badge.foreground', palette('textPrimary')],
    ['contrastActiveBorder', palette('empty')],
    ['contrastBorder', palette('empty')],
    ['focusBorder', palette('empty')],
    ['foreground', palette('textPrimary')],
    ['icon.foreground', palette('neutral')],
    ['pickerGroup.border', palette('darkSecondary')],
    ['pickerGroup.foreground', palette('mediumGray')],
    ['progressBar.background', palette('lightSecondary')],
    ['sash.hoverBorder', palette('mediumGray')],
    ['selection.background', palette('transparentDark')],
    ['settings.headerForeground', palette('neutral')],
    ['settings.modifiedItemIndicator', palette('lightBlue')],
    ['toolbar.hoverOutline', palette('empty')],
    ['walkThrough.embeddedEditorBackground', palette('backgroundPrimary')],
    ['widget.shadow', palette('ultraDark')],
  ]);
}

export async function other() {
  const modules = await Promise.all([
    extra(),
    text(),
    title(),
    problems(),
  ]);

  const _map = new Map();
  for (const module of modules) {
    for (const [key, value] of module.entries()) {
      _map.set(key, value);
    }
  }

  return _map;
}