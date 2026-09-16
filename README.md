<p align="center"><img alt="Ayu Next" src="https://raw.githubusercontent.com/thisVioletHydra/Ayu-Next/master/images/icon-hero.png"/></p>
<h1 align="center">Ayu Next</h1>
<p align="center">Dark Mirage for VS Code. Built for people who live in the editor.</p>
<br>

## Why

Ayu Next is a precision dark theme — Mirage depth, sharp accents, syntax that stays readable at 2 a.m. Crafted for modern web stacks and refined every day in real projects.

## Pair with

- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- [Highlight Matching Tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag)
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)

## Heritage

Standing on the shoulders of [Ayu](https://github.com/dempfi/ayu) — then rebuilt for how we actually write software now.


## Builder (TypeScript syntax)

Syntax roles are split by construct under ASCII paths only (no Cyrillic in folders/files):

| Path | Owns |
| --- | --- |
| `src/ts/tsTypes/` | Type & interface **names** (`ThemeId`, `TokenDto`) |
| `src/ts/tsClasses/` | Class names + `new X` / lib ctors |
| `src/ts/tsKeywords/` | Keywords + decorator `@` |
| `src/ts/tsLanguage/` | `this` / `super` |
| `src/ts/tsProps/` | Property access & interface fields |
| `src/ts/tsDecorators/` | Decorator names (`Injectable`, `Controller`) |

**Hard lock:** type and interface names stay salad green `#BAE67E` forever. `pnpm build` fails if another role repaints those scopes. Reference file: `playground/node/nest/app.controller.ts`.

Nest playground target (approx): types/interfaces `#BAE67E`, classes/ctors/Readonly/lib builtins `#5CCFE6`, keywords/methods/decorator-names/strings `#FF9944`, params/properties `#CBCCC6`.

```bash
pnpm build
```

## Changelog

[CHANGELOG](https://github.com/thisVioletHydra/Ayu-Next/blob/master/CHANGELOG.md)

## Screenshots

### Nuxt

![Nuxt](https://raw.githubusercontent.com/thisVioletHydra/Ayu-Next/master/images/code/dd387fc79b.png)

### Vue

![Vue](https://raw.githubusercontent.com/thisVioletHydra/Ayu-Next/master/images/code/f352c60be4.png)

### Node

![Node](https://raw.githubusercontent.com/thisVioletHydra/Ayu-Next/master/images/code/cefc596770.png)

### JavaScript

![JavaScript](https://raw.githubusercontent.com/thisVioletHydra/Ayu-Next/master/images/code/e9283868da.png)

### JSON

![JSON](https://raw.githubusercontent.com/thisVioletHydra/Ayu-Next/master/images/code/15b1e8e1a5.png)

### HTML

![HTML](https://raw.githubusercontent.com/thisVioletHydra/Ayu-Next/master/images/code/3e59aee4a4.png)

### CSS

![CSS](https://raw.githubusercontent.com/thisVioletHydra/Ayu-Next/master/images/code/9d6facc900.png)

### Markdown

![Markdown](https://raw.githubusercontent.com/thisVioletHydra/Ayu-Next/master/images/code/a18030fbec.png)

## License

[MIT License](https://github.com/thisVioletHydra/Ayu-Next/blob/master/LICENSE)
