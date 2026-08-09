# Paradise — Portfolio Site

Single-page, static portfolio site for **Paradise**, a full-stack & AI engineering studio. Features dark "Terminal" theme with a light "Blueprint" toggle, GSAP scroll animations, diff-style before/after case study sliders, and a 3-channel contact modal.

No build step or npm dependencies required. Everything runs natively in the browser powered by `config.js`.

---

## 🚀 Quick Start: How to Run & Test Locally First

You can test the site locally in 3 simple ways before deploying:

### Option 1: Direct File Opening (Fastest — Zero Setup)
Double-click `index.html` or drag it into any browser (Chrome, Safari, Firefox, Edge).
Because all data is loaded synchronously via `config.js`, the site loads immediately with no CORS errors or server setup required.

### Option 2: Python HTTP Server (Recommended for realistic local testing)
Run this command in the project root directory:

```bash
python3 -m http.server 8000
```
Then open your browser and navigate to:
👉 **`http://localhost:8000`**

### Option 3: Node / npx (If you use Node.js)
```bash
npx serve .
```
Then open the localhost URL printed in your terminal (usually `http://localhost:3000`).

---

## 🧪 Local Testing Checklist (What to test)

Use this step-by-step checklist to test all features on your local machine:

1. **Header & Theme Toggle**
   - Click the **TERMINAL / BLUEPRINT** toggle button at the top-right.
   - Verify that the colors smoothly switch between dark neon and light brutalist themes.

2. **Hero & Particle Canvas**
   - Verify hero text and headline render from `config.js`.
   - Check that the subtle dot-and-line background canvas moves smoothly behind the text.

3. **Scroll Revealer & Metric Counters**
   - Scroll down to the **About** and **Case Studies** sections.
   - Observe elements sliding up into view and numbers counting up to their target values.

4. **Before / After Comparison Sliders**
   - In the **Case Studies** section, drag the center handle (`⇔`) left and right.
   - Verify the `clip-path` split updates seamlessly to reveal Before vs After designs.

5. **Contact Modal ("Book Free Diagnosis")**
   - Click **Book a free diagnosis** or **Book my free diagnosis** to open the modal popup.
   - Test all 3 tabs:
     - 📅 **Book a call (Calendly)**: Checks `contact.calendly.url`. Displays your Calendly booking widget if set, or a fallback notice if still default.
     - ✉️ **Send a note (Contact Form)**: Enter test name, email, project type, message, and submit. On Netlify it sends to your dashboard; locally it confirms submission.
     - 💬 **WhatsApp**: Type a message into the text area. Click **Open WhatsApp →** to verify it generates the proper `https://wa.me/` link.

---

## 📁 File Structure

```
index.html                          → Page HTML layout, CSS design system, & component logic
config.js                           → Central site data (edit this to update copy, projects, & links!)
content.json                        → Backup JSON data file
assets/logo/paradise-logo-mark.svg  → Paradise SVG logomark
assets/logo/paradise-logo-transparent.svg → Transparent SVG logomark variant
```

---

## ⚙️ Customizing Site Content (`config.js`)

All copy and settings are stored in `config.js`. Open `config.js` in any text editor to update your details:

```javascript
window.PORTFOLIO_CONFIG = {
  brand: { name: "Paradise", tagline: "verified builds" },
  hero: { headlinePrefix: "Stop losing money on ", headlineAccent: "code that doesn't work." },
  contact: {
    email: "your-real-email@domain.com",
    whatsapp: { number: "919876543210" },
    calendly: { url: "https://calendly.com/your-username/15min" }
  }
  // ... edit case studies, tech stack, testimonials, and process
};
```

---

## ☁️ Deploying to Netlify (100% Serverless)

This portfolio is built to run on Netlify with zero backend servers needed:

1. Push your repository to GitHub (`dev` branch).
2. Connect your repo in Netlify (`https://app.netlify.app`).
3. Build Settings:
   - **Build command**: *(Leave blank)*
   - **Publish directory**: `/`
4. Forms will automatically be captured by **Netlify Forms** with zero backend configuration required.

### Deployment Commands:

```bash
# Save your local changes to dev
git add .
git commit -m "Update portfolio config and content"
git push origin dev

# Deploy to production (prod branch)
git checkout prod
git merge dev
git push origin prod
git checkout dev
```
