# HireNova Website — Development Task Log

> **Project:** HireNova — An Adaptive, Multi-Modal AI Interview and Candidate Assessment Platform
> **Group:** R26-IT-105 · SLIIT Faculty of Computing
> **Repository:** https://github.com/pasindu-mahesh/hirenova-website.git
> **Author:** pasindu-mahesh

This document records every task completed in the development of the HireNova research website.

---

## 1. Project Overview

| Item | Detail |
|---|---|
| **Purpose** | Research/portfolio website documenting the HireNova thesis project — domain study, research objectives, methodology, milestones, documents, presentations and team. |
| **Type** | Static website (no framework, no build step) |
| **Tech Stack** | HTML5, CSS3 (vanilla), JavaScript (vanilla ES5-style IIFEs) |
| **Fonts** | Inter + JetBrains Mono (Google Fonts) |
| **Dependencies** | None (no package.json / node_modules) |
| **Deployment** | Static file hosting (GitHub Pages style, `main` branch) |

### Repository Structure

```
hirenova-website/
├── assets/
│   ├── logo/        (11 images: page heroes, presentation artwork, docs.png)
│   └── team/        (6 photos: 4 members + supervisor + co-supervisor)
├── css/
│   ├── components.css   (367 lines)
│   ├── responsive.css   (314 lines)
│   └── style.css        (3,318 lines)
├── js/
│   ├── contact.js       (114 lines)
│   ├── documents.js     (33 lines)
│   ├── main.js          (165 lines)
│   ├── milestones.js    (58 lines)
│   └── slides.js        (25 lines)
├── index.html        (Home)
├── domain.html       (Research domain)
├── milestones.html   (Assessment milestones)
├── documents.html    (Document tracker)
├── slides.html       (Presentation slides)
├── about.html        (Team & supervisors)
└── contact.html      (Contact form)
```

---

## 2. Completed Development Tasks

### Phase 1 — Project Foundation

- [x] **T01. Project initialization** — Set up git repository and initial commit structure for the HireNova website.
- [x] **T02. Information architecture planning** — Defined 7-page site structure: Home, Domain, Milestones, Documents, Slides, About Us, Contact Us.
- [x] **T03. Global page shell design** — Created identical header (brand + 7-item nav + search button + mobile hamburger) and footer (brand, quick links, project info, contact) shared across all pages.
- [x] **T04. Design system definition** — Built "Botanical Green" theme in `:root` custom properties: primary `#16a765`, primary-dark `#087443`, full navy/slate scale, gradients (`--gradient-botanical`, `--gradient-forest`), radius, shadow, spacing and typography tokens.
- [x] **T05. Typography setup** — Integrated Google Fonts (Inter 400–800 for body, JetBrains Mono 400–600 for labels/code) with defined font-scale tokens (`--fs-xs` … `--fs-xl`).

### Phase 2 — Stylesheet Architecture

- [x] **T06. `style.css` authored (3,318 lines)** — Design system plus page-specific styles organized into 41 banner-commented sections: Site Header, Hero, Subnav, Overview, Pipeline, Milestones Page, Team, Footer, Slides Page, About Page, Contact Page, Documents Page, Domain Page, Modal, Accessibility.
- [x] **T07. `components.css` authored (367 lines)** — Reusable primitives: buttons (`.btn--primary/outline/ghost/sm/block`), badges/status pills, cards, tables, forms, selectors, timeline, filters, modals, grids, containers, `.sr-only`.
- [x] **T08. `responsive.css` authored (314 lines)** — Breakpoints at 1200/1100/1024/980/880/768/580/480/400px, mobile nav collapse, grid stacking, and `prefers-reduced-motion` support.
- [x] **T09. Accessibility layer** — Skip links, focus rings (`--focus-ring`), ARIA attributes (`aria-current`, `aria-expanded`, `role="dialog"/"listbox"`), keyboard navigation, reduced-motion support.

### Phase 3 — Page Development

- [x] **T10. Home page (`index.html`, 506 lines)**
  - Hero with eyebrow `R26-IT-105 · SLIIT FACULTY OF COMPUTING` and CTA buttons
  - Sticky "ON THIS PAGE" subnav with scrollspy
  - Overview section: problem/solution cards + 3 stat cards (250 apps / 46% fail / $15K bad hire)
  - "How it works" pipeline diagram: Candidate application → 01 CV & Skill Graph → 02 Adaptive Interview → 03 Speech Analysis → 04 Visual Behaviour
  - 4 interactive component cards with modal popups
  - "Where we are" progress bars (95% each, Progress Presentation 1)
  - Meet the team avatar grid (6 members)

- [x] **T11. Domain page (`domain.html`, 519 lines)**
  - Sticky section sidebar for 6 research sections
  - Literature survey with comparison table (HireVue, Pymetrics, Modern Hire) and 4 arXiv references (GraphSAGE 1706.02216, wav2vec 2.0 2006.11477, Sentence-BERT 1908.10084, Multimodal ML survey 1705.09406)
  - Research gap, research problem (4 cards), research objectives (4 + metric pills)
  - Methodology: 4-node diagram + 4 module columns
  - Technologies used: 4 category groups of tech pills (Speech/ML, CV/Vision, LLM, Backend/Infra)

- [x] **T12. Milestones page (`milestones.html`, 326 lines)**
  - Custom assessment selector dropdown (8 options: Proposal, Proposal Presentation, Progress Presentation 1/2, Checklist, Website, Research Paper, Final Report)
  - Detail panels with date, marks, assessment type, format and SharePoint links
  - 13-item assessment timeline strip

- [x] **T13. Documents page (`documents.html`, 462 lines)**
  - Filterable tracker (All / Submitted / Active Folder)
  - 7 document groups: Project Charter, Proposal Documents, Progress Presentations, Checklist, Final Documents (Thesis), Research Paper, Other
  - Per-member rows (IT22039844, IT22106532, IT22116888, IT22259450) with Open + Download SharePoint links

- [x] **T14. Slides page (`slides.html`, 189 lines)**
  - 4 presentation cards: Proposal (28 Mar 2026), Progress P1 (11 May 2026), Progress P2 (20 Aug 2026), Final (19 Oct 2026 — disabled/coming soon)
  - Card click opens SharePoint deck in new tab

- [x] **T15. About page (`about.html`, 218 lines)**
  - Group summary + SLIIT institution block
  - 2 supervisor cards (Supervisor + Co-Supervisor with photos)
  - 4 research member cards: student IDs, role numbers, component ownership, emails

- [x] **T16. Contact page (`contact.html`, 218 lines)**
  - Contact sidebar: phone, leader email, supervisor email, location, project details
  - Contact form with live email-template builder

### Phase 4 — JavaScript Functionality

- [x] **T17. `main.js` (165 lines)** — Mobile nav toggle, subnav scrollspy (`initSubnavScrollSpy`), back-to-top button, dynamic copyright year (`[data-year]`), modal system (open/close via `data-modal-open`/`data-modal-close`, Esc key, focus return), injected site-search overlay.
- [x] **T18. `contact.js` (114 lines)** — Client-side form validation (required fields + email regex), live Gmail compose URL builder (`mail.google.com/mail/?view=cm&fs=1&to=...`), clipboard template copy.
- [x] **T19. `documents.js` (33 lines)** — `data-filter`/`data-status` document filtering with automatic empty-group hiding.
- [x] **T20. `milestones.js` (58 lines)** — Custom select dropdown behaviour, assessment panel switching, outside-click close.
- [x] **T21. `slides.js` (25 lines)** — Slide card click → `window.open(data-href)`.

### Phase 5 — Assets & Content

- [x] **T22. Team assets** — Added 6 photos: 4 members (pasindu.png, malshi.jpeg, niveja.jpeg, sapun.jpeg), Superviser.jpg, co-superviser.jpg.
- [x] **T23. Page artwork** — Added 11 logo/hero images (Hero-Sec, about us, contact us, docs, documents, milestones, Slides, three progress-presentation workspace images).
- [x] **T24. Content authoring** — Wrote all research copy: problem statements, literature survey, 4 objectives, methodology description, technology lists, milestone details, member bios.

### Phase 6 — Fixes & Optimization (post-launch commits)

- [x] **T25.** `999f0f1` — Corrected spelling "résumés" → "resumes" in `domain.html`; removed obsolete **NeuroShell** branding (deleted `assets/logo/NeuroShell_logo.png`, 1.31 MB) after project rebrand to HireNova.
- [x] **T26.** `86246d5` — Corrected "résumés" → "resumes" in `index.html` (14 lines); optimized `Hero-Sec.png` from **1,563,114 → 561,668 bytes** (64% reduction).
- [x] **T27.** `16b4436` — Replaced/optimized `assets/logo/docs.png` from **1,014,284 → 451,954 bytes** (55% reduction).

---

## 3. Git Commit History

| Commit | Date | Description |
|---|---|---|
| `19458be` | 2026-10-11 | **first commit** — entire site (33 files, 7,794 insertions) |
| `999f0f1` | 2026-10-11 | fix: spelling "résumés" → "resumes" in domain.html + remove NeuroShell logo |
| `86246d5` | 2026-10-11 | fix: spelling in index.html + optimize Hero-Sec.png |
| `16b4436` | 2026-10-11 | fix: update logo image assets/logo/docs.png |

> **Note:** The site was delivered as a single bulk initial commit followed by three cleanup commits; historical task breakdown above is reconstructed from the delivered artifacts.

---

## 4. Key Technical Decisions

1. **Static HTML over a framework** — No React/Next/Vite; hand-written HTML/CSS/JS for zero build complexity and direct static hosting.
2. **No dependencies** — No package.json, no CDN libraries (only Google Fonts); everything hand-rolled.
3. **Three-file CSS architecture** — System (`style.css`) + primitives (`components.css`) + breakpoints (`responsive.css`), loaded in that order.
4. **Data-attribute-driven JS** — All interactivity hooks via `data-*` attributes (`data-modal-open`, `data-filter`, `data-href`, `data-year`), keeping JS decoupled from markup.
5. **Gmail compose for contact** — No backend; the contact form builds a Gmail compose URL client-side instead of posting to a server.
6. **SharePoint as document store** — All slide decks and reports live on SLIIT SharePoint; the site links out rather than hosting files.

---

## 5. Outstanding / TODO Items

| # | Item | Location |
|---|---|---|
| 1 | **3 placeholder modals** — CV & Skill Graph, Visual Behaviour, Speech Confidence descriptions not yet written (only Adaptive AI Interview is complete) | `index.html` L491, L514, L537 |
| 2 | **6 × `[XX]%` marks placeholders** — Marks allocated still unfilled for Proposal, Proposal Presentation, Progress P1, Progress P2, Checklist, Final Report | `milestones.html` L106, L142, L171, L191, L226, L246 |
| 3 | **Final Presentation slide "Coming soon"** — card disabled, no SharePoint href yet | `slides.html` L137 |
| 4 | **Empty hero right column** — decorative SVG circuit traces commented out; right-side visual missing | `index.html` L60–78, L94 |
| 5 | **No README.md** — repo lacks a README (a README.MD exists only as a SharePoint submission artifact) | repo root |
| 6 | **No .gitignore** | repo root |
| 7 | **No deployment config** — no CNAME, vercel.json, netlify.toml, or GitHub Actions | repo root |
| 8 | **No tests / CI** | repo root |
| 9 | **Minor inconsistency** — `about.html` footer markup and `documents.html` back-to-top button differ slightly from other pages | `about.html`, `documents.html` |

---

## 6. Summary Statistics

| Metric | Value |
|---|---|
| Pages | 7 |
| CSS files / lines | 3 files · ~4,000 lines |
| JS files / lines | 5 files · ~395 lines |
| Images | 17 (11 logo + 6 team) |
| External integrations | Google Fonts, SharePoint, Gmail, arXiv |
| Backend / DB / Auth | None (static site) |
| Completed tasks | 27 |
| Outstanding items | 9 |
