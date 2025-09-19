# Ultimate Mortgage Design System v2
*Inspired by Rocket.com and Lower.com - Clean, Consistent, Scalable*

---

## 🎯 **Design Philosophy**

Based on analysis of industry leaders like Rocket Mortgage and Lower.com, our design system follows these principles:

### **Core Principles**
1. **Simplicity First** - Clean, minimal design that reduces cognitive load
2. **Trust & Credibility** - Professional appearance that builds confidence
3. **Mobile-First** - Optimized for mobile experience, enhanced for desktop
4. **Accessibility** - WCAG 2.1 AA compliant by default
5. **Consistency** - Unified components and patterns across all pages
6. **Performance** - Lightweight, fast-loading components

---

## 🎨 **Design Tokens**

### **Color System**
```css
/* Primary Brand Colors */
--color-primary-50: #fef2f2;
--color-primary-100: #fee2e2;
--color-primary-500: #C60904;  /* Main brand red */
--color-primary-600: #A50803;  /* Hover state */
--color-primary-700: #8B0703;  /* Active state */

/* Secondary Colors */
--color-secondary-50: #eff6ff;
--color-secondary-100: #dbeafe;
--color-secondary-500: #3982BB;  /* Trust blue */
--color-secondary-600: #2E6DA3;  /* Hover state */
--color-secondary-700: #23588B;  /* Active state */

/* Neutral Grays */
--color-gray-50: #f9fafb;
--color-gray-100: #f3f4f6;
--color-gray-200: #e5e7eb;
--color-gray-300: #d1d5db;
--color-gray-400: #9ca3af;
--color-gray-500: #6b7280;
--color-gray-600: #4b5563;
--color-gray-700: #374151;
--color-gray-800: #1f2937;
--color-gray-900: #111827;

/* Semantic Colors */
--color-success: #16a34a;
--color-warning: #f59e0b;
--color-error: #dc2626;
--color-info: #3b82f6;
```

### **Typography Scale**
```css
/* Font Families */
--font-display: 'Inter', system-ui, sans-serif;
--font-body: 'Inter', system-ui, sans-serif;

/* Type Scale (Mobile-first, responsive) */
--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.25rem;     /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 1.875rem;   /* 30px */
--text-4xl: 2.25rem;    /* 36px */
--text-5xl: 3rem;       /* 48px */

/* Display Headings (Responsive) */
--text-display-sm: clamp(1.875rem, 3vw, 2.25rem);   /* 30-36px */
--text-display-md: clamp(2.25rem, 4vw, 3rem);       /* 36-48px */
--text-display-lg: clamp(3rem, 5vw, 3.75rem);       /* 48-60px */
--text-display-xl: clamp(3.75rem, 6vw, 4.5rem);     /* 60-72px */
```

### **Spacing System**
```css
/* Consistent 8px base unit */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### **Border Radius**
```css
--radius-sm: 0.375rem;   /* 6px */
--radius-md: 0.5rem;     /* 8px */
--radius-lg: 0.75rem;    /* 12px */
--radius-xl: 1rem;       /* 16px */
--radius-2xl: 1.5rem;    /* 24px */
--radius-full: 9999px;   /* Fully rounded */
```

### **Shadows**
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
```

---

## 🧩 **Component Library**

### **Button Variants**

#### **Primary Button**
- Use for main actions (Apply Now, Get Started)
- Red background (#C60904)
- White text
- Medium shadow with hover lift effect

#### **Secondary Button**
- Use for secondary actions (Learn More, Contact Us)
- White background with blue border
- Blue text (#3982BB)
- Hover fills with blue background

#### **Tertiary Button**
- Use for subtle actions (View Details, Cancel)
- No background or border
- Blue text with underline on hover

#### **Sizes**
- **Small**: 32px height, 12px padding
- **Medium**: 44px height, 16px padding  
- **Large**: 52px height, 20px padding

### **Form Components**

#### **Input Field**
- 44px height (touch-friendly)
- 12px border radius
- Gray border with blue focus state
- Proper label and error state styling

#### **Select Dropdown**
- Consistent with input styling
- Custom arrow icon
- Smooth open/close animation

#### **Checkbox & Radio**
- 20px size for easy interaction
- Brand color when selected
- Clear focus indicators

### **Card Components**

#### **Basic Card**
- White background
- Subtle border (gray-200)
- 12px border radius
- Soft shadow

#### **Interactive Card**
- Hover lift effect (-2px transform)
- Shadow increase on hover
- Smooth 200ms transition

#### **Feature Card**
- Icon + title + description layout
- Consistent padding (24px)
- Optional CTA button

---

## 📱 **Responsive Breakpoints**

```css
/* Mobile-first approach */
--breakpoint-sm: 640px;   /* Small tablets */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Small desktops */
--breakpoint-xl: 1280px;  /* Large desktops */
--breakpoint-2xl: 1536px; /* Extra large screens */
```

---

## ♿ **Accessibility Standards**

### **Color Contrast**
- All text meets WCAG AA standards (4.5:1 ratio minimum)
- Interactive elements have 3:1 ratio minimum
- Focus indicators are clearly visible

### **Interactive Elements**
- Minimum 44px touch target size
- Clear focus indicators
- Keyboard navigation support
- Screen reader friendly markup

### **Typography**
- Minimum 16px base font size
- Sufficient line height (1.5 minimum)
- Clear hierarchy with proper heading structure

---

## 🎭 **Animation & Transitions**

### **Timing Functions**
```css
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### **Duration Standards**
- **Fast**: 150ms (hover states, focus)
- **Medium**: 300ms (page transitions, modals)
- **Slow**: 500ms (complex animations)

### **Common Animations**
- **Hover Lift**: -2px transform + shadow increase
- **Button Press**: Scale down to 0.98
- **Modal Enter**: Fade in + scale from 0.95
- **Page Transition**: Slide up + fade in

---

## 📐 **Layout Patterns**

### **Container Widths**
```css
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1400px;  /* Max content width */
```

### **Grid System**
- 12-column grid for complex layouts
- CSS Grid for modern layouts
- Flexbox for component-level alignment

### **Common Patterns**
- **Hero Section**: Full-width background, centered content
- **Feature Grid**: 1-2-3 column responsive grid
- **Card Layout**: Consistent spacing and alignment
- **Form Layout**: Single column, proper field spacing

---

## 🔧 **Implementation Guidelines**

### **Component Structure**
```typescript
// Standard component pattern
interface ComponentProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

export const Component = ({ variant = 'primary', ...props }) => {
  return (
    <element className={cn(baseStyles, variantStyles, props.className)}>
      {props.children}
    </element>
  );
};
```

### **CSS Class Naming**
- Use Tailwind utilities for consistency
- Custom classes only when necessary
- Follow BEM methodology for custom CSS

### **File Organization**
```
src/
├── components/
│   ├── ui/           # Base components
│   ├── forms/        # Form components
│   ├── layout/       # Layout components
│   └── sections/     # Page sections
├── styles/
│   ├── globals.css   # Global styles
│   └── components.css # Component styles
└── lib/
    └── utils.ts      # Utility functions
```

---

## 📚 **Usage Examples**

### **Button Usage**
```tsx
// Primary action
<Button variant="primary" size="lg">Apply Now</Button>

// Secondary action
<Button variant="secondary" size="md">Learn More</Button>

// Subtle action
<Button variant="tertiary" size="sm">View Details</Button>
```

### **Form Usage**
```tsx
<form className="space-y-6">
  <Input
    label="Email Address"
    type="email"
    placeholder="Enter your email"
    required
  />
  <Select
    label="Loan Type"
    options={loanTypes}
    placeholder="Select loan type"
  />
  <Button type="submit" variant="primary" size="lg" className="w-full">
    Get My Rate
  </Button>
</form>
```

---

## 🚀 **Next Steps**

1. **Implement Core Components** - Button, Input, Select, Card
2. **Update Existing Components** - Refactor to use new design tokens
3. **Create Component Documentation** - Storybook or similar
4. **Build Form Components** - For lead capture funnel
5. **Test Accessibility** - Automated and manual testing
6. **Performance Optimization** - Bundle size and loading speed

---

This design system provides a solid foundation for consistent, scalable UI development while maintaining the professional, trustworthy appearance that mortgage customers expect.
