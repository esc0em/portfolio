import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/lib/animations'
import { GlassCard } from '@/components/ui/GlassCard'
import { Code, Zap, Users, Clock, CheckCircle } from 'lucide-react'

const highlights = [
  {
    icon: Code,
    title: '20+ проектов',
    description: 'Telegram-боты и веб-приложения для малого и среднего бизнеса'
  },
  {
    icon: Zap,
    title: 'Быстрый старт',
    description: 'От идеи до MVP за 1-2 недели с итеративными улучшениями'
  },
  {
    icon: Users,
    title: 'Понятное общение',
    description: 'Регулярные демо, прозрачные сроки и техническая поддержка'
  },
  {
    icon: Clock,
    title: '2+ года практики',
    description: 'Опыт в автоматизации, интеграциях и построении воронок'
  }
]

const principles = [
  'Каждый проект решает конкретную бизнес-задачу',
  'Понятный код без лишней сложности',
  'Документация и поддержка после запуска',
  'Честные сроки и прозрачное ценообразование'
]

export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-sm text-accent-cyan mb-4">
            Обо мне
          </span>
          <h2 className="section-title gradient-text mb-4">
            Немного о себе
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            Разрабатываю решения, которые экономят время и увеличивают прибыль
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Photo/Visual */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <GlassCard variant="hero" className="p-2 overflow-hidden">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="/hero/photo_2025-04-15_22-47-43.jpg"
                  alt="Никита"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent" />
                
                {/* Info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Никита</h3>
                  <p className="text-text-secondary">
                    Fullstack Developer, специализация на Telegram-ботах
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold text-text-primary mb-4">
                Привет! Я занимаюсь разработкой уже более 2 лет
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Начинал с простых скриптов на Python, сейчас создаю комплексные решения 
                для бизнеса: от Telegram-ботов с интеграцией в CRM до современных веб-приложений 
                на React.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Мой подход — понять задачу бизнеса и предложить техническое решение, 
                которое будет работать надёжно и приносить результат. Не просто код, 
                а инструмент для роста.
              </p>
            </div>

            {/* Principles */}
            <div className="space-y-3">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" />
                  <span className="text-text-secondary">{principle}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {highlights.map((item, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <GlassCard 
                hover 
                glow="cyan"
                className="p-6 h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-accent-cyan" />
                  </div>
                  <h4 className="text-lg font-semibold text-text-primary mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-text-muted">
                    {item.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
