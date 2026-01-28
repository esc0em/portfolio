import { forwardRef } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'
import { cardHover, fadeInUp } from '@/lib/animations'

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  hover?: boolean
  animated?: boolean
  children?: React.ReactNode
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ hover = true, animated = true, className, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          'relative overflow-hidden rounded-3xl',
          'bg-bg-secondary/50 backdrop-blur-sm',
          'border border-glass-border',
          'transition-all duration-300',
          hover && 'cursor-pointer',
          className
        )}
        variants={animated ? { ...fadeInUp, ...cardHover } : cardHover}
        initial={animated ? 'hidden' : 'rest'}
        whileInView={animated ? 'show' : undefined}
        whileHover={hover ? 'hover' : undefined}
        viewport={{ once: true, amount: 0.2 }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'

// Card Header
interface CardHeaderProps {
  className?: string
  children?: React.ReactNode
}

export const CardHeader = ({ className, children }: CardHeaderProps) => (
  <div className={cn('p-6 pb-0', className)}>
    {children}
  </div>
)

// Card Content
interface CardContentProps {
  className?: string
  children?: React.ReactNode
}

export const CardContent = ({ className, children }: CardContentProps) => (
  <div className={cn('p-6', className)}>
    {children}
  </div>
)

// Card Footer
interface CardFooterProps {
  className?: string
  children?: React.ReactNode
}

export const CardFooter = ({ className, children }: CardFooterProps) => (
  <div className={cn('p-6 pt-0 border-t border-glass-border/50', className)}>
    {children}
  </div>
)

// Card Image
interface CardImageProps {
  src: string
  alt: string
  className?: string
  overlay?: boolean
}

export const CardImage = ({ src, alt, className, overlay = true }: CardImageProps) => (
  <div className={cn('relative overflow-hidden', className)}>
    <img 
      src={src} 
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      loading="lazy"
    />
    {overlay && (
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    )}
  </div>
)

export default Card
