import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeInUp, fadeInLeft, fadeInRight, scaleIn } from '@/lib/animations'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button, ButtonLink } from '@/components/ui/Button'
import { Send, Mail, MessageCircle, Github, Clock, CheckCircle } from 'lucide-react'

const contactMethods = [
  {
    icon: Send,
    label: 'Telegram',
    value: '@esc0em',
    href: 'https://t.me/esc0em',
    description: 'Самый быстрый способ связаться',
    primary: true
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@nikita.dev',
    href: 'mailto:hello@nikita.dev',
    description: 'Для официальных запросов'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/nikita',
    href: 'https://github.com',
    description: 'Мои open-source проекты'
  }
]

const workingHours = [
  { day: 'Пн-Пт', hours: '10:00 - 20:00' },
  { day: 'Сб', hours: '12:00 - 18:00' },
  { day: 'Вс', hours: 'Выходной' }
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    
    // Reset success state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-sm text-accent-purple mb-4">
            Контакты
          </span>
          <h2 className="section-title gradient-text mb-4">
            Давайте работать вместе
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            Расскажите о вашем проекте — обсудим детали и найдём лучшее решение
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Form */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <GlassCard variant="hero" className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className={cn(
                      'w-full px-4 py-3 rounded-xl',
                      'bg-white/5 border border-glass-border',
                      'text-text-primary placeholder-text-muted',
                      'focus:outline-none focus:border-accent-purple/50 focus:ring-2 focus:ring-accent-purple/20',
                      'transition-all duration-200'
                    )}
                    placeholder="Как к вам обращаться?"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className={cn(
                      'w-full px-4 py-3 rounded-xl',
                      'bg-white/5 border border-glass-border',
                      'text-text-primary placeholder-text-muted',
                      'focus:outline-none focus:border-accent-purple/50 focus:ring-2 focus:ring-accent-purple/20',
                      'transition-all duration-200'
                    )}
                    placeholder="email@example.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Сообщение
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className={cn(
                      'w-full px-4 py-3 rounded-xl resize-none',
                      'bg-white/5 border border-glass-border',
                      'text-text-primary placeholder-text-muted',
                      'focus:outline-none focus:border-accent-purple/50 focus:ring-2 focus:ring-accent-purple/20',
                      'transition-all duration-200'
                    )}
                    placeholder="Расскажите о вашем проекте..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  loading={isSubmitting}
                  icon={isSubmitted ? <CheckCircle className="w-5 h-5" /> : <Send className="w-5 h-5" />}
                >
                  {isSubmitted ? 'Отправлено!' : 'Отправить сообщение'}
                </Button>
              </form>
            </GlassCard>
          </motion.div>

          {/* Right - Contact Methods */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Methods */}
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard 
                  hover 
                  glow={method.primary ? 'purple' : null}
                  className={cn(
                    'p-6',
                    method.primary && 'border-accent-purple/30'
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      'w-12 h-12 rounded-xl flex items-center justify-center',
                      method.primary 
                        ? 'bg-accent-purple/20 text-accent-purple' 
                        : 'bg-white/5 text-text-secondary'
                    )}>
                      <method.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">
                        {method.label}
                      </h4>
                      <p className="text-accent-purple font-medium mb-1">
                        {method.value}
                      </p>
                      <p className="text-sm text-text-muted">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.a>
            ))}

            {/* Working Hours */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <GlassCard className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-accent-cyan" />
                  <h4 className="font-semibold text-text-primary">
                    Время работы (МСК)
                  </h4>
                </div>
                <div className="space-y-2">
                  {workingHours.map((item) => (
                    <div 
                      key={item.day}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-text-muted">{item.day}</span>
                      <span className="text-text-secondary">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            {/* Quick Note */}
            <div className="text-center p-4 rounded-xl bg-accent-purple/5 border border-accent-purple/10">
              <p className="text-sm text-text-muted">
                💡 Обычно отвечаю в течение <span className="text-accent-purple">2-4 часов</span> в рабочее время
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
