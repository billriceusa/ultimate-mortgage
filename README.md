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
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Homepage
├── components/
│   ├── ui/
│   │   └── Button.tsx       # Reusable button component
│   ├── Hero.tsx             # Homepage hero section
│   ├── RateProofRow.tsx     # Rate cards display
│   ├── CalculatorPreview.tsx # Payment calculator preview
│   ├── ValueProps.tsx       # Value proposition cards
│   ├── CredibilityStrip.tsx # Reviews and press logos
│   ├── GuideDownload.tsx    # Lead magnet section
│   └── Footer.tsx           # Footer with compliance
└── lib/                     # Utility functions
```

## Design System

The project uses a custom design system based on the VT1 Credibility-First Minimalism approach:

### Colors
- **Primary:** #C60904 (Ultimate Red)
- **Secondary:** #3982BB (Trust Blue)
- **Background:** #FFFFFF (Clean White)
- **Text:** #000000, #333333, #6B7280

### Typography
- **Display:** Arboria (headings)
- **Body:** Montserrat (body text)
- **Accent:** Filmotype Lucky (decorative)

### Components
- Responsive button variants (primary, secondary, tertiary)
- Card components with hover effects
- Modal overlays for calculator expansion
- Compliance footer blocks

## Key Features

### Homepage Sections
1. **Hero** - Main value proposition with CTAs
2. **Rate Proof Row** - Current rate cards
3. **Calculator Preview** - Payment calculator with modal
4. **Value Props** - Why choose Ultimate Mortgage
5. **Credibility Strip** - Reviews and press mentions
6. **Guide Download** - Lead capture with free resource
7. **Footer** - Compliance and navigation

### Integrations (Planned)
- **MortgageMate** calculators (iframe embeds)
- **BankingBridge** rate feeds
- **CRM/LOS** lead routing
- **Chat/Voice** support system

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
