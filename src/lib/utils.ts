import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Common component class patterns
export const componentStyles = {
  // Card styles
  card: 'bg-ui-surface rounded-lg border border-ui-border shadow-soft',
  cardHover: 'card-hover cursor-pointer',
  cardInteractive: 'transition-smooth hover:shadow-medium hover:-translate-y-0.5',
  
  // Container styles
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  containerSm: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8',
  
  // Section styles
  section: 'py-16',
  sectionLg: 'py-20',
  
  // Typography styles
  heading: 'font-sans font-bold text-gray-900',
  subheading: 'text-lg text-gray-600',
  caption: 'text-sm text-gray-500',
  
  // Layout styles
  grid: 'grid gap-8',
  gridCols2: 'grid grid-cols-1 md:grid-cols-2 gap-8',
  gridCols3: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
  gridCols4: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8',
  
  // Flexbox styles
  flex: 'flex items-center',
  flexCol: 'flex flex-col',
  flexBetween: 'flex items-center justify-between',
  flexCenter: 'flex items-center justify-center',
  
  // Input styles
  input: 'w-full px-4 py-3 border border-ui-border rounded-lg focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition-smooth',
  inputError: 'border-state-error focus:ring-state-error',
  
  // Focus styles
  focusRing: 'focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:ring-offset-2',
}

// Responsive breakpoints helper
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}

// Animation durations
export const durations = {
  fast: '150ms',
  base: '200ms',
  slow: '300ms',
  slower: '500ms',
}

// Common spacing values
export const spacing = {
  xs: '0.5rem',   // 8px
  sm: '0.75rem',  // 12px
  base: '1rem',   // 16px
  lg: '1.5rem',   // 24px
  xl: '2rem',     // 32px
  '2xl': '3rem',  // 48px
  '3xl': '4rem',  // 64px
}
