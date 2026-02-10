'use client'

import { motion, useInView, type Variants } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

// Animation variants
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
}

// Stagger container for children animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
}

// Default transition
const defaultTransition = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1] as const, // Premium easing
}

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  variants?: Variants
  delay?: number
  once?: boolean
  amount?: number
}

// Animated section that triggers on scroll
export function AnimatedSection({
  children,
  className = '',
  variants = fadeInUp,
  delay = 0,
  once = true,
  amount = 0.2,
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ ...defaultTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Animated container for staggered children
export function AnimatedContainer({
  children,
  className = '',
  variants = staggerContainer,
  delay = 0,
  once = true,
  amount = 0.2,
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Individual animated item (for use inside AnimatedContainer)
interface AnimatedItemProps {
  children: ReactNode
  className?: string
  variants?: Variants
}

export function AnimatedItem({
  children,
  className = '',
  variants = fadeInUp,
}: AnimatedItemProps) {
  return (
    <motion.div variants={variants} transition={defaultTransition} className={className}>
      {children}
    </motion.div>
  )
}

// Animated text with character-by-character animation
interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
}

export function AnimatedText({ text, className = '', delay = 0 }: AnimatedTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const words = text.split(' ')

  return (
    <motion.span ref={ref} className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{
                duration: 0.3,
                delay: delay + wordIndex * 0.1 + charIndex * 0.02,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
          <span className="inline-block">&nbsp;</span>
        </span>
      ))}
    </motion.span>
  )
}

// Hover scale animation wrapper
interface HoverScaleProps {
  children: ReactNode
  className?: string
  scale?: number
}

export function HoverScale({ children, className = '', scale = 1.02 }: HoverScaleProps) {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Page transition wrapper
interface PageTransitionProps {
  children: ReactNode
  className?: string
}

export function PageTransition({ children, className = '' }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Export motion for direct use
export { motion }
