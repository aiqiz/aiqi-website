# ZAQ Website (Light, 3-color, MDX project pages)

**What you get**
- Light mode only, with exactly **3 theme colors** (bg, fg, card). Edit in `styles/globals.css`.
- Homepage with your **photo** — just replace `public/me.jpg` with any image.
- **Research list** with **search** and per-item color tone (optional).
- **Individual project pages** written in **MDX**: attach figures, links, math text, etc.
- Minimal dependencies (Next.js + Tailwind + Framer Motion + MDX).

## Quick start
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Customize colors (3 only)
Edit `styles/globals.css`:
```css
:root {
  --bg: #f7f7f8;   /* light grey */
  --fg: #0f172a;   /* text */
  --card: #e5e7eb; /* card surface */
}
```
Per card override (optional): set `tone` hex in `lib/projects.ts`.

## Your portrait
Replace `public/me.jpg` with your photo (any filename is fine if you update the path in `app/page.tsx`).

## Research pages
- List lives in `lib/projects.ts` (add new entries with a unique `slug`).
- Create a page at `app/projects/<slug>/page.mdx`.
- Put images in `public/figures/` and reference them like `/figures/yourfile.jpg`.
- External links work with standard Markdown/HTML inside MDX.

## Notes
- If MDX changes don’t hot-reload, restart `npm run dev`.
- You can later add analytics, a blog, or auth without changing structure.
