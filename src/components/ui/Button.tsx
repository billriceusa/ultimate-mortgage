import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  children: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = 'primary', 
    size = 'md', 
    loading = false,
    className, 
    children, 
    disabled,
    ...props 
  }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          // Base styles
          'btn',
          
          // Size variants
          {
            'btn-sm': size === 'sm',
            'btn-md': size === 'md',
            'btn-lg': size === 'lg',
          },
          
          // Style variants
          {
            // Primary button - Red background
            'bg-primary-500 text-white font-semibold shadow-md hover:bg-primary-600 hover:shadow-lg hover:-translate-y-0.5 active:bg-primary-700 active:translate-y-0 focus:ring-primary-500': 
              variant === 'primary',
            
            // Secondary button - Blue outline
            'border-2 border-secondary-500 text-secondary-600 bg-white font-semibold hover:bg-secondary-500 hover:text-white hover:shadow-md hover:-translate-y-0.5 active:bg-secondary-600 active:border-secondary-600 active:translate-y-0 focus:ring-secondary-500': 
              variant === 'secondary',
            
            // Tertiary button - Text only
            'text-secondary-600 font-medium hover:text-secondary-700 hover:underline underline-offset-4 focus:ring-secondary-500': 
              variant === 'tertiary',

            // Ghost button - Subtle background
            'text-gray-700 bg-gray-50 font-medium hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-500': 
              variant === 'ghost',
          },
          
          // Loading state
          {
            'cursor-not-allowed opacity-75': loading,
          },
          
          className
        )}
        {...props}
      >
        {loading && (
          <svg 
            className="animate-spin -ml-1 mr-2 h-4 w-4" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'