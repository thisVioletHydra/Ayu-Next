import leftoverJson from '#data/token-colors.json' with { type: 'json' };
import { textMateFromRoles } from '#syntax/roles';
import { typingTextMate } from '#ts/типизация';

type TokenRule = {
  scope: string | string[];
  settings: { foreground?: string; fontStyle?: string };
};

export const tokenColors: TokenRule[] = [
  ...textMateFromRoles(),
  ...(leftoverJson as TokenRule[]),
  ...typingTextMate(),
];
