import { palette } from '@/src/palette';
import { promiseMap } from '@/src/shared/promiseMap';

export async function gitDecoration() {
  return promiseMap([
    ['gitDecoration.conflictingResourceForeground', palette('error')],
    ['gitDecoration.deletedResourceForeground', palette('pink')],
    ['gitDecoration.ignoredResourceForeground', palette('gray')],
    ['gitDecoration.addedResourceForeground', palette('cream')],
    ['gitDecoration.modifiedResourceForeground', palette('blue')],
    ['gitDecoration.submoduleResourceForeground', palette('transparentPurple')],
    ['gitDecoration.untrackedResourceForeground', palette('green')],
  ]);
}