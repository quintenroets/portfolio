# AGENTS.md

## Purpose

This repository is a Vue 3 + Vite portfolio site styled with Tailwind CSS.
Use this guide when acting as an agent in this codebase.

## Quick Start

- Install deps: `bun install`
- Dev server: `bun run dev`
- Build: `bun run build`
- Preview build: `bun run preview`
- Lint (auto-fix): `bun run lint`
- Format (write): `bun run format`
- Format (check): `bun run check-format`

## Tests

- Playwright visual validation: `bun run test`

## Visual Regression Workflow

- Before making changes, ensure baseline screenshots exist under `test-baseline/`.
- If no baseline exists:
  - Run all tests: `bun run test`
  - Move results into baseline: `mkdir -p test-baseline && mv test-results/* test-baseline/`
- After changes:
  - Run all tests again: `bun run test`
  - Diff results vs baseline: `diff -qr test-baseline test-results | grep -E "\\.png"`
  - If any PNGs differ, open both images and confirm whether differences are meaningful

## Tooling Notes

- Package manager: Bun
- Vite config: `vite.config.js`.
- ESLint config: `.eslintrc.js` (Vue 3 essential + Prettier).
- Prettier is configured via `eslint-plugin-prettier` (no standalone config).
- Tailwind config: `tailwind.config.js`.
- PostCSS config: `postcss.config.cjs`.

## Project Structure

- Entry: `src/main.js`.
- Root layout: `src/App.vue`.
- Router: `src/router/index.js`.
- Views: `src/views/*.vue`.
- Components: `src/components/*.vue`.
- Shared constants: `src/constants.js`.
- Global styles: `src/assets/css/tailwind.css`.

## Code Style Guidelines

Follow the established patterns in existing files.

### Imports

- Use ES module imports with double quotes.
- Use the `@` alias for `src` (configured in Vite).
- Order imports: external packages first, then local modules, then styles.
- Keep related imports grouped; prefer one import block per file.
- Avoid dynamic imports unless code-splitting is needed.

### Formatting

- Indentation: 2 spaces (consistent with Prettier defaults).
- Use semicolons consistently (observed in `.js` and `.vue` scripts).
- Use double quotes for strings.
- Favor trailing commas in multi-line objects/arrays where Prettier applies.
- Template indentation aligns attributes on new lines (see existing components).
- Keep lines readable; avoid manual alignment beyond Prettier.

### Vue Single File Components

- Prefer `<script setup>` when a component already uses it.
- If a file uses Options API, keep that style unless refactoring is required.
- Keep `<template>`, `<script>`, and `<style>` blocks in that order.
- Use scoped styles only when necessary; global styles live in App.vue or CSS.
- Use Tailwind utility classes for layout and styling.
- Keep component logic small and focused; extract to child components as needed.

### Tailwind + CSS

- Use Tailwind utility classes for most styling.
- Custom colors are defined in `tailwind.config.js` (e.g., `text-dark`).
- Reuse existing class names when possible (e.g., `image-wrapper`).
- Keep custom CSS minimal; prefer utilities or small helper classes.
- Avoid introducing non-ASCII characters in CSS unless already present.

### Naming Conventions

- Components: PascalCase filenames (e.g., `ProjectCard.vue`).
- Component names: PascalCase in imports and template usage.
- Variables: `camelCase`.
- Constants: `UPPER_SNAKE_CASE` in `src/constants.js`.
- Routes: lowercase path names (existing style).
- CSS classes: use Tailwind utilities; custom classes in kebab-case.

### Types

- This project is JavaScript-only (no TypeScript config).
- Use JSDoc sparingly and only when it clarifies non-obvious logic.
- Avoid adding type tooling unless requested.

### Error Handling

- Most code is UI-focused; keep error handling lightweight.
- For async calls (if added), guard for failures and keep UI resilient.
- Avoid `console.log` in production code; use it only for temporary debugging.

### Router Conventions

- Use lazy-loaded routes for non-home views (current pattern).
- Update document title and canonical URL through router hooks.
- Keep route names and paths consistent with current naming.

### State and Side Effects

- Prefer local component state (Vue refs/reactive).
- Use `useHead` for meta tags when needed.
- Avoid global state unless required; there is no store setup.

### Assets

- Place public assets in the Vite public directory (e.g., `/profile.webp`).
- Import assets via URL if using the `public/` path convention.
- Keep asset paths relative and stable to avoid routing issues.

### Accessibility and UX

- Use semantic HTML in templates (headings, lists, buttons, links).
- Ensure interactive elements are keyboard reachable.
- Provide `alt` text for meaningful images.
- Avoid motion that could be distracting; keep transitions purposeful.

## Linting & Formatting Workflow

- Run `npm run lint` to auto-fix ESLint issues.
- Run `npm run format` before final review if changes touch formatting.
- Use `npm run check-format` in CI-like checks.

## Recommended Agent Workflow

- Read relevant components before editing.
- Make minimal, focused changes that match existing style.
- Keep the visual language consistent with the current design.
- Avoid refactors unless requested.
- When in doubt, mirror existing component patterns.
