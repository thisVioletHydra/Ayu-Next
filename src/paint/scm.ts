import type { WorkbenchColors } from '#types/workbench-colors';

import { token } from '#tokens';

/** Git decorations and diff editor. */
export const scm = {
  'diffEditor.insertedTextBackground': token('state.addedGhost'),
  'diffEditor.removedTextBackground': token('state.deletedGhost'),
  'gitDecoration.addedResourceForeground': token('state.addedBright'),
  'gitDecoration.conflictingResourceForeground': token('state.error'),
  'gitDecoration.deletedResourceForeground': token('state.deleted'),
  'gitDecoration.ignoredResourceForeground': token('fg.secondary'),
  'gitDecoration.modifiedResourceForeground': token('state.modified'),
  'gitDecoration.submoduleResourceForeground': token('accent.lilacMuted'),
  'gitDecoration.untrackedResourceForeground': token('state.added'),
} as const satisfies WorkbenchColors;
