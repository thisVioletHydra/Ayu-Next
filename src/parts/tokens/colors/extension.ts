import { palette } from '@/src/palette';
import { promiseMap } from '@/src/shared/promiseMap';

async function extensionBadge() {
  return promiseMap([
    ['extensionBadge.remoteBackground', palette('transparentSecondary')],
    ['extensionBadge.remoteForeground', palette('transparentDarkPrimary')],
  ]);
}
async function extensionIcon() {
  return promiseMap([
    ['extensionIcon.preReleaseForeground', palette('transparentSecondary')],
    ['extensionIcon.sponsorForeground', palette('error')],
    ['extensionIcon.starForeground', palette('lightSecondary')],
    ['extensionIcon.verifiedForeground', palette('lightSecondary')],
  ]);
}
async function extensionButton() {
  return promiseMap([
    ['extensionButton.prominentBackground', palette('lightSecondary')],
    ['extensionButton.prominentForeground', palette('darkPrimary')],
    ['extensionButton.prominentHoverBackground', palette('lightOrange')],
  ]);
}

export async function extension() {
  const modules = await Promise.all([
    extensionButton(),
    extensionIcon(),
    extensionBadge(),
  ]);

  const _map = new Map();
  for (const module of modules) {
    for (const [key, value] of module.entries()) {
      _map.set(key, value);
    }
  }

  return _map;
}