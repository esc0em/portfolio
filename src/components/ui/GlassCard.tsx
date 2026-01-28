import { forwardRef, HTMLAttributes } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'
import { cardHover } from '@/lib/animations'

type GlassVariant = 'default' | 'hero' | 'nav' | 'button'

interface GlassCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  variant?: GlassVariant
  hover?: boolean
  glow?: 'purple' | 'cyan' | 'pink' | null
  children?: React.ReactNode
}

const variantClasses: Record<GlassVariant, string> = {
  default: 'glass-card',
  hero: 'glass-hero',
  nav: 'glass-nav',
  button: 'glass-button'
}

const glowClasses: Record<string, string> = {
  purple: 'hover:shadow-glow-purple',
  cyan: 'hover:shadow-glow-cyan',
  pink: 'hover:shadow-glow-pink'
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ 
    variant = 'default', 
    hover = false, 
    glow = null, 
    className, 
    children,
    ...props 
  }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          variantClasses[variant],
          hover && 'cursor-pointer transition-all duration-300',
          glow && glowClasses[glow],
          className
        )}
        variants={hover ? cardHover : undefined}
        initial={hover ? 'rest' : undefined}
        whileHover={hover ? 'hover' : undefined}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

GlassCard.displayName = 'GlassCard'

// Simple non-motion version for static elements
interface StaticGlassCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: GlassVariant
  glow?: 'purple' | 'cyan' | 'pink' | null
}

export const StaticGlassCard = forwardRef<HTMLDivElement, StaticGlassCardProps>(
  ({ variant = 'default', glow = null, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          variantClasses[variant],
          glow && glowClasses[glow],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

StaticGlassCard.displayName = 'StaticGlassCard'

export default GlassCard
