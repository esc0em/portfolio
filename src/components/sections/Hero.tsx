import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeInUp, scaleIn, blobFloat, blobFloatAlt, scrollIndicator } from '@/lib/animations'
import { GlassCard } from '@/components/ui/GlassCard'
import { ButtonLink } from '@/components/ui/Button'
import { ChevronDown, Send, ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Purple blob */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent-purple/30 blur-[100px]"
          variants={blobFloat}
          animate="animate"
        />
        
        {/* Cyan blob */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-accent-cyan/25 blur-[80px]"
          variants={blobFloatAlt}
          animate="animate"
        />
        
        {/* Pink blob */}
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-accent-pink/20 blur-[90px]"
          variants={blobFloat}
          animate="animate"
          style={{ animationDelay: '-10s' }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-glass-border text-sm text-text-secondary">
              <span className="animate-bounce-slow">👋</span>
              Привет! Я Никита
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="hero-title mb-8"
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.1 }}
          >
            <span className="text-text-primary">Создаю </span>
            <span className="gradient-text">Telegram-ботов</span>
            <br className="hidden sm:block" />
            <span className="text-text-primary"> и </span>
            <span className="gradient-text">современные сайты</span>
          </motion.h1>

          {/* Subtitle in glass card */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
          >
            <GlassCard 
              variant="hero" 
              className="inline-block px-8 py-4 mb-10"
            >
              <p className="text-xl sm:text-2xl text-text-secondary">
                Frontend Developer & Bot Automation Expert
              </p>
            </GlassCard>
          </motion.div>

          {/* Description */}
          <motion.p
            className="body-text max-w-2xl mx-auto mb-10"
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 }}
          >
            Помогаю предпринимателям автоматизировать рутину, быстрее обрабатывать заявки 
            и создавать цифровые продукты, которыми удобно пользоваться.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mb-10"
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.35 }}
          >
            {[
              { value: '20+', label: 'Проектов' },
              { value: '2+', label: 'Года опыта' },
              { value: '40%', label: 'Снижение неявок' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-text-muted">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.4 }}
          >
            <ButtonLink
              href="https://t.me/esc0em"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              icon={<Send className="w-5 h-5" />}
            >
              Обсудить проект
            </ButtonLink>
            
            <ButtonLink
              href="#projects"
              variant="ghost"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Смотреть проекты
            </ButtonLink>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        variants={scrollIndicator}
        animate="animate"
      >
        <div className="flex flex-col items-center gap-2 text-text-muted">
          <span className="text-xs uppercase tracking-wider">Скролл</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
