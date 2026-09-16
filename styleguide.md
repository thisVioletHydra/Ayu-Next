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

| Role | Hex | Owns | Does not own |
| --- | --- | --- | --- |
| `syntax.keyword` | `#FF9944` | `type` / `return` / `new` / `if` | decorator `@`, class keyword |
| `syntax.keywordStrong` | `#FF9944` | `class` keyword (bold) | decorator `@` / name |
| `syntax.func` | `#FFCC66` | methods, decorators including `@` | constructors |
| `syntax.entity` | `#90E1C6` | `class.declaration` + type-alias names | interface fields |
| `syntax.interface` | `#90E1C6` | interface names | interface field names |
| `syntax.ctor` | `#90E1C6` | every `new X` name: `class/variable/function/property.defaultLibrary` + `new.expr` | class declarations, methods |
| `syntax.typeBuiltin` | `#90E1C6` | `string` / `number` annotations | quoted strings |
| `syntax.propKey` | `#CBCCC6` | object / destructure keys | quoted strings |
| `syntax.propField` | `#CBCCC6` | interface field names | object-literal keys |
| `syntax.param` | `#D4BFFF` | params in signature and body | locals that are not params |
| `syntax.string` | `#BAE67E` | quoted strings | types, keys |
