import type { HexColor } from '#types/workbench-colors';

/**
 * Locked salad green for type names + interface names.
 * Original Nest screenshot glyph core ≈ `#BAF6CA`.
 * Nothing in the pipeline after this layer may use another hex
 * on the locked selectors — `build.ts` fails the theme if they drift.
 */
export const SALAD_GREEN = '#BAF6CA' as HexColor;

export const SALAD_GREEN_LC = SALAD_GREEN.toLowerCase();

export const LOCKED_TYPE_SEMANTIC = [
  'type',
  'type.declaration',
  'interface',
  'interface.declaration',
  'interface.defaultLibrary',
] as const;

export const LOCKED_TYPE_TEXTMATE = [
  'entity.name.type.interface',
  'meta.interface entity.name.type.interface',
  'entity.name.type.alias',
  'meta.type.declaration entity.name.type.alias',
  'entity.name.type',
] as const;
