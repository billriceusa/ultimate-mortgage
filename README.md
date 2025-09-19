# Ultimate Mortgage

A modern, mobile-first mortgage website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Mobile-first design** with responsive layouts
- **Modern tech stack** using Next.js 14 with App Router
- **Design system** based on VT1 Credibility-First Minimalism
- **Mortgage calculator** preview with modal expansion
- **Rate comparison** cards with transparent pricing
- **Lead capture** forms for guide downloads
- **Compliance-ready** with NMLS and Equal Housing disclaimers

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom design tokens
- **Images:** Next.js Image optimization
- **Deployment:** Vercel (ready)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Design system base styles
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Homepage
│   ├── loan-programs/       # Loan program pages
│   ├── our-team/           # Team member pages
│   └── rates/              # Rate information pages
├── components/
│   ├── ui/                 # Design system components
│   │   ├── Button.tsx      # Button with 4 variants
│   │   ├── Input.tsx       # Form input with validation
│   │   ├── Select.tsx      # Dropdown component
│   │   ├── Card.tsx        # Card system with sub-components
│   │   ├── ProgressBar.tsx # Progress indicators
│   │   └── index.ts        # Component exports
│   ├── Header.tsx          # Navigation with dropdowns
│   ├── Footer.tsx          # Footer with compliance
│   ├── Hero.tsx            # Homepage hero section
│   ├── RateProofRow.tsx    # Rate cards display
│   ├── CalculatorPreview.tsx # Payment calculator
│   ├── ValueProps.tsx      # Value proposition cards
│   ├── CredibilityStrip.tsx # Reviews and testimonials
│   └── GuideDownload.tsx   # Lead capture section
├── lib/
│   └── utils.ts            # Utility functions
└── docs/
    ├── design-system-v2.md # Complete design system docs
    └── design-system-implementation.md # Implementation log
```

## Design System v2

Comprehensive design system inspired by industry leaders like Rocket.com and Lower.com:

### Design Tokens
- **Colors:** Primary red (#C60904), Trust blue (#3982BB), Gray scale (50-900)
- **Typography:** Inter font family with responsive display headings
- **Spacing:** 8px base unit system for consistent layouts
- **Shadows:** Subtle elevation system for depth

### Component Library
- **Button:** 4 variants (primary, secondary, tertiary, ghost) × 3 sizes
- **Input/Select:** Form components with validation and accessibility
- **Card:** Flexible card system with headers, content, footers
- **ProgressBar:** Multi-step forms and loading indicators

### Key Features
- **Consistent:** All components use standardized design tokens
- **Accessible:** WCAG 2.1 AA compliant focus states and colors
- **Scalable:** Easy to extend with new components
- **Type-safe:** Full TypeScript support with proper interfaces

## Current Implementation

### Pages & Components
- ✅ **Homepage** - Hero, rates, calculator, value props, testimonials
- ✅ **Loan Programs** - Traditional and specialty loan overviews
- ✅ **Our Team** - Team member profiles with NMLS info
- ✅ **Rates** - Current rates with detailed explanations
- ✅ **Navigation** - Professional header with dropdowns
- ✅ **Footer** - Compliance and legal information

### Design System Status
- ✅ **Component Library** - Button, Input, Select, Card, ProgressBar
- ✅ **Design Tokens** - Colors, typography, spacing standardized
- ✅ **Accessibility** - Focus states, color contrast, keyboard navigation
- ✅ **Responsive** - Mobile-first design across all components

### Next Phase: Lead Capture Funnel
- 🔄 **5-step application flow** using new form components
- 🔄 **Session persistence** and progress tracking
- 🔄 **Modal system** for desktop/mobile experiences

## Compliance

The site includes compliance-ready elements:
- NMLS licensing display
- Equal Housing Lender logos
- Rate assumption disclaimers
- Privacy and terms links

## Deployment

This project is configured for deployment on Vercel:

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push to main

## Contributing

1. Follow the established component patterns
2. Use semantic commit messages
3. Ensure mobile-first responsive design
4. Include accessibility attributes
5. Test across modern browsers

## License

Private project for Ultimate Mortgage.
