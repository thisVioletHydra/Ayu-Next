import type { MapFull, MapListValue } from '../types';

export function toObject(result: MapFull | MapListValue) {
  if (result instanceof Map) {
    return JSON.stringify(Object.fromEntries(result), null, 2);
  } else {
    return JSON.stringify(result);
  }
}