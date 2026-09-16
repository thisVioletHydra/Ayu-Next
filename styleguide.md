## Ayu Next color scheme

| PALETTE             | HEX       |
| ------------------- | --------- |
| Background          | #1F2430   |
| Activebackground    | #171C24   |
| Inactivebackground  | #1F2430   |
| -                   | -         |
| Foreground          | #CBCCC6   |
| ActiveForeground    | #CBCCC6   |
| SelectionForeground | #FFFFFF   |
| InactiveForeground  | #707A8C   |
| -                   | -         |
| Border              | #FFCC66AE |
| Activeborder        | #FFA759   |
| Modifier            | #FF9944   |
| Inactiveborder      | #805500   |
| -                   | -         |
| Hoverbackground     | #191E2A   |
| HoverForeground     | #CBCCC6   |
| Hoverborder         | #0000     |
| -                   | -         |
| Accent              | #FFCC66   |
| Dropdrag            | #D4BFFFAE |
| ERROR               | #E74C3C   |
| Inactive            | #323a4c   |
| Selection           | #3D516A   |
| Separator           | #1F2430AE |
| -                   | -         |
| Comment             | #5C6773   |
| Line                | #191E2A   |
| Shadow              | #141925   |
| Uiactive            | #586170   |
| Uiinactive          | #181a20   |
| Uinormal            | #383E4C   |
| -                   | -         |
| Keyword             | #FFA759   |
| Number              | #8C9EFF   |
| String              | #BAE67E   |
| -                   | -         |
| Added               | #A6CC70   |
| Deleted             | #F27983   |
| Modified            | #77A8D9   |
| -                   | -         |
| foldBackground      | #24AEF317 |
| Null                | #FF00FF   |
| SoftBlack           | #191E2A   |
| HardBlack           | #171C24   |
| -                   | -         |

## Syntax role ownership

Do not assign the same TextMate scope or semantic selector to two roles.
Source of truth: `src/syntax/roles.ts` + `src/tokens/catalog/syntax.ts`.

| Role | Owns | Does not own |
| --- | --- | --- |
| `syntax.keyword` | `type` / `return` / `new` / `if` | decorator `@`, class keyword |
| `syntax.keywordStrong` | `class` keyword, `@` | decorator name |
| `syntax.func` | methods (`resolve` / `.get` / `.set`), `method.defaultLibrary`, decorator name | `@`, constructors |
| `syntax.entity` | `class.declaration` + type-alias names | `new X`, builtins, interface fields |
| `syntax.interface` | interface names | interface field names |
| `syntax.ctor` | every `new X` name: `class/variable/function/property.defaultLibrary` + `new.expr` / `meta.function-call.constructor` | class declarations, object keys, methods |
| `syntax.typeBuiltin` | `string` / `number` annotations | type-alias / interface names |
| `syntax.propKey` | object / destructure keys | interface fields, member access |
| `syntax.propField` | interface / type-literal field names (`#C48464`) | class field declaration, member access |
| `syntax.propDecl` | class field declaration (`#BD7F63`) | member access (`this.accents`) |
| `syntax.propAccess` | member access (`dto.hex`, `this.accents`, `#98BC6C`) | declarations |
| `syntax.param` | params in signature and body (`#A898CC`) | locals that are not params |
| `syntax.this` | `this` / `super` (`#4CACC0`) | member after `.` |
| `syntax.string` | quoted strings | types, keys |

Measured Nest shot (glyph core) vs closest catalog leftovers:

| Scope | Measured | Role | Closest old palette |
| --- | --- | --- | --- |
| param signature + body | `#A898CC` | `syntax.param` | `#D4BFFF` |
| interface / type-literal field | `#C48464` | `syntax.propField` | `#F29E74` |
| class field declaration | `#BD7F63` | `syntax.propDecl` | `#ED8274` |
| property access | `#98BC6C` | `syntax.propAccess` | `#BAE67E` |
| `this` | `#4CACC0` | `syntax.this` | `#5CCFE6` |

Declaration (`propDecl` / `propField`) and access (`propAccess`) must stay different hexes.

