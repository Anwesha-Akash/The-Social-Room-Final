# The Social Room — Marketing Website

> **"We’re not a content agency. We’re your personal branding partner."**

A production-quality, responsive single-page marketing website built for **The Social Room** — an Instagram-first personal branding agency for founders.

---

## 🌟 Key Features & Highlights

- **Exact 13-Section Architecture**: Built strictly to the assignment wireframe and section sequence.
- **Brand & Colour System Adherence**: 
  - **White (`#FFFFFF`)**: Dominates 85%+ of the page.
  - **Ink (`#1C1A17`)**: High-contrast text, process cards, and footer.
  - **Crimson (`#990000`) & Crimson Dark (`#7A0000`)**: Strategic accents on CTAs, the recommended *Launch* tier, and badges.
  - **Hero Backdrop (`#F3F1EE`)**: Editorial graph-paper pattern.
- **Locked 5-Step Process**: Stepped-card horizontal layout on desktop, responsive vertical stack on mobile.
- **Straightforward Pricing**: 4 clear tiers (*Strategy Sprint*, *Foundation*, *Launch [Recommended]*, *Authority*) with expandable scope details.
- **Interactive Booking Experience**: Functional discovery call modal with tier selection, date/time slot picker, and instant confirmation state.
- **9:16 Instagram Showcase**: Interactive reel cards with modal inspection of narrative hooks and retention strategy.
- **Accessible Accordion FAQ**: 5 key founder objection questions with smooth expand/collapse.
- **Fully Responsive**: Optimized for desktop (1440px+), laptop (1024px), tablet (768px), and mobile (375px/390px).

---

## 🛠️ Tech Stack

- **React 18**: Component-based UI library
- **Vite 5**: Blazing fast dev server and bundler
- **Tailwind CSS 3**: Utility-first CSS configured with custom brand tokens
- **Lucide React**: Clean, accessible vector icons
- **Google Fonts**: *Plus Jakarta Sans* & *Instrument Serif*

---

## 📁 Project Structure

```text
the-social-room/
├── public/
│   └── favicon.svg              # Brand SVG favicon
├── src/
│   ├── assets/                  # On-brand monochrome & desaturated visuals
│   │   └── images/
│   ├── components/
│   │   ├── AnnouncementBar.jsx  # 01 — Top Ink announcement strip
│   │   ├── Navbar.jsx           # 02 — Sticky navigation + Kebab menu
│   │   ├── Hero.jsx             # 03 — Graph-paper backdrop, polaroid & tilted CTA
│   │   ├── Services.jsx         # 04 — What We Do (4 pillars)
│   │   ├── Founders.jsx         # 05 — Founder Intro (Annapurna & Shraddha)
│   │   ├── Clients.jsx          # 06 — Clients / Social Proof
│   │   ├── Process.jsx          # 07 — How It Works (Locked 5-step process)
│   │   ├── Pricing.jsx          # 08 — Straightforward Pricing (4 tiers)
│   │   ├── WhyUs.jsx            # 09 — Why Us ("We already get it")
│   │   ├── BookCall.jsx         # 10 — Full-width Crimson CTA band
│   │   ├── Instagram.jsx        # 11 — On the Gram (5 clickable 9:16 tiles)
│   │   ├── FAQ.jsx              # 12 — Accessible 5-question Accordion
│   │   ├── Footer.jsx           # 13 — Ink-coloured footer + links
│   │   ├── BookingModal.jsx     # Interactive Discovery Call booking modal
│   │   ├── ServiceDetailModal.jsx # Detailed scope inspector
│   │   ├── ReelModal.jsx        # 9:16 Reel viewer & blueprint modal
│   │   └── CareersModal.jsx     # Careers opening & application modal
│   ├── data/
│   │   └── content.js           # Centralized structured content model
│   ├── App.jsx                  # Main application orchestrator
│   ├── main.jsx                 # React DOM root entry
│   └── index.css                # Custom utilities, graph paper, tokens
├── index.html                   # HTML5 template with SEO & OpenGraph meta
├── tailwind.config.js           # Brand colors, typography, keyframes
├── vite.config.js               # Vite config
├── WORKFLOW.md                  # Detailed design decisions & workflow notes
└── package.json
```

---

## 🚀 Getting Started Locally

### Prerequisites
Make sure you have **Node.js** (v18 or higher) installed.

### Installation
```bash
# Clone repository
git clone https://github.com/your-username/the-social-room.git

# Navigate to project directory
cd the-social-room

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
```
The output bundle will be created in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 🚢 Deploying to Vercel

1. Push this repository to GitHub.
2. Log into [Vercel](https://vercel.com).
3. Click **Add New Project** and import this repository.
4. Framework preset will automatically detect **Vite**.
5. Click **Deploy**.

---

## 📄 License
Created for The Social Room frontend internship assignment.
