import { defineConfig } from 'oxlint';

import oxyhub from '@oxyhub/oxlint-plugin/config';

export default defineConfig({
  extends: [oxyhub],
  ignorePatterns: [
    'node_modules/**',
    'themes/**',
    'images/**',
    'schemas/**',
    'playground',
    'playground/**',
    '**/playground/**',
    'src/types/workbench-colors.d.ts',
  ],
});
