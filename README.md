# 🧢 The Cap Store — Website

A modern, sporty e-commerce website built with **React + Vite**.

---

## 📁 Project Structure

```
cap-store/
├── index.html                  # HTML entry point
├── vite.config.js              # Vite config
├── package.json
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # Page router + cart state
    ├── components/
    │   ├── Navbar.jsx          # Sticky navigation
    │   └── Footer.jsx          # Site footer
    ├── pages/
    │   ├── Home.jsx            # Landing page
    │   ├── Shop.jsx            # Product grid + filters
    │   ├── About.jsx           # Brand story + values
    │   └── Contact.jsx         # Contact form
    └── styles/
        ├── global.css          # CSS variables, resets, utilities
        ├── Navbar.css          # Navigation styles
        ├── Home.css            # Hero, marquee, features
        ├── Shop.css            # Product grid + cards
        ├── Pages.css           # About + Contact styles
        └── Footer.css          # Footer styles
```

---

## 🚀 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# → http://localhost:5173
```

---

## 🏗️ Build for Production

```bash
npm run build
```
This creates a `dist/` folder ready to deploy.

---

## 🌐 How to Publish (Free Options)

### Option A — Netlify (Recommended, easiest)
1. Go to [netlify.com](https://netlify.com) → Sign up free
2. Click **"Add new site"** → **"Deploy manually"**
3. Drag & drop the `dist/` folder
4. Done! You get a live URL instantly.

### Option B — Vercel
1. Go to [vercel.com](https://vercel.com) → Sign up free
2. Click **"Add New Project"** → import your folder or GitHub repo
3. Framework: **Vite** (auto-detected)
4. Click Deploy

### Option C — GitHub Pages
1. Push code to a GitHub repository
2. Run: `npm run build`
3. Install gh-pages: `npm install -D gh-pages`
4. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
5. Run: `npm run deploy`

---

## 🎨 Customization

| What             | Where                              |
|------------------|------------------------------------|
| Store name/logo  | `src/components/Navbar.jsx`        |
| Colors/fonts     | `src/styles/global.css` (`:root`)  |
| Products         | `src/pages/Shop.jsx` → `ALL_PRODUCTS` |
| Contact info     | `src/pages/Contact.jsx` → `CONTACT_ITEMS` |
| Footer links     | `src/components/Footer.jsx`        |

---

## 🛠 Tech Stack
- **React 18** — UI components
- **Vite** — build tool & dev server
- **CSS Modules** — separate style files per component
- **Google Fonts** — Barlow Condensed (display) + Barlow (body)
