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
          onPrimary: '#FFFFFF',
          secondary: '#3982BB',
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
        display: ['Arboria', 'Outfit', 'Poppins', 'system-ui', 'sans-serif'],
        body: ['Montserrat', 'system-ui', 'sans-serif'],
        accent: ['Filmotype Lucky', 'Grandstander', 'cursive'],
      },
      fontSize: {
        'h1': ['56px', { lineHeight: '64px', letterSpacing: '-0.5px', fontWeight: '700' }],
        'h2': ['40px', { lineHeight: '48px', letterSpacing: '-0.25px', fontWeight: '700' }],
        'h3': ['28px', { lineHeight: '36px', fontWeight: '700' }],
        'body': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'small': ['14px', { lineHeight: '22px', fontWeight: '400' }],
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '40': '40px',
        '48': '48px',
        '64': '64px',
        '80': '80px',
      },
      borderRadius: {
        'xs': '12px',
        'sm': '16px',
        'md': '24px',
        'lg': '32px',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0,0,0,0.06)',
        'md': '0 6px 16px rgba(0,0,0,0.08)',
        'lg': '0 16px 32px rgba(0,0,0,0.10)',
      },
      animation: {
        'fade-in': 'fadeIn 200ms cubic-bezier(0.2, 0.8, 0.2, 1)',
        'slide-in': 'slideIn 200ms cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
