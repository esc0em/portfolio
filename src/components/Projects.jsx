import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle.jsx';
import { projects } from '../data/projects.js';

const Projects = () => {
  return (
    <section className="section" id="projects" data-animate>
      <div className="container section__inner">
        <SectionTitle title="Проекты и кейсы" subtitle="Реальные задачи для малого бизнеса" />
        <div className="projects__grid">
          {projects.map(project => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="projects__card"
            >
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

