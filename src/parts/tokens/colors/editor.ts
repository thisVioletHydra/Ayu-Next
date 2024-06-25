import { palette } from '@/src/palette';
import { promiseMap } from '@/src/shared/promiseMap';

async function editorFindMatch() {
  return promiseMap([
    ['editor.findMatchBackground', palette('empty')],
    ['editor.findMatchBorder', palette('lightPrimary')],
    ['editor.findMatchHighlightBackground', palette('empty')],
    ['editor.findMatchHighlightBorder', palette('transparentSecondary')],
    ['editor.findRangeHighlightBackground', palette('empty')],
    ['editor.findRangeHighlightBorder', palette('lightPrimary')],
  ]);
}
async function editorGeneral() {
  return promiseMap([
    ['editor.background', palette('darkPrimary')],
    ['editor.selectionBackground', palette('mediumGray')],
    ['editor.foreground', palette('neutral')],
    ['editor.inactiveSelectionBackground', palette('mediumGray')],
    ['editor.lineHighlightBackground', palette('darkSecondary')],
    ['editor.rangeHighlightBackground', palette('empty')],
    ['editor.foldBackground', palette('transparentPrimary')],
    ['editor.hoverHighlightBackground', palette('transparentSecondary')],
    ['editor.focusedStackFrameHighlightBackground', '#ff00ff'],
    ['editor.selectionHighlightBackground', palette('empty')],
    ['editor.selectionHighlightBorder', palette('lightPrimary')],
    ['editor.wordHighlightBackground', palette('lightPrimary')],
    ['editor.wordHighlightStrongBackground', palette('lightPrimary')],
    ['editorBracketMatch.background', palette('disabled')],
    ['editorBracketMatch.border', palette('disabledLight')],
    ['editorCodeLens.foreground', palette('neutral')],
    ['editorCursor.foreground', palette('lightSecondary')],
    ['editorError.foreground', palette('error')],
  ]);
}
async function editorGroup() {
  return promiseMap([
    ['editorGroup.emptyBackground', palette('backgroundPrimary')],
    ['editorGroup.border', palette('darkSecondary')],
    ['editorGroup.dropBackground', palette('white17')],
    ['editorGroup.focusedEmptyBorder', palette('darkSecondary')],
  ]);
}
async function editorGroupHeader() {
  return promiseMap([
    ['editorGroupHeader.border', palette('darkSecondary')],
    ['editorGroupHeader.noTabsBackground', palette('darkPrimary')],
    ['editorGroupHeader.tabsBackground', palette('darkPrimary')],
    ['editorGroupHeader.tabsBorder', palette('darkSecondary')],
  ]);
}
async function editorGutter() {
  return promiseMap([
    ['editorGutter.addedBackground', palette('green')],
    ['editorGutter.deletedBackground', palette('pink')],
    ['editorGutter.modifiedBackground', palette('blue')],
  ]);
}
async function editorHoverWidget() {
  return promiseMap([
    ['editorHoverWidget.background', palette('darkBackgroundTertiary')],
    ['editorHoverWidget.border', palette('darkSecondary')],
    ['editorHoverWidget.foreground', palette('white71')],
    ['editorHoverWidget.statusBarBackground', palette('backgroundPrimary')],
  ]);
}
async function editorIndentGuide() {
  return promiseMap([
    ['editorIndentGuide.activeBackground', palette('darkBackground')],
    ['editorIndentGuide.background', palette('disabled')],
    ['editorLineNumber.activeForeground', palette('transparentTextSecondary')],
    ['editorLineNumber.foreground', palette('transparentTextPrimary')],
    ['editorLink.activeForeground', palette('lightSecondary')],
    ['editorMarkerNavigation.background', palette('backgroundPrimary')],
  ]);
}
async function editorOverviewRuler() {
  return promiseMap([
    ['editorOverviewRuler.findMatchForeground', palette('transparentSecondary')],
    ['editorOverviewRuler.selectionHighlightForeground', palette('transparentSecondary')],
    ['editorOverviewRuler.border', palette('empty')],
    ['editorOverviewRuler.background', palette('darkPrimary')],
    ['editorOverviewRuler.currentContentForeground', palette('disabled')],
    ['editorOverviewRuler.addedForeground', palette('green')],
    ['editorOverviewRuler.deletedForeground', palette('pink')],
    ['editorOverviewRuler.modifiedForeground', palette('blue')],
    ['editorOverviewRuler.errorForeground', palette('error')],
    ['editorOverviewRuler.warningForeground', palette('lightSecondary')],
  ]);
}
async function editorSuggestWidget() {
  return promiseMap([
    ['editorSuggestWidget.background', palette('darkSecondary')],
    ['editorSuggestWidget.border', palette('darkSecondary')],
    ['editorSuggestWidget.foreground', palette('neutral')],
    ['editorSuggestWidget.highlightForeground', palette('lightSecondary')],
    ['editorSuggestWidget.selectedBackground', palette('transparentSecondary')],
  ]);
}
async function editorOther() {
  return promiseMap([
    ['editorWarning.foreground', palette('lightSecondary')],
    ['editorMarkerNavigationWarning.background', palette('lightSecondary')],
    ['editorWhitespace.foreground', palette('gray25')],
    ['editorWidget.background', palette('backgroundPrimary')],
    ['editorRuler.foreground', palette('disabled')],
  ]);
}

export async function editor() {
  const modules = await Promise.all([
    editorFindMatch(),
    editorGeneral(),
    editorGroup(),
    editorGroupHeader(),
    editorGutter(),
    editorHoverWidget(),
    editorIndentGuide(),
    editorOverviewRuler(),
    editorSuggestWidget(),
    editorOther(),
  ]);

  const _map = new Map();
  for (const module of modules) {
    for (const [key, value] of module.entries()) {
      _map.set(key, value);
    }
  }

  return Promise.resolve(_map);
}