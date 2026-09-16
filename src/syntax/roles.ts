import type { TokenRole } from '#tokens';
import { token } from '#tokens';

export type SyntaxRole = Extract<TokenRole, `syntax.${string}`>;

export type RolePaint = {
  role: SyntaxRole;
  semantic: readonly string[];
  textmate: readonly string[];
  fontStyle?: string;
};

/**
 * Ownership table. Sampled from the LEFT Nest pane (Ayu Mirage depth).
 * Do not color semantic `variable` — that flattens methods/types/params
 * to editor foreground in the Extension Host.
 *
 *   syntax.keyword        — type/return/new/if/private/readonly
 *   syntax.keywordStrong  — bold `class` keyword + decorator `@`
 *   syntax.func           — methods + decorator NAME (`function` is library/Date cyan)
 *   syntax.entity         — ThemeService / ThemeId / entity.name
 *   syntax.interface      — TokenDto (same sky as class on the left)
 *   syntax.ctor           — `new X` class-name TextMate (HttpException)
 *   syntax.typeBuiltin    — `string` / Readonly / Date / Map library family (cyan)
 *   syntax.propKey        — `{ id, accent, updatedAt }` including grammar's entity.name.function keys
 *   syntax.propField      — interface field names (fg, not keys)
 *   syntax.param          — id/dto in signature AND body
 *   syntax.string         — quoted strings
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
    semantic: ['method', 'method.defaultLibrary', 'decorator'],
    textmate: [
      'entity.name.function',
      'entity.name.function.member',
      'meta.function-call entity.name.function',
      'meta.method.declaration entity.name.function',
      'meta.definition.method entity.name.function',
      'variable.function',
      'meta.function-call.generic',
      'entity.name.function.decorator',
      'meta.decorator entity.name.function',
      'storage.type.annotation',
      'variable.annotation',
    ],
  },
  {
    role: 'syntax.entity',
    semantic: [
      'class',
      'class.declaration',
      'enum',
      'struct',
      'type',
      'typeParameter',
    ],
    textmate: [
      'entity.name',
      'entity.name.type',
      'entity.name.type.class',
      'entity.name.type.alias',
      'entity.name.type.enum',
    ],
  },
  {
    role: 'syntax.interface',
    semantic: ['interface'],
    textmate: ['entity.name.type.interface'],
  },
  {
    role: 'syntax.ctor',
    semantic: [],
    textmate: [
      'meta.function-call.constructor entity.name.type',
      'meta.function-call.constructor support.class',
      'meta.function-call.constructor support.class.builtin',
      'new.expr entity.name.type',
      'new.expr entity.name.type.class',
      'new.expr support.class',
      'new.expr support.class.builtin',
      'meta.new-expression entity.name.type',
      'source new.expr entity.name.type',
    ],
  },
  {
    role: 'syntax.typeBuiltin',
    semantic: [
      'type.defaultLibrary',
      'type.defaultLibrary:typescript',
      'class.defaultLibrary',
      'enum.defaultLibrary',
      'struct.defaultLibrary',
      'interface.defaultLibrary',
      'interface.defaultLibrary:typescript',
      'variable.defaultLibrary',
      'function',
      'function.defaultLibrary',
      'function.defaultLibrary:typescript',
      'property.defaultLibrary',
    ],
    textmate: [
      'support.type',
      'support.class',
      'support.type.primitive',
      'support.type.builtin',
      'support.type.primitive.ts',
      'support.type.builtin.ts',
      'storage.type.primitive',
      'meta.type.annotation support.type.primitive',
      'meta.type.annotation support.type.builtin',
      'meta.type.parameters support.type.primitive',
      'new.expr entity.name.function',
      'new.expr meta.function-call entity.name.function',
      'new.expr meta.function-call.constructor entity.name.function',
      'meta.function-call.constructor entity.name.function',
    ],
  },
  {
    role: 'syntax.propKey',
    semantic: ['property', 'property.declaration'],
    textmate: [
      'meta.object-literal.key',
      'meta.object-literal.key entity.name.function',
      'meta.object.member meta.object-literal.key',
      'meta.object.member meta.object-literal.key entity.name.function',
      'meta.definition.property',
      'meta.definition.property entity.name.function',
      'meta.definition.property variable.object.property',
      'meta.field.declaration variable.object.property',
      'meta.object.type variable.object.property',
      'meta.object-binding-pattern variable.object.property',
      'meta.array-binding-pattern variable.object.property',
    ],
  },
  {
    role: 'syntax.propField',
    semantic: [],
    textmate: [
      'meta.interface meta.field.declaration variable.other.readwrite',
    ],
  },
  {
    role: 'syntax.param',
    semantic: [
      'parameter',
      'parameter.declaration',
      'parameter:typescript',
      'parameter.declaration:typescript',
      'parameter.readonly',
      'parameter.declaration.readonly',
    ],
    textmate: [
      'variable.parameter',
      'variable.parameter.ts',
      'meta.parameter',
      'meta.parameters variable.parameter',
      'meta.parameters entity.name.function',
      'meta.definition.method variable.parameter',
    ],
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
      'support.function',
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
    semantic: [],
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
