import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { navLinkHover, slideInMenu } from '@/lib/animations'
import { Menu, X } from 'lucide-react'

interface NavItem {
  label: string
  href: string
}

interface NavigationProps {
  items: NavItem[]
  className?: string
}

export function Navigation({ items, className }: NavigationProps) {
  return (
    <nav className={cn('hidden md:flex items-center gap-1', className)}>
      {items.map((item) => (
        <NavLink key={item.href} href={item.href}>
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function NavLink({ href, children, className, onClick }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    onClick?.()
  }

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      className={cn(
        'px-4 py-2 rounded-full',
        'text-sm font-medium text-text-secondary',
        'hover:text-text-primary',
        'transition-colors duration-200',
        className
      )}
      variants={navLinkHover}
      initial="rest"
      whileHover="hover"
    >
      {children}
    </motion.a>
  )
}

// Mobile Navigation
interface MobileNavigationProps {
  items: NavItem[]
  isOpen: boolean
  onClose: () => void
}

export function MobileNavigation({ items, isOpen, onClose }: MobileNavigationProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-bg-secondary z-50 md:hidden"
            variants={slideInMenu}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <div className="p-6">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Закрыть меню"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation items */}
              <nav className="mt-16 flex flex-col gap-2">
                {items.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      if (item.href.startsWith('#')) {
                        e.preventDefault()
                        const element = document.querySelector(item.href)
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' })
                        }
                      }
                      onClose()
                    }}
                    className={cn(
                      'px-4 py-3 rounded-xl',
                      'text-lg font-medium text-text-secondary',
                      'hover:text-text-primary hover:bg-white/5',
                      'transition-all duration-200'
                    )}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: index * 0.1 }
                    }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// Hamburger Menu Button
interface MenuButtonProps {
  isOpen: boolean
  onClick: () => void
  className?: string
}

export function MenuButton({ isOpen, onClick, className }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'p-2 rounded-xl md:hidden',
        'bg-white/5 hover:bg-white/10',
        'border border-glass-border',
        'transition-colors duration-200',
        className
      )}
      aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
    >
      {isOpen ? (
        <X className="w-5 h-5" />
      ) : (
        <Menu className="w-5 h-5" />
      )}
    </button>
  )
}

export default Navigation
