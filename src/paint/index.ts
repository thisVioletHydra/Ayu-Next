import type { WorkbenchColors } from '#types/workbench-colors';

import { controls } from '#paint/controls';
import { editor } from '#paint/editor';
import { panels } from '#paint/panels';
import { scm } from '#paint/scm';
import { shell } from '#paint/shell';
import { terminal } from '#paint/terminal';

export const colors = {
  ...editor,
  ...shell,
  ...panels,
  ...controls,
  ...scm,
  ...terminal,
} as const satisfies WorkbenchColors;
