import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useScrolled } from '@/hooks/useScrollAnimation'
import { Navigation, MobileNavigation, MenuButton } from '@/components/ui/Navigation'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { ButtonLink } from '@/components/ui/Button'
import { Send } from 'lucide-react'

const navItems = [
  { label: 'Проекты', href: '#projects' },
  { label: 'Обо мне', href: '#about' },
  { label: 'Навыки', href: '#skills' },
  { label: 'Контакты', href: '#contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isScrolled = useScrolled(50)

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-4 left-1/2 -translate-x-1/2 z-50',
          'px-4 sm:px-6 py-3',
          'transition-all duration-300',
          isScrolled ? 'glass-nav' : 'bg-transparent'
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <nav className="flex items-center gap-4 sm:gap-8">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src="/logo.svg" 
              alt="Logo" 
              className="w-8 h-8"
            />
            <span className="font-bold text-lg hidden sm:block">
              <span className="text-text-primary">Никита</span>
              <span className="gradient-text">.dev</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <Navigation items={navItems} />

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            
            <ButtonLink
              href="https://t.me/esc0em"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="sm"
              icon={<Send className="w-4 h-4" />}
              className="hidden sm:inline-flex"
            >
              Telegram
            </ButtonLink>

            {/* Mobile menu button */}
            <MenuButton 
              isOpen={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </div>
        </nav>
      </motion.header>

      {/* Mobile Navigation */}
      <MobileNavigation 
        items={navItems}
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  )
}

export default Header
