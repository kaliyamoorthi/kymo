# Vishesh Jha — Portfolio  
**A portfolio that refuses to whisper.**

Welcome.  
This isn’t just another “Hi, I’m a developer” page - it’s a deliberately loud, opinionated, high-contrast digital space built to *feel* like the person behind it.

This portfolio was designed to make one thing very clear, very fast:

> **I build things with intent.**

---

## 🚀 The Why (Before the What)

Most portfolios try to be *safe*.  
This one chose to be **memorable**.

The goal was simple:
- Communicate identity in seconds
- Show technical depth without noise
- Feel confident without being arrogant
- Guide a recruiter or client through a story — not a dump of sections

Every scroll, hover, border, and animation exists to support that mission.

---

## 🌐 Live Experience

👉 **Visit the portfolio:**  
https://visheshjha.me/

---

## 🧭 The Journey (How a Visitor Moves)

1. **Hero** – Immediate clarity: who I am, what I do  
2. **About** – Context without fluff  
3. **Skills** – Proof of capability, not buzzwords  
4. **Experience & Stats** – Trust-building  
5. **Projects** – Real work, real outcomes  
6. **Reviews** – Social proof  
7. **Contact** – Clear, direct conversion  

No dead ends. No guessing. No hunting for a CTA.

---

## ✨ Features That Matter

- Fully responsive single-page layout
- Neo-brutalist inspired UI with bold visual identity
- Custom animated cursor and scroll progress indicator
- Reveal-on-scroll section transitions
- Interactive marquee and hover micro-interactions
- Contact form powered by Web3Forms
- SEO metadata, Open Graph, Twitter cards, and JSON-LD
- Vercel Analytics integration

Everything is intentional. Nothing is accidental.

---

## 🛠 Tech Stack

- **Framework:** React 18  
- **Build Tool:** Vite 5  
- **Styling:** Tailwind CSS (CDN config) + custom global CSS  
- **Icons:** Remix Icon  
- **Analytics:** `@vercel/analytics`  
- **Forms:** Web3Forms API  

---

## 🗂 Project Structure

```text
Portfolio/
├── index.html
├── package.json
├── vite.config.js
├── public/
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── components/
    │   ├── Hero.jsx
    │   ├── About.jsx
    │   ├── Skills.jsx
    │   ├── Experience.jsx
    │   ├── CodingStats.jsx
    │   ├── Projects.jsx
    │   ├── Reviews.jsx
    │   ├── Contact.jsx
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── Cursor.jsx
    │   ├── ProgressBar.jsx
    │   └── Marquee.jsx
    ├── hooks/
    │   ├── useCursor.js
    │   ├── useScrollProgress.js
    │   └── useScrollReveal.js
    ├── services/
    │   └── web3forms.js
    └── styles/
        └── global.css
```
## 🎨 Design Approach

### 1) Visual Direction

The interface uses a **neo-brutalist inspired** style: heavy borders, hard shadows, strong contrast, and oversized typography. This creates a memorable first impression and aligns with a confident personal brand.

Minimalism fades into the background.  
This design steps forward.

---

### 2) Color System

The palette is defined in the Tailwind configuration inside `index.html` with custom tokens such as:

- `neo-yellow`
- `neo-pink`
- `neo-blue`
- `neo-green`
- `neo-orange`
- `neo-red`
- `neo-white`
- `neo-black`

This ensures a consistent visual language across all sections while keeping highlights intentional and high-energy.

---

### 3) Typography

- **Display:** Space Grotesk — bold, modern headings  
- **Mono:** JetBrains Mono — technical accents and labels  

This pairing balances personality (display type) with developer credibility (mono text).

---

### 4) Motion & Interaction

Interaction design prioritizes feedback and flow:

- Custom cursor for distinct identity  
- Scroll progress for orientation in long single-page navigation  
- Reveal animations for content pacing  
- Hover transforms and glitch effects for playful micro-interactions  

Animations are lightweight and purposeful, supporting attention without overwhelming readability.

---

### 5) Layout & UX Rationale

- Linear section order mirrors a recruiter/client reading journey  
- Clear top navigation with anchor links for fast jumps  
- Large hero statement to communicate role immediately  
- CTA placement in the hero + dedicated contact section for conversion  
- Responsive structure to preserve hierarchy on mobile and desktop  

Every section earns its place.

## License

This project is for personal portfolio use. Project is open for inspiration, learning, and exploration.
Feel free to fork it, study it, and build your own version.
