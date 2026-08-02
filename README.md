# Paradise — Portfolio Site

Single-page, static portfolio site for **Paradise**, a full-stack & AI engineering studio. Dark "Terminal" theme with a light "Blueprint" toggle, GSAP scroll animations, and a diff-style (before/after) case study layout.

No build step, no dependencies to install. It's one `index.html` file that loads its fonts and animation library from a CDN.

## Structure

```
index.html                          → page shell, styles, and rendering logic
content.json                        → every piece of copy on the site — edit this, not index.html
assets/logo/paradise-logo-mark.svg          → logo, dark background version (use as avatar/favicon source)
assets/logo/paradise-logo-transparent.svg   → logo, transparent version (letterhead, docs)
```

## Editing content

Everything visible on the page — hero copy, About text, case studies, tech stack, testimonials, pricing steps, and contact channels — lives in `content.json`. `index.html` fetches it on load and renders the page from it, so day-to-day changes never touch code.

To add a new case study, copy an existing object inside the `caseStudies` array and edit the fields — the before/after slider and metric counters are generated automatically for however many entries are in the array. Same for `testimonials` and `techStack`.

## Setting up "Book my free diagnosis"

The contact modal offers three channels. Each one is off by default (showing a friendly fallback pointing to your email) until you fill in its field in `content.json`:

**WhatsApp** — `contact.whatsapp.number`
Your number in international format, digits only (e.g. `919812345678`). Get your number from WhatsApp → Settings.

**Send a note (form → your email)** — `contact.form.endpoint`
1. Go to [formspree.io](https://formspree.io), sign up free, create a new form
2. Verify the destination email Formspree sends to
3. Copy the endpoint it gives you (`https://formspree.io/f/xxxxxxx`) into `contact.form.endpoint`
(Free tier covers 50 submissions/month — plenty for a portfolio.)

**Book a call (Calendly + Google Meet)** — `contact.calendly.url`
1. Create a free account at [calendly.com](https://calendly.com), create an event type (e.g. "15-Min Diagnosis Call")
2. In that event type's **Location** setting, choose **Google Meet** — Calendly then generates and emails a Meet link automatically for every booking, no extra setup
3. Copy the event's scheduling link into `contact.calendly.url`

Also set `contact.email` to your real address — it's used in the footer and as the fallback shown for any channel you haven't connected yet.

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
