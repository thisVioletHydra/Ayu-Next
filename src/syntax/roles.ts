import type { TokenRole } from '#tokens';
import { token } from '#tokens';
import {
  interfaceTypingPaint,
  typeAliasTypingPaint,
  typeBuiltinTyping,
} from '#ts/tsTypes';
import { classPaint, ctorValuePaint, typePositionLibPaint } from '#ts/tsClasses';
import { thisPaint } from '#ts/tsLanguage';
import { keywordPaint, keywordStrongPaint, typeKeywordPaint, modifierKeywordPaint } from '#ts/tsKeywords';
import { decoratorNamePaint } from '#ts/tsDecorators';
import { propKeyPaint, propFieldPaint, classFieldPaint } from '#ts/tsProps';

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
 *   syntax.func           — methods + .get/.set (decorator NAME → syntax.decoratorName)
 *   syntax.entity         — class identifiers only
 *   syntax.typeAlias      — type-alias names (ThemeId) — салатовый замок
 *   syntax.interface      — interface names (TokenDto) — салатовый замок
 *   syntax.ctor           — lib classes Map/Date/HttpException/Readonly — lavender
 *   syntax.typeBuiltin    — primitives (`string`) — white #CBCCC6
 *   syntax.decoratorName  — Injectable/Controller — light cyan
 *   syntax.propKey        — `{ id, accent: }` / destructure keys
 *   syntax.propField      — interface field names (`role`, `hex`)
 *   syntax.param          — params in signature AND body
 *   syntax.string         — quoted strings only
 *   syntax.fg             — values after `:` in object literals (fallback)
 */
export const rolePaint = [
  {
    role: keywordPaint.role,
    semantic: [...keywordPaint.semantic],
    textmate: [...keywordPaint.textmate],
  },
  {
    role: typeKeywordPaint.role,
    semantic: [...typeKeywordPaint.semantic],
    textmate: [...typeKeywordPaint.textmate],
  },
  {
    role: modifierKeywordPaint.role,
    semantic: [...modifierKeywordPaint.semantic],
    textmate: [...modifierKeywordPaint.textmate],
    fontStyle: modifierKeywordPaint.fontStyle,
  },
  {
    role: keywordStrongPaint.role,
    semantic: [...keywordStrongPaint.semantic],
    textmate: [...keywordStrongPaint.textmate],
    fontStyle: keywordStrongPaint.fontStyle,
  },
  {
    role: 'syntax.func',
    semantic: [
      'function',
      'method',
    ],
    textmate: [
      // bare leaf kept for ownership assert; exclusions stop decorator/`new X` bleed
      'entity.name.function',
      'entity.name.function - meta.decorator',
      'entity.name.function - new.expr',
      'entity.name.function.ts - meta.decorator',
      'entity.name.function.member',
      'meta.function-call entity.name.function - meta.decorator',
      'meta.function-call entity.name.function - new.expr',
      'meta.method.declaration entity.name.function',
      'meta.definition.method entity.name.function',
      'variable.function',
      'variable.function - meta.decorator',
      'meta.function-call.generic',
    ],
  },
  {
    role: decoratorNamePaint.role,
    semantic: [...decoratorNamePaint.semantic],
    textmate: [...decoratorNamePaint.textmate],
  },

  {
    role: classPaint.role,
    semantic: [...classPaint.semantic],
    textmate: [...classPaint.textmate],
  },
  // tsTypes: interface + type-alias names — salad lock (src/ts/tsTypes)
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
    role: typePositionLibPaint.role,
    semantic: [...typePositionLibPaint.semantic],
    textmate: [...typePositionLibPaint.textmate],
  },
  {
    role: ctorValuePaint.role,
    semantic: [...ctorValuePaint.semantic],
    textmate: [...ctorValuePaint.textmate],
  },
  {
    role: typeBuiltinTyping.role,
    semantic: [...typeBuiltinTyping.semantic],
    textmate: [...typeBuiltinTyping.textmate],
  },
  {
    role: propKeyPaint.role,
    semantic: [...propKeyPaint.semantic],
    textmate: [...propKeyPaint.textmate],
  },
  {
    role: propFieldPaint.role,
    semantic: [...propFieldPaint.semantic],
    textmate: [...propFieldPaint.textmate],
  },
  {
    role: classFieldPaint.role,
    semantic: [...classFieldPaint.semantic],
    textmate: [...classFieldPaint.textmate],
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
    role: thisPaint.role,
    semantic: [...thisPaint.semantic],
    textmate: [...thisPaint.textmate],
    fontStyle: thisPaint.fontStyle,
  },
  {
    role: 'syntax.tag',
    semantic: [],
    textmate: ['entity.name.tag', 'meta.tag.sgml', 'entity.other.inherited-class'],
  },
  {
    role: 'syntax.markup',
    semantic: [
      'method.defaultLibrary',
    ],
    textmate: [
      'support.function',
      'support.function.ts',
      'support.function.builtin',
      'support.function.builtin.ts',
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
