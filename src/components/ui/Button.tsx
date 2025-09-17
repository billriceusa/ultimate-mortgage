import { ButtonHTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'medium' | 'large'
  children: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'medium', className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          // Base styles
          'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed',
          
          // Size variants
          {
            'h-12 px-6 text-base': size === 'medium',
            'h-14 px-7 text-lg': size === 'large',
          },
          
          // Style variants
          {
            'bg-brand-primary text-brand-onPrimary rounded-sm hover:bg-red-700 active:bg-red-800 btn-hover': variant === 'primary',
            'border-2 border-brand-secondary text-brand-secondary rounded-sm hover:bg-ui-surfaceInfo hover:bg-opacity-8 active:bg-opacity-16': variant === 'secondary',
            'text-text-link hover:underline': variant === 'tertiary',
          },
          
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
