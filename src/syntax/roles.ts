import type { TokenRole } from '#tokens';
import { token } from '#tokens';
import {
  interfaceTypingPaint,
  typeAliasTypingPaint,
} from '#ts/tsTypes';

export type SyntaxRole = Extract<TokenRole, `syntax.${string}`>;

export type RolePaint = {
  role: SyntaxRole;
  semantic: readonly string[];
  textmate: readonly string[];
  fontStyle?: string;
};

/**
 * Ownership table. Each syntax.* role owns at most one semantic
 * selector set and one TextMate scope set. Do not list the same
 * scope on two roles — `build.ts` fails if they collide or drift.
 *
 *   syntax.keyword        — keywords (`type`, `return`, `new`)
 *   syntax.keywordStrong  — bold `class` keyword + decorator `@`
 *   syntax.func           — methods + .get/.set + decorator NAME (`Injectable`)
 *   syntax.entity         — class identifiers only
 *   syntax.typeAlias      — type-alias names (ThemeId) — салатовый замок
 *   syntax.interface      — interface names (TokenDto) — салатовый замок
 *   syntax.ctor           — every `new X` name: defaultLibrary + constructor
 *                           TM scopes (Date/Map/Error/HttpException)
 *   syntax.typeBuiltin    — primitives (`string` in annotations)
 *   syntax.propKey        — `{ id, accent: }` / destructure keys
 *   syntax.propField      — interface field names (`role`, `hex`)
 *   syntax.param          — params in signature AND body
 *   syntax.string         — quoted strings only
 *   syntax.fg             — values after `:` in object literals (fallback)
 */
export const rolePaint = [
  {
    role: 'syntax.keyword',
    semantic: ['keyword'],
    textmate: [
      'keyword',
      'storage',
      'storage.type.keyword',
      'storage.type.function',
      'storage.type.type',
      'storage.type.interface',
      'keyword.control.default',
      'keyword.operator.new',
    ],
  },
  {
    role: 'syntax.keywordStrong',
    semantic: [],
    textmate: [
      'storage.type.class',
      'punctuation.decorator',
      'punctuation.definition.decorator',
      'punctuation.definition.annotation',
    ],
    fontStyle: 'bold',
  },
  {
    role: 'syntax.func',
    semantic: ['function', 'method', 'method.defaultLibrary', 'decorator'],
    textmate: [
      'entity.name.function',
      'entity.name.function.member',
      'meta.function-call entity.name.function',
      'meta.method.declaration entity.name.function',
      'meta.definition.method entity.name.function',
      'variable.function',
      'meta.function-call.generic',
      'support.function',
      'meta.function-call support.function',
      'entity.name.function.decorator',
      'meta.decorator entity.name.function',
      'meta.decorator variable.other',
      'storage.type.annotation',
      'variable.annotation',
    ],
  },
  {
    role: 'syntax.entity',
    semantic: [
      'class.declaration',
      'enum',
      'enum.defaultLibrary',
      'struct',
      'struct.defaultLibrary',
    ],
    textmate: [
      'entity.name.type.class',
      'entity.name.type.enum',
      'support.class',
    ],
  },
  // tsTypes (типизация): имена интерфейсов и type-alias — салатовый замок (src/ts/tsTypes)
  {
    role: interfaceTypingPaint.role,
    semantic: [...interfaceTypingPaint.semantic],
    textmate: [...interfaceTypingPaint.textmate],
  },
  {
    role: typeAliasTypingPaint.role,
    semantic: [...typeAliasTypingPaint.semantic],
    textmate: [...typeAliasTypingPaint.textmate],
  },
  {
    role: 'syntax.ctor',
    semantic: [
      'class',
      'class.defaultLibrary',
      'variable.defaultLibrary',
      'function.defaultLibrary',
      'property.defaultLibrary',
    ],
    textmate: [
      'meta.function-call.constructor',
      'meta.function-call.constructor entity.name.function',
      'meta.function-call.constructor entity.name.type',
      'meta.function-call.constructor support.class',
      'meta.function-call.constructor support.class.builtin',
      'meta.function-call.constructor variable.other.readwrite',
      'new.expr entity.name.type',
      'new.expr entity.name.function',
      'new.expr entity.name.type.class',
      'new.expr support.class',
      'new.expr support.class.builtin',
      'new.expr variable.other.readwrite',
      'new.expr variable.other.constant',
      'meta.new-expression entity.name.type',
      'source new.expr entity.name.type',
      'source meta.export.default meta.class meta.method.declaration meta.block meta.var.expr new.expr entity.name.type',
    ],
  },
  {
    role: 'syntax.typeBuiltin',
    semantic: ['type.defaultLibrary'],
    textmate: [
      'support.type.primitive',
      'support.type.builtin',
      'storage.type.primitive',
    ],
  },
  {
    role: 'syntax.propKey',
    semantic: ['property'],
    textmate: [
      'meta.object-literal.key',
      'meta.object-binding-pattern variable.object.property',
      'meta.array-binding-pattern variable.object.property',
    ],
  },
  {
    role: 'syntax.propField',
    semantic: ['property.declaration'],
    textmate: [
      'meta.interface meta.field.declaration variable.object.property',
      'meta.interface meta.field.declaration variable.other.readwrite',
      'meta.type.declaration meta.field.declaration variable.object.property',
      'meta.type.object.type meta.field.declaration variable.object.property',
    ],
  },
  {
    role: 'syntax.param',
    semantic: ['parameter', 'parameter.declaration'],
    textmate: ['variable.parameter', 'meta.parameter'],
  },
  {
    role: 'syntax.string',
    semantic: ['string'],
    textmate: ['string', 'constant.other.symbol'],
  },
  {
    role: 'syntax.comment',
    semantic: ['comment'],
    textmate: ['comment'],
    fontStyle: 'italic',
  },
  {
    role: 'syntax.operator',
    semantic: ['operator', 'namespace', 'module'],
    textmate: [
      'keyword.operator',
      'punctuation.accessor',
      'keyword.control.import',
      'keyword.control.export',
      'source support.type.object.module',
    ],
  },
  {
    role: 'syntax.number',
    semantic: ['number'],
    textmate: ['constant.numeric'],
  },
  {
    role: 'syntax.regexp',
    semantic: ['regexp', 'enumMember'],
    textmate: ['string.regexp', 'constant.character', 'constant.other'],
  },
  {
    role: 'syntax.this',
    semantic: ['variable.language.this'],
    textmate: ['variable.language.this', 'variable.language.super'],
    fontStyle: 'italic',
  },
  {
    role: 'syntax.tag',
    semantic: [],
    textmate: ['entity.name.tag', 'meta.tag.sgml', 'entity.other.inherited-class'],
  },
  {
    role: 'syntax.markup',
    semantic: [],
    textmate: [
      'support.macro',
      'support.function.console',
      'source meta.export.default meta.class meta.method.declaration meta.block meta.function-call support.function.console',
    ],
  },
  {
    role: 'syntax.special',
    semantic: ['macro'],
    textmate: [],
  },
  {
    role: 'syntax.invalid',
    semantic: [],
    textmate: ['invalid', 'message.error'],
  },
  {
    role: 'syntax.fg',
    semantic: ['variable'],
    textmate: [],
  },
] satisfies readonly RolePaint[];

export type SemanticStyle = string | { foreground: string; fontStyle?: string };

export function semanticFromRoles(): Record<string, SemanticStyle> {
  const out: Record<string, SemanticStyle> = {};

  for (const paint of rolePaint) {
    const foreground = token(paint.role);

    for (const selector of paint.semantic) {
      out[selector] = paint.fontStyle
        ? { foreground, fontStyle: paint.fontStyle }
        : foreground;
    }
  }

  return out;
}

export function textMateFromRoles(): Array<{
  scope: string[];
  settings: { foreground: string; fontStyle?: string };
}> {
  return rolePaint
    .filter((paint) => paint.textmate.length > 0)
    .map((paint) => ({
      scope: [...paint.textmate],
      settings: {
        foreground: token(paint.role),
        ...(paint.fontStyle ? { fontStyle: paint.fontStyle } : {}),
      },
    }));
}

/** Exact scope → owning role hex. Used by build.ts to stop restacking. */
export function ownedScopeHex(): Map<string, { role: SyntaxRole; hex: string }> {
  const owned = new Map<string, { role: SyntaxRole; hex: string }>();

  for (const paint of rolePaint) {
    const hex = token(paint.role).toLowerCase();

    for (const scope of paint.textmate) {
      owned.set(scope, { role: paint.role, hex });
    }
  }

  return owned;
}
