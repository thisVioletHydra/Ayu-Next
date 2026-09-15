import leftoverJson from '#data/token-colors.json' with { type: 'json' };
import { textMateFromRoles } from '#syntax/roles';

type TokenRule = {
  scope: string | string[];
  settings: { foreground?: string; fontStyle?: string };
};

export const tokenColors: TokenRule[] = [
  ...textMateFromRoles(),
  ...(leftoverJson as TokenRule[]),
];
