import { semanticFromRoles } from '#syntax/roles';
import { typingSemantic } from '#ts/типизация';

export const semanticHighlighting = true;
export const semanticTokenColors = {
  ...semanticFromRoles(),
  ...typingSemantic(),
};
