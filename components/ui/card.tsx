import * as React from 'react'
import { cn } from '@/lib/utils'

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: 'default' | 'premium' | 'interactive' | 'glass'
  }
>(({ className, variant = 'default', ...props }, ref) => {
  const variants = {
    default: 'bg-white rounded-2xl border border-gray-100 shadow-soft',
    premium: `bg-white rounded-2xl shadow-premium border border-gray-100/50
              transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]
              hover:shadow-premium-lg hover:-translate-y-1`,
    interactive: `bg-white rounded-2xl shadow-soft border border-gray-100
                  transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer
                  hover:shadow-soft-lg hover:-translate-y-0.5 hover:border-gray-200`,
    glass: `bg-white/80 backdrop-blur-md rounded-2xl border border-white/20 shadow-soft`,
  }

  return (
    <div
      ref={ref}
      className={cn(variants[variant], className)}
      {...props}
    />
  )
})
Card.displayName = 'Card'

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-2 p-6 sm:p-8', className)}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('text-xl sm:text-2xl font-semibold leading-tight tracking-tight text-gray-900', className)}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm sm:text-base text-gray-500 leading-relaxed', className)}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 sm:p-8 pt-0', className)} {...props} />
))
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 sm:p-8 pt-0', className)}
    {...props}
  />
))
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
