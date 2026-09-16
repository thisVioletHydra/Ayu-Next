import { builtinPaint } from '#ts/типизация/builtin';
import { classAsTypePaint } from '#ts/типизация/class-as-type';
import { genericPaint } from '#ts/типизация/generic';
import { interfacePaint } from '#ts/типизация/interface';
import { intersectionPaint } from '#ts/типизация/intersection';
import type { TypingPaint } from '#ts/типизация/kinds';
import { optionalPaint } from '#ts/типизация/optional';
import { reExportPaint } from '#ts/типизация/re-export';
import { typeAliasPaint } from '#ts/типизация/type-alias';
import { typeLiteralPaint } from '#ts/типизация/type-literal';
import { unionPaint } from '#ts/типизация/union';
import { utilityPaint } from '#ts/типизация/utility';

/**
 * Stubs first, painted constructs next, lock files last.
 * Last merge wins for the same semantic selector / same-specificity TM scope.
 */
export const typingLayers: readonly TypingPaint[] = [
  builtinPaint,
  genericPaint,
  utilityPaint,
  typeLiteralPaint,
  intersectionPaint,
  unionPaint,
  optionalPaint,
  classAsTypePaint,
  reExportPaint,
  typeAliasPaint,
  interfacePaint,
];

export function typingSemantic(): Record<string, string> {
  const out: Record<string, string> = {};

  for (const layer of typingLayers) {
    Object.assign(out, layer.semantic);
  }

  return out;
}

export function typingTextMate(): TypingPaint['textmate'] {
  return typingLayers.flatMap((layer) => layer.textmate);
}

export function typingStatus(): Array<{ id: string; status: TypingPaint['status'] }> {
  return typingLayers.map((layer) => ({ id: layer.id, status: layer.status }));
}
