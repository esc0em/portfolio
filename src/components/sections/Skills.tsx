import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeInUp, staggerContainer, staggerFast } from '@/lib/animations'
import { GlassCard } from '@/components/ui/GlassCard'
import { skills } from '@/data/skills'
import { Sparkles } from 'lucide-react'

// Additional tech for floating pills
const techPills = [
  'Python', 'Aiogram 3', 'FastAPI', 'React', 'TypeScript', 
  'Tailwind CSS', 'PostgreSQL', 'SQLite', 'Redis', 'Docker',
  'Git', 'REST API', 'Telegram Bot API', 'Google APIs', 
  'Framer Motion', 'Vite', 'amoCRM', 'Webhooks'
]

export function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-pink/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent-pink/10 border border-accent-pink/20 text-sm text-accent-pink mb-4">
            Технологии
          </span>
          <h2 className="section-title gradient-text mb-4">
            Мой стек
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            Инструменты, которые использую для решения бизнес-задач
          </p>
        </motion.div>

        {/* Floating Tech Pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16 max-w-4xl mx-auto"
          variants={staggerFast}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {techPills.map((tech, index) => (
            <motion.span
              key={tech}
              variants={fadeInUp}
              className={cn(
                'px-4 py-2 rounded-full',
                'text-sm font-medium',
                'border transition-all duration-300',
                'hover:scale-105 cursor-default',
                // Vary colors
                index % 3 === 0 && 'bg-accent-purple/10 border-accent-purple/20 text-accent-purple hover:bg-accent-purple/20',
                index % 3 === 1 && 'bg-accent-cyan/10 border-accent-cyan/20 text-accent-cyan hover:bg-accent-cyan/20',
                index % 3 === 2 && 'bg-accent-pink/10 border-accent-pink/20 text-accent-pink hover:bg-accent-pink/20'
              )}
              whileHover={{ y: -4 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Skills Cards Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map((skill) => (
            <motion.div key={skill.id} variants={fadeInUp}>
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

interface SkillCardProps {
  skill: typeof skills[0]
}

function SkillCard({ skill }: SkillCardProps) {
  return (
    <GlassCard 
      hover 
      glow={skill.isBusinessCritical ? 'purple' : null}
      className={cn(
        'p-6 h-full relative',
        skill.isBusinessCritical && 'border-accent-purple/30'
      )}
    >
      {/* Business critical badge */}
      {skill.isBusinessCritical && (
        <div className="absolute top-4 right-4">
          <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-accent-purple/20 text-xs text-accent-purple">
            <Sparkles className="w-3 h-3" />
            Core
          </span>
        </div>
      )}

      <div className="flex flex-col h-full">
        {/* Icon */}
        <div className={cn(
          'w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4',
          skill.isBusinessCritical 
            ? 'bg-accent-purple/10 border border-accent-purple/20' 
            : 'bg-white/5 border border-glass-border'
        )}>
          {skill.icon}
        </div>

        {/* Title */}
        <h3 className={cn(
          'text-lg font-semibold mb-2',
          skill.isBusinessCritical ? 'text-accent-purple' : 'text-text-primary'
        )}>
          {skill.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-secondary mb-4 flex-grow">
          {skill.description}
        </p>

        {/* Business example */}
        <div className="pt-4 border-t border-glass-border/50">
          <p className="text-xs text-text-muted">
            <span className="text-accent-cyan">Применение:</span> {skill.businessExample}
          </p>
        </div>
      </div>
    </GlassCard>
  )
}

export default Skills
