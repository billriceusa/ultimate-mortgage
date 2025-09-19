import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  value: number // 0-100
  max?: number
  showLabel?: boolean
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'success' | 'warning' | 'error'
}

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ 
    value, 
    max = 100, 
    showLabel = false,
    size = 'md',
    variant = 'default',
    className, 
    ...props 
  }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

    return (
      <div
        ref={ref}
        className={cn('w-full', className)}
        {...props}
      >
        {showLabel && (
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm text-gray-500">{Math.round(percentage)}%</span>
          </div>
        )}
        
        <div
          className={cn(
            'w-full bg-gray-200 rounded-full overflow-hidden',
            {
              'h-1': size === 'sm',
              'h-2': size === 'md',
              'h-3': size === 'lg',
            }
          )}
        >
          <div
            className={cn(
              'h-full transition-all duration-300 ease-smooth rounded-full',
              {
                'bg-secondary-500': variant === 'default',
                'bg-success-500': variant === 'success',
                'bg-warning-500': variant === 'warning',
                'bg-error-500': variant === 'error',
              }
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    )
  }
)

ProgressBar.displayName = 'ProgressBar'

// Step Progress component for multi-step forms
interface StepProgressProps extends HTMLAttributes<HTMLDivElement> {
  currentStep: number
  totalSteps: number
  steps?: string[]
}

export const StepProgress = forwardRef<HTMLDivElement, StepProgressProps>(
  ({ 
    currentStep, 
    totalSteps, 
    steps,
    className, 
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('w-full', className)}
        {...props}
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-gray-700">
            Step {currentStep} of {totalSteps}
          </span>
          <span className="text-sm text-gray-500">
            {Math.round((currentStep / totalSteps) * 100)}% Complete
          </span>
        </div>
        
        <ProgressBar 
          value={currentStep} 
          max={totalSteps} 
          size="md" 
          variant="default"
        />
        
        {steps && (
          <div className="flex justify-between mt-2">
            {steps.map((step, index) => (
              <span
                key={index}
                className={cn(
                  'text-xs',
                  {
                    'text-secondary-600 font-medium': index + 1 <= currentStep,
                    'text-gray-400': index + 1 > currentStep,
                  }
                )}
              >
                {step}
              </span>
            ))}
          </div>
        )}
      </div>
    )
  }
)

StepProgress.displayName = 'StepProgress'
