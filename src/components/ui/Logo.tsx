import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const sizeClasses = {
  xs: 'h-5',
  sm: 'h-6',
  md: 'h-8',
  lg: 'h-10',
  xl: 'h-12',
} as const

const rasterDimensions = {
  xs: { width: 110, height: 30 },
  sm: { width: 130, height: 36 },
  md: { width: 150, height: 42 },
  lg: { width: 180, height: 50 },
  xl: { width: 220, height: 62 },
} as const

interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'full' | 'icon' | 'text'
}

export const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ size = 'md', variant = 'full', className, ...props }, ref) => {
    // Use the official Ultimate Mortgage logo
    if (variant === 'full') {
      const dims = rasterDimensions[size]
      return (
        <div ref={ref} className={cn('flex items-center', className)} {...props}>
          <div
            className={cn(
              'relative',
              // Responsive container widths/heights
              size === 'xs' && 'w-[110px] h-[30px]',
              size === 'sm' && 'w-[130px] h-[36px]',
              size === 'md' && 'w-[150px] h-[42px]',
              size === 'lg' && 'w-[180px] h-[50px]',
              size === 'xl' && 'w-[220px] h-[62px]',
              'md:w-[150px] md:h-[42px] lg:w-[180px] lg:h-[50px]'
            )}
            style={{ width: dims.width, height: dims.height }}
          >
            <Image
              src="/img/ultimate-mortgage-brokers.svg"
              alt="Ultimate Mortgage Brokers"
              fill
              sizes="(max-width: 640px) 130px, (max-width: 1024px) 150px, 180px"
              className="object-contain"
              priority
            />
          </div>
        </div>
      )
    }

    if (variant === 'icon') {
      return (
        <div ref={ref} className={cn('flex items-center', className)} {...props}>
          <svg 
            className={cn(sizeClasses[size], 'w-auto')} 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Official Red House Icon */}
            <path 
              d="M50 15L20 40V85H35V60H65V85H80V40L50 15Z" 
              fill="#C60904"
            />
            {/* Roof peak */}
            <path 
              d="M50 15L80 40H85L50 10L15 40H20L50 15Z" 
              fill="#C60904"
            />
            {/* Chimney */}
            <rect x="65" y="25" width="8" height="20" fill="#C60904"/>
          </svg>
        </div>
      )
    }

    if (variant === 'text') {
      return (
        <div ref={ref} className={cn('flex items-center', className)} {...props}>
          <div className="flex flex-col">
            <span className={cn(
              'font-black tracking-tight leading-none text-gray-900',
              {
                'text-base': size === 'xs',
                'text-lg': size === 'sm',
                'text-xl': size === 'md',
                'text-2xl': size === 'lg',
                'text-3xl': size === 'xl'
              }
            )}>
              ULTIMATE
            </span>
            <span className={cn(
              'font-bold tracking-wide leading-none text-primary-500',
              {
                'text-[10px]': size === 'xs',
                'text-xs': size === 'sm',
                'text-sm': size === 'md', 
                'text-base': size === 'lg',
                'text-lg': size === 'xl'
              }
            )}>
              MORTGAGE BROKERS
            </span>
          </div>
        </div>
      )
    }

    // Full logo (default) - Based on official Ultimate Mortgage branding
    return (
      <div ref={ref} className={cn('flex items-center gap-3', className)} {...props}>
        {/* Official Red House Icon */}
        <svg 
          className={cn(sizeClasses[size as keyof typeof sizeClasses] || sizeClasses.sm, 'w-auto flex-shrink-0')} 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Red House Shape - matching official logo */}
          <path 
            d="M50 15L20 40V85H35V60H65V85H80V40L50 15Z" 
            fill="#C60904"
          />
          {/* Roof peak */}
          <path 
            d="M50 15L80 40H85L50 10L15 40H20L50 15Z" 
            fill="#C60904"
          />
          {/* Chimney */}
          <rect x="65" y="25" width="8" height="20" fill="#C60904"/>
        </svg>
        
        {/* Text matching official branding */}
        <div className="flex flex-col">
          <span className={cn(
            'font-black tracking-tight leading-none text-gray-900',
            {
                'text-base': size === 'xs',
                'text-lg': size === 'sm',
                'text-xl': size === 'md',
                'text-2xl': size === 'lg',
                'text-3xl': size === 'xl'
            }
          )}>
            ULTIMATE
          </span>
          <span className={cn(
            'font-bold tracking-wide leading-none text-primary-500',
            {
                'text-[10px]': size === 'xs',
                'text-xs': size === 'sm',
                'text-sm': size === 'md', 
                'text-base': size === 'lg',
                'text-lg': size === 'xl'
            }
          )}>
            MORTGAGE BROKERS
          </span>
        </div>
      </div>
    )
  }
)

Logo.displayName = 'Logo'
