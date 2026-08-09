# Paradise Portfolio — Handoff Context

This is a context-transfer doc, not part of the site. Read this first, then act on the instructions below in the local repo at:

`/Users/vinaysinghania/Downloads/paradise-portfolio`

## What this project is

A single-page freelance developer portfolio for a personal brand called **Paradise** (full-stack + AI engineering services, marketed on Upwork/Fiverr/direct). Two toggleable themes, GSAP scroll animations, PSR-framework case studies with before/after sliders, and a contact modal offering three channels (Calendly call, email form, WhatsApp).

## Current repo / deployment state

- **GitHub remote:** `https://github.com/codvinay87/portfolio.git`
- **Branches:** `dev` (active development — commit and push here) and `prod` (deployment only — Netlify is configured to deploy from this branch; **do not merge dev → prod unless the user explicitly asks for it**, they ship deliberately)
- **Netlify:** already connected to this repo, production branch set to `prod`, no build command, publish directory `/`
- **Commit author convention used so far:** `codvinay87 <vinay11gemini@gmail.com>`

## Files in this handoff package

```
index.html      → REPLACES the existing file. Now fetches content.json at runtime and
                   renders the whole page from it (hero, about, case studies, tech stack,
                   testimonials, pricing steps, footer all data-driven).
content.json    → NEW file. Every piece of site copy lives here now — edit this, not
                   index.html, for routine content changes.
README.md       → Updated: explains content.json, and step-by-step setup for the three
                   contact channels.
assets/logo/    → Paradise logomark (dark + transparent SVG variants), unchanged.
```

## What needs to happen right now

1. Copy `index.html`, `content.json`, and `README.md` from this package into the local repo folder, overwriting the existing versions.
2. `git checkout dev`
3. `git add index.html content.json README.md`
4. `git commit -m "Make site data-driven via content.json; add working contact modal (WhatsApp, form, Calendly)"`
5. `git push origin dev`
6. Leave `prod` untouched.

## content.json — placeholders still needing real values

These currently contain placeholder strings and should be replaced with the user's real info before the contact channels go live (each one degrades gracefully with a "not connected yet, email me" fallback until filled in):

| Field | Needs |
|---|---|
| `contact.email` | Real email address |
| `contact.whatsapp.number` | Phone number, digits only, country code first (e.g. `919812345678`) |
| `contact.form.endpoint` | A Formspree (or Web3Forms) form endpoint — free signup required |
| `contact.calendly.url` | A Calendly event scheduling link — event's Location must be set to **Google Meet** so it auto-generates a Meet link per booking |

Also still placeholders, cosmetic but should be real before publishing:
- `testimonials[].name/role/company` — currently `[Client Name]` etc.
- `caseStudies[].metrics` — currently illustrative sample numbers, not real project data

## How the contact modal works (for context if debugging/extending)

- Any element with class `js-open-contact` opens the modal (`#contactModal`)
- Three tabs, switched via `.tab-btn` / `.tab-panel[data-panel]`: `call` (lazy-loads the Calendly inline widget script on first open), `form` (POSTs `FormData` to the Formspree endpoint via `fetch`, shows inline success/error), `whatsapp` (builds a `wa.me` link from the textarea content)
- Each tab checks its `content.json` field for the string `"REPLACE_WITH"` and swaps in a fallback message if still unset — search `initModal()` in the inline `<script>` block

## Design system reference (if extending the site)

- **Themes:** `[data-theme="terminal"]` (dark neon, default) and `[data-theme="blueprint"]` (light brutalist), toggled by the button top-right. All colors are CSS custom properties defined at the top of the `<style>` block — extend by adding to both theme blocks.
- **Fonts:** Space Grotesk (headlines/display), IBM Plex Sans (body), IBM Plex Mono (labels, stats, terminal text)
- **Signature visual language:** a git-diff metaphor used throughout — red `−` for problems, green `+` for results, violet `→` for the solution/approach step. Keep this consistent in any new case studies or content sections.
- **Logo concept:** gateway arch (stability) + checkmark (verified) + dotted seal ring (certified), cyan→violet gradient. Source SVGs in `assets/logo/`.
- **Animation stack:** GSAP + ScrollTrigger (CDN, cdnjs) for scroll reveals; vanilla JS for the custom cursor, particle-network hero canvas, before/after slider, and metric count-up.

## Local preview note

Because `index.html` fetches `content.json` at runtime, it must be served over http(s) — opening it directly as a `file://` URL will fail in most browsers (blocked local fetch). Use:

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

This isn't an issue once deployed — Netlify serves everything over HTTPS.
