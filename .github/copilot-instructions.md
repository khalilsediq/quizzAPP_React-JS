# Copilot / AI Agent Instructions — quizzAPP

## Quick summary
- Small Vite + React (React 19) single-page app. Entry: `src/main.jsx`. Root component: `src/App.jsx`.
- Dev server: Vite. Linting: ESLint configured in `eslint.config.js`.

## Important commands
- Start (dev + HMR): `npm run start`
- Build (production): `npm run build`
- Preview built app: `npm run preview`
- Lint: `npm run lint`

## Big-picture architecture
- Single-page client app built with Vite + React. No backend in this repository.
- `src/main.jsx` mounts the default export from `src/App.jsx` into `#root` (see `index.html`).
- Static assets live in `src/assets/` and global styles are in `src/*.css`.

## Patterns & conventions (follow these precisely)
- Components are functional React components using hooks (useState/useEffect).
  - Example: `function QuizzApp()` in `src/App.jsx`.
- Default export pattern: components are exported with `export default` and imported by filename in `src/main.jsx`.
- Network calls use `axios` (already listed in `package.json`). Example call in `src/App.jsx`:

```js
// src/App.jsx (existing)
axios("https://the-trivia-api.com/v2/questions")
  .then(res => { console.log(res); /* setQuestion(res) */ })
```

- State + loading + error pattern: the app uses `loading` and `err` booleans alongside primary state (`question`). Keep that UI/state pattern when adding requests.
- ESLint: project-level rules in `eslint.config.js`. Note: `no-unused-vars` ignores names that begin with uppercase or `_`.

## Integration & external dependencies to be aware of
- External API: https://the-trivia-api.com/v2/questions (used in `src/App.jsx`). Validate response shape (`res.data`) before changing state.
- Key deps: `react`, `react-dom`, `axios`, `vite`, `@vitejs/plugin-react`.

## Developer workflow expectations for edits
1. Make small, focused changes. Preserve the default export and existing component structure.
2. Run `npm run lint` and fix any ESLint errors before committing.
3. Start the dev server (`npm run start`) and verify HMR + console output.
4. For any network-change, confirm UI: loading → success/error states behave as in `src/App.jsx`.

## Known issues & quick checks (discoverable in repo)
- `src/App.jsx` currently uses `axios(...)` but does not import `axios` and contains a duplicate `react` import — check and fix imports before running.
- `setQuestion(res)` likely should use `res.data` (inspect API response and update state shape accordingly).

## Files to inspect when making changes
- `package.json` — scripts & dependencies
- `src/App.jsx` — primary app logic / data fetch
- `src/main.jsx` — app mount + StrictMode
- `vite.config.js` — Vite + React plugin
- `eslint.config.js` — lint rules to satisfy

## How an AI agent should propose changes
- Provide concise diffs/PR descriptions and include the exact files changed.
- Run `npm run lint` locally (or report lint output) in the PR description.
- Add or update tests only if a pattern for tests is present in the repo (none detected here) — otherwise add a brief manual QA checklist in the PR.

---
If any of these sections are unclear or you want more examples (component props, expected API response shape, or preferred commit message format), tell me which part to expand and I will iterate. ✅