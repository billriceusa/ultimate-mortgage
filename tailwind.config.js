/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#C60904',
          'primary-hover': '#A50803',
          'primary-active': '#8B0703',
          onPrimary: '#FFFFFF',
          secondary: '#3982BB',
          'secondary-hover': '#2E6DA3',
          'secondary-active': '#23588B',
          onSecondary: '#FFFFFF',
        },
        ui: {
          bg: '#FFFFFF',
          surface: '#FFFFFF',
          surfaceAlt: '#E1E4DD',
          surfaceInfo: '#BADCF1',
          border: '#E5E7EB',
          divider: '#E5E7EB',
        },
        text: {
          primary: '#000000',
          secondary: '#333333',
          muted: '#6B7280',
          link: '#3982BB',
        },
        state: {
          success: '#16A34A',
          warning: '#FFC931',
          error: '#C60904',
          info: '#3982BB',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Outfit', 'Poppins', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'Montserrat', 'system-ui', 'sans-serif'],
        accent: ['var(--font-accent)', 'Filmotype Lucky', 'Grandstander', 'cursive'],
      },
      fontSize: {
        // Mobile-first responsive typography
        'display-xl': ['clamp(2.5rem, 5vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg': ['clamp(2rem, 4vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'display-md': ['clamp(1.75rem, 3vw, 2rem)', { lineHeight: '1.3', fontWeight: '700' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75', fontWeight: '400' }],
        'body-base': ['1rem', { lineHeight: '1.75', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      borderRadius: {
        'xs': '0.5rem',   // 8px
        'sm': '0.75rem',  // 12px  
        'md': '1rem',     // 16px
        'lg': '1.5rem',   // 24px
        'xl': '2rem',     // 32px
      },
      boxShadow: {
        'soft': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'large': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
        'hover': '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
      },
      animation: {
        'fade-in': 'fadeIn 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scaleIn 200ms cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
