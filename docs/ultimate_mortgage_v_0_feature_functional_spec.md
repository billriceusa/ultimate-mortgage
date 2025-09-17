# Ultimate Mortgage — v0 Feature & Functional Specification

This specification defines the features and functional requirements for the initial **v0 prototype** of the Ultimate Mortgage website redesign. It consolidates discovery call notes, brand guidelines, and design system work into actionable guidance for prototype development.

---

## 1. Purpose & Goals
- Deliver a **mobile-first, credibility-heavy, conversion-forward** mortgage site.  
- Support **consumer direct**, **retail/LO recruiting**, and **branch presence** in a unified platform.  
- Establish clear differentiation from Rocket/Rate by emphasizing **simplicity, speed, and humanity**.  
- Guide v0 to produce **clickable prototypes** with annotated flows, components, and compliance stubs.

---

## 2. Core Non-Negotiable Features
From discovery with leadership【170†source】【171†source】:
- **Apply Now** button (persistent, sitewide).  
- **Free Rate Quote** feature (BankingBridge embed).  
- **Mortgage Payment Calculator** (MortgageMate embed or custom).  
- **Loan Officer landing pages** (dynamic, not static).  
- **Branch pages** (local presence, maps, reviews).  
- **Reviews & credibility markers** (Google, Zillow, Trustpilot, press logos).  
- **Video support** (homepage hero or LO/recruiting).  
- **Downloadable guides/eBooks** (lead capture).  
- **Modern tech-forward aesthetic** (mobile-first, app-like).  
- **24/7 contact** with chat/overflow integration.  

---

## 3. User Flows (v0 Prototypes)

### A) Homepage (Consumer-Direct)
- **Hero:** H1, subhead, primary CTAs (Get my payment / Talk to a loan expert).  
- **Rate Proof Row:** BankingBridge Rate Cards (3–6 scenarios) with Assumptions link.  
- **Calculator Preview:** MortgageMate Payment tile → modal expansion.  
- **Value Props:** 3–4 cards (e.g., Transparent pricing, Fast approvals, Close with confidence).  
- **Credibility Strip:** Reviews + press logos.  
- **Guide Download CTA:** eBook lead magnet.  
- **Footer:** NMLS, Equal Housing, compliance disclosures.

### B) Guided Pathways Flow (VT3)
- Entry: 3 big choices (Buy / Lower My Payment / Tap My Equity).  
- Stepper (Zip → Price/Balance → Down%/Equity → Credit Band → Contact).  
- End: BankingBridge Rate Table personalized.  
- Side Drawer: Toggle MortgageMate Payment/Refi calc.  
- Compliance footnote under outputs.

### C) Loan Officer Pages
- Hero: Photo, name, NMLS, location, CTAs (Payment / Talk to me / See my rates).  
- Embedded Rate Widget (BankingBridge, LO attribution).  
- Calculator (MortgageMate Payment).  
- Reviews, Bio, Specialties.  
- Resources: curated blog posts.  
- Contact: call/text/chat + schedule.  

### D) Branch Pages
- Hero: Branch name, city/state, local photography.  
- LO Carousel with profiles.  
- Map module (address, hours, phone).  
- Reviews band (localized).  
- Compliance footer with branch-specific licensing.

### E) Loan Program Pages
- Hero: Program name (e.g., VA Single Close Construction Loan).  
- Benefits row (3–4).  
- Eligibility checklist.  
- Contextual calculator (Payment, HELOC, DSCR, etc.).  
- Rate Table (BankingBridge defaults for program).  
- FAQs.  
- Compliance section.

### F) Blog Posts
- Hero: Article title, byline, date.  
- Body: readable typography, inline CTAs.  
- Mid-article Calculator module (contextual).  
- Author attribution (optional LO).  
- Related Articles grid.  
- Footer with disclaimers.

---

## 4. Design System Alignment
- Use **VT1 Credibility-First Minimalism** as the base system (see Design System v0 doc).  
- **Colors:** Core red/black/white with blue/yellow accents【169†source】.  
- **Typography:** Arboria (H), Montserrat (Body), Filmotype Lucky (accent)【169†source】.  
- **Imagery:** Authentic, candid Unsplash set (provided), cropped for airy layouts【169†source】.  
- **Components:** Buttons, Inputs, Cards, Modals, Calculator Card, Rate Cards, Credibility Strip, Footer Compliance.  

---

## 5. Integrations & Stubs
- **MortgageMate Calculators:** embed as iframes, skeleton loader, validate origin. Use Payment + Affordability in v0; DSCR, HELOC for later.  
- **BankingBridge:** Rate Cards (homepage), Rate Table (Guided Pathways, LO, Program pages). Support assumptions/APR text. Stub lead capture gate.  
- **CRM/LOS:** Real Q + Arrive integration to be noted, not built in v0【170†source】.  
- **Chat/Voice:** 59 Dialer chatbot stub with annotation for overflow to LO/call center【171†source】.

---

## 6. Interaction & Motion
- Animations: 150–250ms ease-out.  
- Hover: Card lift, button ripple.  
- Modals: Slide-in/out.  
- Sticky CTAs on mobile (Get my payment / Talk to LO).  
- Skeleton loaders for embeds.  
- Event markers: `hero_cta_clicked`, `calc_opened`, `rate_shown`, `lead_captured`, `apply_now_clicked`.

---

## 7. Compliance Requirements
- Persistent NMLS + Equal Housing logos in footer.  
- Disclaimers under all rate/calculator outputs: “Estimates only. Not a commitment to lend. Rates subject to change.”  
- Program-specific disclaimers for Loan Program pages.  
- Reserve space for state-level disclosures (branch pages).

---

## 8. Deliverables for v0
1. **Interactive prototypes**: Homepage, Guided Pathways, LO page, Branch page, Loan Program page, Blog post.  
2. **Design system library**: Tokens, components, imagery, compliance blocks.  
3. **Notes panels** on every frame with intent, integration stubs, compliance reminders.  
4. **Exportable component set** for reuse (buttons, cards, modals).  
5. **Annotated flows** for Apply Now, Rate Quote, Calculator, Chat.  

---

## 9. Success Criteria
- Prototypes visually consistent with brand guidelines【169†source】.  
- All non-negotiable features present as stubs.  
- Clear differentiation from Rocket/Rate (lighter, more credible).  
- Compliance placeholders included.  
- Mobile-first experience validated.  

---

**End — v0 Feature & Functional Specification**

