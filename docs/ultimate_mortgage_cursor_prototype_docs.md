# UltimateMortgage.com — Prototype Documentation (/docs)

This directory contains structured specifications for Cursor to guide the design and development of the Ultimate Mortgage website prototype. Each file provides detailed requirements for design system, components, and page templates.

---

## 1. `/docs/design-system.md`
### Purpose
Define tokens, components, accessibility, and imagery rules for the redesign.

### Brand Foundations
- **Colors:**
  - Red `#C60904` (primary)
  - Black `#000000`
  - White `#FFFFFF`
  - Blue `#3982BB` (secondary CTAs)
  - Yellow `#FFC931` (highlights)
  - Neutrals: `#BADCF1`, `#E1E4DD`
- **Typography:**
  - Arboria for headlines
  - Montserrat for body
  - Filmotype Lucky (limited accent use)
- **Spacing & Layout:**
  - Desktop grid: 12 cols, 80/24/80 margins, 24 gutter
  - Mobile grid: 8 cols, 16 margins, 12 gutter
  - Radii: 24–32px; Shadows: soft, low blur

### Components
- Buttons (Primary Red, Secondary Blue, Tertiary link) with states
- Inputs (Text, Select, Slider) with focus/error states
- Cards (Plain, Header, Media)
- Calculator Card (MortgageMate embed placeholder)
- Rate Cards (BankingBridge stub)
- Modal (960×680) + Mobile bottom sheet (80% height)
- Credibility Strip (reviews/logos)
- Footer compliance block

### Imagery
- Use candid, authentic stock (Unsplash set provided)
- Hero crops: 16:9 or 21:9; Inline: 3:2 or 4:3
- Always provide alt text; export WebP with `srcset`

### Accessibility
- Contrast ≥ 4.5:1
- Keyboard/focus states
- Alt text rules

---

## 2. `/docs/homepage.md`
### Purpose
Primary entry point for consumer-direct traffic, credibility, and conversion.

### Content Model
1. Hero: H1 headline, subhead, 2 CTAs (Get my payment, Talk to a loan expert)
2. Rate Proof Row: BankingBridge Rate Cards (3–6 scenarios) + Assumptions link
3. Payment Preview: Calculator Card → MortgageMate Payment modal
4. Value Props: 3–4 cards (Transparent pricing, Fast approvals, Close with confidence)
5. Reviews/Logos credibility band
6. Guide Download CTA (eBook lead magnet)
7. Footer: NMLS, Equal Housing, disclosures

### Functional Notes
- Sticky CTAs on mobile
- Skeleton loaders for calc/rate embeds
- Analytics markers: hero_cta, calc_opened, rate_shown, guide_download

---

## 3. `/docs/branch-page.md`
### Purpose
Local presence and lead capture for branches.

### Content Model
- Hero: Branch name + city/state; local photo
- H1: “Your hometown mortgage lender in [City, State]”
- CTAs: Get my payment • Talk to a loan expert • Visit our office
- LO Carousel: cards with photo, name, NMLS, quick CTAs
- Map module: address, hours, phone, map embed
- Reviews Band: localized reviews (Google/Zillow)
- Footer: Branch licensing, NMLS

### Functional Notes
- Map interactive placeholder
- LO carousel pulls from LO template
- Reviews rotate as 3 chips

### Compliance
- Branch NMLS and state disclosures required

---

## 4. `/docs/loan-officer-page.md`
### Purpose
Personalized LO credibility and lead capture.

### Content Model
- Hero: LO photo, name, title, NMLS, location
- CTAs: Get my payment • Talk to me • See my rates
- Rate Widget: BankingBridge Table with LO attribution
- Calculator Card: MortgageMate Payment
- Reviews: ratings, testimonials
- Bio & specialties (chips: FHA, VA, DSCR)
- Resources: 3 blog/resource cards
- Contact: Schedule, call, text, chat

### Functional Notes
- Provide 2–3 LO template variants
- Retain corporate nav/header
- Reviews carousel or feed

### Compliance
- LO NMLS visible; Equal Housing logo

---

## 5. `/docs/loan-program-page.md`
### Purpose
Educate on loan programs, capture leads, improve SEO.

### Content Model
- Hero: Program name (e.g., VA Single Close Construction Loan)
- CTAs: Get my payment • See my rate • Talk to a loan expert
- Program Benefits: 3–4 cards
- Eligibility Checklist
- Calculator: contextual (Payment, Refi, HELOC, DSCR)
- Rate Block: BankingBridge defaults by program
- FAQs: 4–6 expandable
- Compliance: program-specific disclaimers

### Functional Notes
- Rate Table pre-configured for program
- Calculator contextual to loan type

---

## 6. `/docs/blog-post.md`
### Purpose
Drive SEO, educate, convert readers to leads.

### Content Model
- Hero: Article title, byline, date, read time
- Body: Montserrat 16–18px; clean readable layout
- Inline CTAs: sidebar (desktop), inline (mobile)
- Related Calculator Module (contextual)
- Author attribution option: LO photo + bio
- Related Articles grid: 3–4 cards
- Footer: disclaimers, Equal Housing

### Functional Notes
- Inline calculators as stubs
- Related articles pulled by tag

### Compliance
- Standard disclaimers in footer
- LO-authored posts show NMLS attribution

---

**End of Prototype Documentation**

