import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeInUp, staggerContainer, cardHover } from '@/lib/animations'
import { GlassCard } from '@/components/ui/GlassCard'
import { projects } from '@/data/projects'
import { ArrowRight, Image as ImageIcon } from 'lucide-react'

export function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/5 to-transparent pointer-events-none" />

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
            Портфолио
          </span>
          <h2 className="section-title gradient-text mb-4">
            Избранные проекты
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            Каждый проект — это решение реальной бизнес-задачи с измеримым результатом
          </p>
        </motion.div>

        {/* Projects Grid - Bento Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className={cn(
                index === 0 && 'md:col-span-2 md:row-span-2' // Featured project
              )}
            >
              <ProjectCard project={project} featured={index === 0} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: typeof projects[0]
  featured?: boolean
}

function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <motion.div
      className={cn(
        'group relative h-full',
        'rounded-3xl overflow-hidden',
        'bg-bg-secondary/50 backdrop-blur-sm',
        'border border-glass-border',
        'transition-all duration-500',
        'cursor-pointer'
      )}
      variants={cardHover}
      initial="rest"
      whileHover="hover"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent-purple/10 via-transparent to-accent-cyan/10 pointer-events-none" />

      {/* Image or Icon area */}
      <div className={cn(
        'relative overflow-hidden',
        featured ? 'h-64' : 'h-48'
      )}>
        {project.screenshots.length > 0 ? (
          <>
            <img
              src={project.screenshots[0].path}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-bg-secondary/50 to-transparent" />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent-purple/10 to-accent-cyan/10">
            <span className="text-6xl">{project.icon}</span>
          </div>
        )}

        {/* Metrics badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1.5 rounded-full bg-accent-purple/90 text-white text-xs font-semibold backdrop-blur-sm">
            {project.metrics}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={cn(
        'p-6',
        featured && 'md:p-8'
      )}>
        {/* Icon and Title */}
        <div className="flex items-start gap-3 mb-3">
          <span className="text-2xl">{project.icon}</span>
          <h3 className={cn(
            'font-semibold text-text-primary leading-tight',
            featured ? 'text-xl md:text-2xl' : 'text-lg'
          )}>
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className={cn(
          'text-text-secondary mb-4',
          featured ? 'text-base' : 'text-sm',
          'line-clamp-2'
        )}>
          {project.short}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.slice(0, featured ? 5 : 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded-lg bg-white/5 border border-glass-border text-xs text-text-muted"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > (featured ? 5 : 3) && (
            <span className="px-2 py-1 rounded-lg bg-accent-purple/10 border border-accent-purple/20 text-xs text-accent-purple">
              +{project.stack.length - (featured ? 5 : 3)}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-glass-border/50">
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <ImageIcon className="w-4 h-4" />
            <span>{project.screenshots.length} скриншотов</span>
          </div>
          
          <motion.span
            className="flex items-center gap-1 text-sm text-accent-purple font-medium"
            whileHover={{ x: 4 }}
          >
            Подробнее
            <ArrowRight className="w-4 h-4" />
          </motion.span>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
