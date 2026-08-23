# Archive

Retired during the Aug 2026 redesign. Nothing here is routed or compiled —
`tsconfig.json` excludes this directory and Tailwind does not scan it.
Everything is still in git history on `main` and `framework-upgrade`.

- `projects/*` — detail pages for the six items that became line entries on /work
- `pages/*` — the old /research and /projects index pages (both now redirect to /work)
- `components/*` — the card components those index pages used
- `slug-layouts/*` — `[slug]` layouts that never rendered (static sibling routes always won)

To bring one back: move the folder to `app/projects/<slug>/`, add a "Read more"
link in `lib/projects.ts`, and drop the matching redirect from `next.config.mjs`.
