# UltimateMortgage.com — Lead Capture Specification

This document defines the requirements for the **lead capture funnel** to be included in the v0 prototype.

---

## Purpose
Capture high-intent leads quickly and credibly. Funnel must be **mobile-first, app-like, and conversion-forward**, while maintaining compliance.

---

## Funnel Overview
- **Flow length:** 4–5 steps max.
- **One question per screen.**
- **Progress bar** at top (“Step 1 of 5”).
- **Sticky CTA bar** on mobile (“Next step / Get my rate”).
- **Confirmation screen** with next-step CTAs (Apply Now, See My Rates, Talk to a Loan Expert).

---

## Entry Points
- Homepage hero CTAs (Get my payment, See my rate).
- Guided Pathways (Buy / Refi / Equity).
- Loan Officer & Branch pages (shorter version, prefilled attribution).

---

## Steps
1. **Loan Purpose + Zip Code**
   - Purpose: Buy • Refi • Cash-out • HELOC.
   - Zip input with validation.

2. **Property & Financing Info**
   - Buy: Home Price + Down % slider.
   - Refi/Equity: Current Balance + Est. Value.

3. **Credit Score Band**
   - Options: Excellent (720+), Good (680–719), Fair (640–679), Poor (<640).

4. **Contact Info**
   - Name, Email, Phone.
   - Inline validation + error states.

5. **Review & Confirmation**
   - Show Payment Preview (stubbed MortgageMate output).
   - Display rotating trust chip (review/testimonial).
   - CTA: **See My Rates → BankingBridge Rate Table**.

---

## Functional Requirements
- **Session save:** inputs persist across steps.
- **Attribution:** pass UTMs, CampaignID, LO NMLS to CRM.
- **Event tracking stubs:** funnel_start, step_complete, lead_submit, funnel_abandon.
- **Integrations:**
  - MortgageMate for Payment Preview (modal expansion).
  - BankingBridge for Rate Table (end of funnel).
- **Validation:** inline, real-time feedback.

---

## Visual & Brand Alignment
- Style: VT1 Credibility-First Minimalism.
- Colors: Red #C60904 (primary), White #FFFFFF, Black #000000, Blue #3982BB (secondary), Yellow #FFC931 (highlight).
- Typography: Arboria (H), Montserrat (body).
- Imagery: Optional lifestyle photo on first screen.
- Credibility chips: show Google/Zillow/Trustpilot review snippets.

---

## Compliance
- Disclaimer under all outputs: “Estimates only. Not a commitment to lend. Rates subject to change.”
- Persistent footer: NMLS ID + Equal Housing logo.

---

## Variants
- **LO/Branch Funnel:** 3 steps only (Purpose → Balance/Equity → Contact), auto-prefill attribution.
- **Paid Media Funnel:** Direct to step 1 with campaignId prefilled.

---

## Deliverables for v0
- Mobile + Desktop prototypes of funnel.
- Confirmation screen with branching CTAs.
- Annotations for integrations, analytics, and compliance.

---

**End — Lead Capture Specification**

