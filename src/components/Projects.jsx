import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle.jsx';
import { projects } from '../data/projects.js';
import { FaChevronRight, FaCode, FaRocket } from 'react-icons/fa';

const Projects = () => {
  const getProjectIcon = (id) => {
    const icons = {
      'detailing-bot': '🚗',
      'periphery-shop': '⌨️',
      'stories-bot': '📖',
      'paintultra-bot': '🎨',
      'cryptobot': '₿'
    };
    return icons[id] || '🚀';
  };

  return (
    <section className="section" id="projects" data-animate>
      <div className="container section__inner">
        <SectionTitle title="Проекты и кейсы" subtitle="Реальные задачи для малого бизнеса" />
        
        <div className="projects__grid-new">
          {projects.map((project, index) => {
            return (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="projects__card-new"
                style={{ '--index': index }}
              >
                <div className="projects__card-content">
                  <div className="projects__card-header">
                    <div className="projects__card-icon">{getProjectIcon(project.id)}</div>
                    <div className="projects__card-badge">
                      <FaCode /> {project.stack.length} технологий
                    </div>
                  </div>

                  <h3 className="projects__card-title">{project.title}</h3>
                  <p className="projects__card-description">{project.short}</p>

                  <div className="projects__card-tech">
                    {project.stack.slice(0, 4).map((tech, techIndex) => (
                      <span key={techIndex} className="projects__tech-tag">
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="projects__tech-tag projects__tech-tag--more">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="projects__card-footer">
                    <span className="projects__card-link">
                      Подробнее <FaChevronRight />
                    </span>
                    {project.screenshots && project.screenshots.length > 0 && (
                      <span className="projects__card-screenshots">
                        <FaRocket /> {project.screenshots.length} скриншотов
                      </span>
                    )}
                  </div>
                </div>

                <div className="projects__card-glow"></div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
