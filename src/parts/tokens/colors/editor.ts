import { palette } from '@/src/palette';
import { promiseMap } from '@/src/shared/promiseMap';

/**
 *
 * @returns Editor Find Match parameters
 */
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

/**
 *
 * @returns Editor General parameters
 */
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

/**
 *
 * @returns Editor Group parameters
 */
async function editorGroup() {
  return promiseMap([
    ['editorGroup.emptyBackground', palette('backgroundPrimary')],
    ['editorGroup.border', palette('darkSecondary')],
    ['editorGroup.dropBackground', palette('white17')],
    ['editorGroup.focusedEmptyBorder', palette('darkSecondary')],
  ]);
}

/**
 *
 * @returns Editor Group Header parameters
 */
async function editorGroupHeader() {
  return promiseMap([
    ['editorGroupHeader.border', palette('darkSecondary')],
    ['editorGroupHeader.noTabsBackground', palette('darkPrimary')],
    ['editorGroupHeader.tabsBackground', palette('darkPrimary')],
    ['editorGroupHeader.tabsBorder', palette('darkSecondary')],
  ]);
}

/**
 *
 * @returns Editor Gutter parameters
 */
async function editorGutter() {
  return promiseMap([
    ['editorGutter.addedBackground', palette('green')],
    ['editorGutter.deletedBackground', palette('pink')],
    ['editorGutter.modifiedBackground', palette('blue')],
  ]);
}

/**
 *
 * @returns Editor Hover Widget parameters
 */
async function editorHoverWidget() {
  return promiseMap([
    ['editorHoverWidget.background', palette('darkBackgroundTertiary')],
    ['editorHoverWidget.border', palette('darkSecondary')],
    ['editorHoverWidget.foreground', palette('white71')],
    ['editorHoverWidget.statusBarBackground', palette('backgroundPrimary')],
  ]);
}

/**
 *
 * @returns Editor Indent Guide parameters
 */
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

/**
 *
 * @returns Editor Overview Ruler parameters
 */
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

/**
 *
 * @returns Editor Ruler parameters
 */
async function editorRuler() {
  return promiseMap([['editorRuler.foreground', palette('disabled')]]);
}

/**
 *
 * @returns Editor Suggest Widget parameters
 */
async function editorSuggestWidget() {
  return promiseMap([
    ['editorSuggestWidget.background', palette('darkSecondary')],
    ['editorSuggestWidget.border', palette('darkSecondary')],
    ['editorSuggestWidget.foreground', palette('neutral')],
    ['editorSuggestWidget.highlightForeground', palette('lightSecondary')],
    ['editorSuggestWidget.selectedBackground', palette('transparentSecondary')],
  ]);
}

/**
 *
 * @returns Editor Warning parameters
 */
async function editorWarning() {
  return promiseMap([
    ['editorWarning.foreground', palette('lightSecondary')],
    ['editorMarkerNavigationWarning.background', palette('lightSecondary')],
  ]);
}

/**
 *
 * @returns Editor Whitespace parameters
 */
async function editorWhitespace() {
  return promiseMap([['editorWhitespace.foreground', palette('gray25')]]);
}

/**
 *
 * @returns Editor Widget parameters
 */
async function editorWidget() {
  return promiseMap([['editorWidget.background', palette('backgroundPrimary')]]);
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
    editorRuler(),
    editorSuggestWidget(),
    editorWarning(),
    editorWhitespace(),
    editorWidget(),
  ]);

  const _map = new Map();
  for (const module of modules) {
    for (const [key, value] of module.entries()) {
      _map.set(key, value);
    }
  }

  return Promise.resolve(_map);
}