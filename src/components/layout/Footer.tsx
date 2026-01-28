import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeInUp } from '@/lib/animations'
import { Github, Send, Mail, Heart } from 'lucide-react'

const socialLinks = [
  {
    label: 'Telegram',
    href: 'https://t.me/esc0em',
    icon: Send
  },
  {
    label: 'GitHub',
    href: 'https://github.com',
    icon: Github
  },
  {
    label: 'Email',
    href: 'mailto:hello@nikita.dev',
    icon: Mail
  }
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 border-t border-glass-border">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center gap-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'p-3 rounded-xl',
                  'bg-white/5 hover:bg-white/10',
                  'border border-glass-border hover:border-accent-purple/50',
                  'text-text-secondary hover:text-accent-purple',
                  'transition-all duration-200'
                )}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-text-secondary text-sm">
              Сделано с{' '}
              <motion.span
                className="inline-block text-accent-pink"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 inline fill-current" />
              </motion.span>
              {' '}в 2024–{currentYear}
            </p>
            <p className="text-text-muted text-xs">
              © Никита. Все права защищены.
            </p>
          </div>

          {/* Tech badge */}
          <motion.div
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-glass-border"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-xs text-text-muted">Powered by</span>
            <span className="text-xs font-medium gradient-text">
              React + Tailwind + Framer Motion
            </span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
