# Ultimate Mortgage Logo Usage Guide

## Logo Component

The `Logo` component provides the official Ultimate Mortgage branding with the red house icon and professional typography.

### Usage Examples

```tsx
import { Logo } from '@/components/ui/Logo'

// Full logo (default) - Icon + Text
<Logo size="md" />

// Icon only
<Logo variant="icon" size="lg" />

// Text only
<Logo variant="text" size="sm" />

// Custom styling
<Logo 
  size="xl" 
  className="hover:opacity-80 transition-opacity" 
/>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Controls the overall size of the logo |
| `variant` | `'full' \| 'icon' \| 'text'` | `'full'` | Which parts of the logo to display |
| `className` | `string` | - | Additional CSS classes |

### Size Guidelines

- **sm** (h-8): Small contexts, mobile navigation
- **md** (h-10): Standard header, default size
- **lg** (h-12): Large headers, hero sections
- **xl** (h-16): Extra large displays, marketing materials

### Variant Guidelines

- **full**: Primary usage - header, footer, main branding
- **icon**: Favicon, app icons, compact spaces
- **text**: When icon space is limited, text-heavy contexts

### Brand Colors

- **House Icon**: `#C60904` (Primary Red)
- **Door/Windows**: `#8B0703` (Darker Red)
- **"ULTIMATE"**: `#111827` (Gray 900)
- **"MORTGAGE BROKERS"**: `#C60904` (Primary Red)

### Accessibility

- SVG uses proper semantic markup
- Colors meet WCAG contrast requirements
- Scalable vector format for all screen densities
- Alt text provided for screen readers

### File Structure

```
public/
├── favicon.svg              # SVG favicon
├── site.webmanifest        # PWA manifest
└── (other favicon sizes)   # Generated PNG sizes

src/components/ui/
└── Logo.tsx                # Logo component
```

### Favicon System

The favicon system includes:

- **favicon.svg** - Modern SVG favicon for supported browsers
- **favicon-16x16.png** - 16px PNG fallback
- **favicon-32x32.png** - 32px PNG fallback  
- **apple-touch-icon.png** - 180px Apple touch icon
- **safari-pinned-tab.svg** - Safari pinned tab icon
- **site.webmanifest** - PWA manifest with theme colors

### Implementation Notes

- Logo is fully responsive and scales cleanly
- Uses CSS custom properties for consistent theming
- Optimized SVG with minimal file size
- Works in all modern browsers
- Maintains aspect ratio across all sizes

### Don'ts

- Don't modify the house icon proportions
- Don't change brand colors without approval
- Don't use low-resolution raster versions when SVG is available
- Don't place logo on backgrounds that reduce readability

