# UM — Design System v0 (VT1-first)

This design system gives v0 a precise recipe to create production-feel prototypes based on **VT1: Credibility‑First Minimalism**. It defines tokens, components, interaction rules, accessibility, and an imagery library built from your approved Unsplash photos.

---

## 1) Brand Foundations → Semantic Tokens
Use semantic tokens in v0 so themes/components reference roles, not raw hex.

### Color Tokens
```json
{
  "color": {
    "brand.primary": "#C60904",           
    "brand.onPrimary": "#FFFFFF",
    "brand.secondary": "#3982BB",
    "brand.onSecondary": "#FFFFFF",

    "ui.bg": "#FFFFFF",
    "ui.surface": "#FFFFFF",
    "ui.surfaceAlt": "#E1E4DD",
    "ui.surfaceInfo": "#BADCF1",
    "ui.border": "#E5E7EB",
    "ui.divider": "#E5E7EB",

    "text.primary": "#000000",
    "text.secondary": "#333333",
    "text.muted": "#6B7280",
    "text.link": "#3982BB",

    "state.success": "#16A34A",
    "state.warning": "#FFC931",
    "state.error": "#C60904",
    "state.info": "#3982BB"
  }
}
```

### Typography Tokens
```json
{
  "font": {
    "display": "Arboria, Outfit, Poppins, system-ui, sans-serif",
    "body": "Montserrat, system-ui, sans-serif",
    "accent": "Filmotype Lucky, Grandstander, cursive"
  },
  "typeScale": {
    "h1": { "size": 56, "line": 64, "weight": 700, "tracking": -0.5 },
    "h2": { "size": 40, "line": 48, "weight": 700, "tracking": -0.25 },
    "h3": { "size": 28, "line": 36, "weight": 700 },
    "body": { "size": 18, "line": 28, "weight": 400 },
    "small": { "size": 14, "line": 22, "weight": 400 }
  }
}
```

### Spacing / Radius / Elevation
```json
{
  "space": [4, 8, 12, 16, 24, 32, 40, 48, 64, 80],
  "radius": { "xs": 12, "sm": 16, "md": 24, "lg": 32 },
  "shadow": {
    "sm": "0 1px 2px rgba(0,0,0,0.06)",
    "md": "0 6px 16px rgba(0,0,0,0.08)",
    "lg": "0 16px 32px rgba(0,0,0,0.10)"
  },
  "motion": { "fast": 150, "base": 200, "slow": 250, "easing": "cubic-bezier(0.2, 0.8, 0.2, 1)" }
}
```

### Layout Grids (Figma/v0)
- **Desktop:** 12 cols, 80/24/80 margins, 24 gutter
- **Mobile:** 8 cols, 16 margins, 12 gutter

---

## 2) Components (VT1‑first styles)

### Buttons
- **Primary:** brand.primary bg, onPrimary text. Hover: darken 6%; Pressed: darken 12%; Disabled: 40% opacity.
- **Secondary:** outline 2px brand.secondary; text/link = brand.secondary; hover adds ui.surfaceInfo bg 8%.
- **Tertiary:** text link with underline on hover.
- Sizes: **M** 48h (16px x 24px padding), **L** 56h (20px x 28px).
- Icon spacing: 8px between icon and label.

### Inputs (text/select/slider)
- Height 48; 12px radius; 1.5px ui.border default; focus ring 2px brand.secondary (outside border); error ring = state.error.
- Helper text 12–14px text.muted; error text state.error.

### Cards
- **Surface:** ui.surface; radius 24; shadow md; 24–32 padding.
- **Variants:** Plain / With header / With media (image ratio 16:9, rounded 16).

### "Calculator Card" (for MortgageMate)
- Header: Title + tiny lockup “Estimates only”.
- Body: Big PITI total; mini legend (P/I/Tax/Ins); optional sliders row (Down %, Rate).
- CTA: Primary “See full breakdown” → opens modal.
- Loading: skeleton 16px rows; fade-in on ready.

### "Rate Cards" (for BankingBridge)
- 3–6 cards in a row; each shows product (30‑yr Fixed, FHA, VA…), sample Rate/APR placeholders.
- Link under row: “Assumptions & APR details”.
- Gate additional pricing with capture (note-only in prototypes).

### Modals / Sheets
- **Desktop modal:** 960×680; corners 24; shadow lg; scrollable body; sticky footer with primary CTA.
- **Mobile bottom sheet:** 80% height; drag handle; safe-area padding.

### Credibility Strip
- Row of 4–6 logos (press/awards/reviews) at 24px height; spacing 32; optional caption chips.

### Footer Compliance
- Region reserved for NMLS, EHL, assumptions; small text; link to Disclosures.

---

## 3) Content & Microcopy
- H1: “A better way to your best mortgage.”
- Subhead: “Transparent pricing. Fast approvals. Human loan experts.”
- CTAs: “Get my payment” (primary), “Talk to a loan expert” (secondary), “See my rate”.
- Disclaimers: “Estimates only. Not a commitment to lend. Rates subject to change.”

---

## 4) Accessibility Rules
- Minimum text contrast 4.5:1 (3:1 for 24px+ bold). Provide visible focus state on all interactive elements.
- All images require alt text; decorative images should be marked as such (empty alt).

---

## 5) Imagery Library (Unsplash set)
Use authentic, daylight scenes; **no heavy overlays**; crop with generous white margins to keep VT1 airy.

> **Aspect ratios & crops**
> - Hero: 16:9 or 21:9; focal point center-left.
> - Inline modules: 4:3 or 3:2.
> - Avatars/tiles: 1:1 with 16 radius.

**Approved Images & Guidance**

1. `/getty-images-UJan77XrT6Q-unsplash.jpg` — *Couple eating pizza on the floor after moving.*  
   - Use: Hero or Lifestyle card.  
   - Crop: 21:9 hero; keep subjects lower-center.  
   - Alt: “Couple sharing pizza on the floor of their new home with boxes around them.”

2. `/getty-images-3Lkj_NkKIQQ-unsplash.jpg` — *Family with laptop on sofa.*  
   - Use: Credibility/Calculator adjacent image.  
   - Crop: 16:9; keep faces mid-left.  
   - Alt: “Parents and two kids looking at a laptop on a sofa at home.”

3. `/getty-images-liEDybMUFio-unsplash.jpg` — *Dad and daughter on floor with boxes.*  
   - Use: Blog hero; LO page testimonial.  
   - Crop: 3:2; focus on book/interaction.  
   - Alt: “Father and daughter sitting on the floor reading while moving boxes sit nearby.”

4. `/stephanie-berbec-PL5KCJPl_G8-unsplash.jpg` — *Two people reviewing a document on couch.*  
   - Use: Program pages (Refi/HELOC).  
   - Crop: 4:3.  
   - Alt: “Couple reviewing loan documents together on a couch at home.”

5. `/getty-images-inAjzRbByfA-unsplash.jpg` — *Child near cardboard playhouse by window.*  
   - Use: Light visual break in long pages.  
   - Crop: 21:9 banner; keep playhouse center-right.  
   - Alt: “Young child playing with a cardboard house by bright windows.”

6. `/getty-images-Z3URBfbmzBA-unsplash.jpg` — *Overhead two people assembling furniture.*  
   - Use: How‑to blog or credibility sections.  
   - Crop: 16:9 overhead.  
   - Alt: “Two people assembling a cabinet from above.”

7. `/getty-images-Y2QYb2SN7yA-unsplash.jpg` — *Child drawing at kitchen table; parent cooking.*  
   - Use: First‑time buyer content.  
   - Crop: 3:2; keep child centered.  
   - Alt: “Child drawing at the kitchen table while a parent cooks.”

8. `/getty-images-mTp4849PomQ-unsplash.jpg` — *Two friends singing with remotes.*  
   - Use: Lifestyle secondary; reflects joy in home.  
   - Crop: 16:9 wide.  
   - Alt: “Two friends singing happily in their living room.”

9. `/getty-images-633LCd_laK4-unsplash.jpg` — *Contractor tiling wall.*  
   - Use: Renovation/HELOC content.  
   - Crop: 4:3 portrait; maintain face visibility.  
   - Alt: “Contractor tiling a bathroom wall.”

10. `/getty-images-1417lYo6yDs-unsplash.jpg` — *Worker installing insulation.*  
   - Use: Energy‑efficiency article; DSCR/Investor content.  
   - Crop: 3:2; focus on hands and insulation.  
   - Alt: “Worker installing insulation in a ceiling.”

**Delivery & Performance**
- Export to **WebP**; hero 1920w/2560w; inline 1200w; mobile 750w.  
- Provide `srcset` + `sizes`; lazy‑load below the fold.

---

## 6) Interaction & Motion (VT1)
- Entrance: subtle fade/slide (base 200ms).  
- Hover: elevate from shadow sm→md; transform `translateY(-2px)`.  
- Focus: 2px ring brand.secondary outside border.  
- Content reveals: stagger 60ms between siblings.

---

## 7) Compliance Hooks
- Always render an **Assumptions & APR** link near any rate.  
- Place a persistent **disclosure region** below calculators/rates.  
- Footer carries NMLS + EHL lockup.

---

## 8) v0 CSS Variables (drop‑in)
```css
:root{
  /* Brand */
  --brand-primary:#C60904; --brand-onPrimary:#fff; --brand-secondary:#3982BB; --brand-onSecondary:#fff;
  /* Surfaces */
  --bg:#fff; --surface:#fff; --surface-alt:#E1E4DD; --surface-info:#BADCF1; --border:#E5E7EB; --divider:#E5E7EB;
  /* Text */
  --text:#000; --text-2:#333; --text-muted:#6B7280; --link:#3982BB;
  /* States */
  --success:#16A34A; --warning:#FFC931; --error:#C60904; --info:#3982BB;
  /* Radii */
  --r-xs:12px; --r-sm:16px; --r-md:24px; --r-lg:32px;
  /* Shadows */
  --sh-sm:0 1px 2px rgba(0,0,0,.06);
  --sh-md:0 6px 16px rgba(0,0,0,.08);
  --sh-lg:0 16px 32px rgba(0,0,0,.1);
}
```

---

## 9) Figma Make — Design System Library (single prompt)
> **Copy/paste:**
> “Create a page named **UM — Design System v0 (VT1)** with sections **Foundations**, **Components**, **Imagery**, **Compliance**. Add color styles from the tokens above; text styles for H1/H2/H3/Body/Small; grid presets (Desktop 12/80‑24‑80/24, Mobile 8/16/12). Build components: Button (Primary/Secondary/Tertiary with states), Input (Text/Select/Slider), Card (Plain/Header/Media), Modal (960×680), Bottom Sheet (80% height), Calculator Card (with skeleton + mini legend), Rate Cards row, Credibility Strip, Footer Compliance block. Under **Imagery**, create 10 placeholders labeled with the filenames and recommended crops/alt text from the Imagery Library, and a note to export as WebP with srcset. Keep surfaces bright white, measured red accents, generous white space.”

---

## 10) Ready‑to‑Use Content Blocks
- **Legal snippet:** “Estimates only. Not a commitment to lend. Conditions, restrictions, and credit approval apply.”
- **Assumptions link label:** “Assumptions & APR details”
- **CTA set:** “Get my payment” / “See my rate” / “Talk to a loan expert”

---

**End — UM Design System v0 (VT1‑first)**