import { palette } from '@/src/palette';
import { promiseMap } from '@/src/shared/promiseMap';

/**
 * Input parameters
 */
async function inputOther() {
  return promiseMap([
    ['input.background', palette('darkSecondary')],
    ['input.border', palette('empty')],
    ['input.foreground', palette('neutral')],
    ['input.placeholderForeground', palette('textPrimary')],
  ]);
}

/**
 * Input Option parameters
 */
async function inputOption() {
  return promiseMap([
    ['inputOption.activeBackground', palette('empty')],
    ['inputOption.activeBorder', palette('transparentSecondary')],
  ]);
}

/**
 * Input Validation parameters
 */
async function inputValidation() {
  return promiseMap([
    ['inputValidation.errorForeground', palette('error')],
    ['inputValidation.infoForeground', palette('lightBlue')],
    ['inputValidation.warningForeground', palette('lightSecondary')],
    ['inputValidation.errorBackground', palette('darkPrimary')],
    ['inputValidation.errorBorder', palette('error')],
    ['inputValidation.infoBackground', palette('darkPrimary')],
    ['inputValidation.infoBorder', palette('lightCyan')],
    ['inputValidation.warningBackground', palette('darkPrimary')],
    ['inputValidation.warningBorder', palette('lightPrimary')],
  ]);
}

/**
 * Panel Input parameters
 */
async function panelInput() {
  return promiseMap([['panelInput.border', palette('darkPrimary')]]);
}

/**
 * Quick Input parameters
 */
async function quickInput() {
  return promiseMap([
    ['quickInputTitle.background', palette('darkPrimary')],
    ['quickInput.background', palette('darkPrimary')],
    ['quickInput.foreground', palette('textPrimary')],
    ['quickInputList.focusBackground', palette('darkSecondary')],
    ['quickInputList.focusForeground', palette('white')],
    ['quickInputList.focusIconForeground', palette('neutral')],
  ]);
}

export async function input() {
  const modules = await Promise.all([
    inputOther(),
    inputOption(),
    inputValidation(),
    panelInput(),
    quickInput(),
  ]);

  const _map = new Map();
  for (const module of modules) {
    for (const [key, value] of module.entries()) {
      _map.set(key, value);
    }
  }

  return _map;
}