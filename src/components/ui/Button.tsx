import { forwardRef, ButtonHTMLAttributes } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'
import { buttonHover } from '@/lib/animations'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'glass'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  loading?: boolean
  children?: React.ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: `
    bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-pink
    text-white font-semibold
    shadow-lg hover:shadow-xl hover:shadow-accent-purple/25
    border-0
  `,
  secondary: `
    bg-bg-secondary text-text-primary
    border border-glass-border
    hover:bg-bg-tertiary hover:border-accent-purple/50
  `,
  ghost: `
    bg-transparent text-text-secondary
    hover:text-text-primary hover:bg-white/5
    border border-transparent hover:border-glass-border
  `,
  glass: `
    glass-button text-text-primary
    hover:bg-white/20
  `
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-2xl'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'left',
    loading = false,
    disabled,
    className,
    children,
    ...props
  }, ref) => {
    const isDisabled = disabled || loading

    return (
      <motion.button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2',
          'font-medium transition-colors duration-200',
          'focus:outline-none focus:ring-2 focus:ring-accent-purple/50 focus:ring-offset-2 focus:ring-offset-bg-primary',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        variants={buttonHover}
        initial="rest"
        whileHover={isDisabled ? undefined : "hover"}
        whileTap={isDisabled ? undefined : "tap"}
        disabled={isDisabled}
        {...props}
      >
        {loading ? (
          <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
            {children}
            {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
          </>
        )}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

// Link styled as button
interface ButtonLinkProps extends Omit<HTMLMotionProps<'a'>, 'children'> {
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  children?: React.ReactNode
}

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ 
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'left',
    className,
    children,
    ...props
  }, ref) => {
    return (
      <motion.a
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2',
          'font-medium transition-colors duration-200',
          'focus:outline-none focus:ring-2 focus:ring-accent-purple/50',
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        variants={buttonHover}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        {...props}
      >
        {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
      </motion.a>
    )
  }
)

ButtonLink.displayName = 'ButtonLink'

export default Button
