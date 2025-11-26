import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle.jsx';
import { projects } from '../data/projects.js';

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
        <div className="projects__grid">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="projects__card"
              style={{ '--index': index }}
            >
              <div className="projects__icon">{getProjectIcon(project.id)}</div>
              <h3>{project.title}</h3>
              <p>{project.short}</p>
              <span className="projects__more">Подробнее →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

