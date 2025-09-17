import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'small' | 'medium' | 'large'
  children: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'medium', className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center font-medium transition-all duration-300 ease-smooth focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
          
          // Size variants
          {
            'h-10 px-4 text-sm rounded-md': size === 'small',
            'h-12 px-6 text-base rounded-lg': size === 'medium',
            'h-14 px-8 text-lg rounded-lg': size === 'large',
          },
          
          // Style variants
          {
            // Primary button
            'bg-brand-primary text-brand-onPrimary font-semibold shadow-medium hover:bg-brand-primary-hover hover:shadow-large hover:-translate-y-0.5 active:bg-brand-primary-active active:shadow-medium active:translate-y-0': variant === 'primary',
            
            // Secondary button  
            'border-2 border-brand-secondary text-brand-secondary bg-transparent font-semibold hover:bg-brand-secondary hover:text-brand-onSecondary hover:shadow-medium hover:-translate-y-0.5 active:bg-brand-secondary-active active:border-brand-secondary-active': variant === 'secondary',
            
            // Tertiary button
            'text-brand-secondary font-medium hover:text-brand-secondary-hover hover:underline underline-offset-2': variant === 'tertiary',
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
