# Etalon role → hex

Source: King/Inspector table from etalon PNG.

| Role | Hex |
|------|-----|
| keyword | `#FF9944` |
| string literal | `#BAE67F` |
| method | `#FFD580` |
| decorator name | `#FFE6B3` (cream, not cyan) |
| ThemeId / TokenDto | `#B9F6CA` |
| class / this | `#5CCFE6` |
| Map / Readonly / Http* / Date / string-ann | `#D5BFFF` |
| param / prop | `#F29E74` |
| punct / fg | `#CBCCC6` |

Methods and strings are **not** `#FF9944`.

## Interface / object fields (Roman 2026-09-18)

| Role | Hex |
|------|-----|
| field keys (`role`, `hex`, …) | `#BAE67F` |
| primitive type values (`string`, `number`, …) | `#CBCCC6` |
| complex type values (ThemeId/TokenDto/Map/Readonly…) | type colors (lime/lavender) |

| ternary `?` `:` | `#F29E74` |
| template string / backticks | `#FF9944` |
| ordinary string literal | `#BAE67F` |
| type.defaultLibrary (Readonly/Map type-pos) | `#B9F6CA` |
| parameter / variable.parameter / dto | `#D5BFFF` |
| operators (=== !== ?. ternary ? :) | `#F29E74` |
| member access (this.accents / property) | `#CBCCC6` |
| interface keys (property.declaration) | `#BAE67F` |
| spread/rest `...` | `#F29E74` |
| arrow `=>` / keyword.operator* | `#F29E74` |
| constructor keyword | `#FFD580` |
| ThemeService type-ref (class) | `#B9F6CA` |
| class.declaration name | `#5CCFE6` |
| type.defaultLibrary Readonly/Map | `#B9F6CA` |
| throw / new | `#FF9944` |
| template backticks / ${} | `#F29E74` |
| template string text | `#BAE67F` |
| comma | `#F29E74` |
| enum / enumMember (HttpStatus.NOT_FOUND) | `#CBCCC6` |
