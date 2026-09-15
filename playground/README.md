# Visual playground

Open samples in the **Extension Development Host** and judge syntax + workbench colors under **Ayu Next**.

## Debug the theme (F5)

1. Open this repo in Cursor / VS Code
2. Run and Debug → **ayu-next** → **F5** (`preLaunchTask` runs `pnpm build`)
3. A new **Extension Development Host** window opens on `playground/`
4. Command Palette → **Preferences: Color Theme** → **Ayu Next**
5. Browse the files below — that is the visual QA loop

Themes are **not** hot-reloaded. After `pnpm build` / `pnpm build:watch`, in the Host window either:

- Command Palette → **Developer: Reload Window**, or
- re-select **Ayu Next** in Color Theme (faster)

Offline color check (no Host needed):

```bash
pnpm theme:debug
pnpm theme:debug playground/node/hono/app.ts
```

Do not confuse the Host window with your main editor window.

## Layout

```
playground/
  languages/     # html, css, js, ts, json, jsonc, md, log
  vue/           # Vue SFC + composable
  react/         # React TSX / JSX
  node/          # Express, Prisma, Fastify, Nest, Hono
```

Not shipped in the VSIX — local preview only.
