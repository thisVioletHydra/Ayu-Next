import type { MapFull } from '../types';

export function toObject(result: MapFull) {
  return JSON.stringify(Object.fromEntries(result), null, 2);
}