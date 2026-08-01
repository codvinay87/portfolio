# Paradise — Portfolio Site

Single-page, static portfolio site for **Paradise**, a full-stack & AI engineering studio. Dark "Terminal" theme with a light "Blueprint" toggle, GSAP scroll animations, and a diff-style (before/after) case study layout.

No build step, no dependencies to install. It's one `index.html` file that loads its fonts and animation library from a CDN.

## Structure

```
index.html                          → the entire site
assets/logo/paradise-logo-mark.svg          → logo, dark background version (use as avatar/favicon source)
assets/logo/paradise-logo-transparent.svg   → logo, transparent version (letterhead, docs)
```

## Branch strategy

- **`dev`** — active branch. Make all edits and content changes here (real client metrics, testimonials, copy tweaks).
- **`prod`** — deployment branch. Only updated by merging from `dev` once changes are reviewed. This is the branch to connect to your host — never edit it directly.

```bash
# working on the site day-to-day
git checkout dev
# ...make changes, commit...
git push origin dev

# once you're happy with what's on dev, ship it
git checkout prod
git merge dev
git push origin prod
```

## Local preview

Just open `index.html` in a browser — or, for a local server:

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

## Deploying `prod`

**Netlify (recommended):**
1. New site from Git → connect this repo
2. Branch to deploy: `prod`
3. Build command: none · Publish directory: `/`
4. Deploy — Netlify auto-redeploys `prod` on every push to it

## Before going live

The case-study metrics and testimonial names in `index.html` are placeholders (`[Client Name]`, sample percentages). Replace them with real data before publishing — a named studio backing fabricated numbers is a credibility risk.
