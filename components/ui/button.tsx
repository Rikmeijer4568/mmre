import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium
   transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
   disabled:pointer-events-none disabled:opacity-50
   active:scale-[0.98]`,
  {
    variants: {
      variant: {
        default: `bg-accent text-white shadow-soft
                  hover:bg-accent-light hover:shadow-soft-md hover:-translate-y-0.5
                  focus-visible:ring-accent`,
        secondary: `bg-gray-100 text-gray-900 shadow-soft
                    hover:bg-gray-200 hover:shadow-soft-md hover:-translate-y-0.5`,
        outline: `border-2 border-accent text-accent bg-transparent
                  hover:bg-primary-50 hover:shadow-soft hover:-translate-y-0.5`,
        ghost: `text-gray-700 hover:bg-gray-100 hover:text-gray-900`,
        whatsapp: `bg-whatsapp text-white shadow-soft
                   hover:bg-green-600 hover:shadow-soft-md hover:-translate-y-0.5
                   hover:shadow-[0_4px_20px_rgba(37,211,102,0.3)]`,
        destructive: `bg-red-600 text-white shadow-soft
                      hover:bg-red-700 hover:shadow-soft-md`,
        highlight: `bg-primary-50 text-accent border border-primary-100
                    hover:bg-primary-100 hover:shadow-soft hover:-translate-y-0.5`,
        premium: `bg-gradient-to-r from-accent to-accent-light text-white shadow-soft-md
                  hover:shadow-glow hover:-translate-y-0.5
                  focus-visible:ring-accent`,
        glass: `bg-white/80 backdrop-blur-sm text-gray-900 border border-gray-200/50 shadow-soft
                hover:bg-white hover:shadow-soft-md hover:-translate-y-0.5`,
      },
      size: {
        default: 'h-11 px-6 py-2.5',
        sm: 'h-9 px-4 text-sm',
        lg: 'h-14 px-8 text-base font-semibold',
        xl: 'h-16 px-10 text-lg font-semibold',
        icon: 'h-10 w-10',
        'icon-sm': 'h-8 w-8',
        'icon-lg': 'h-12 w-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
