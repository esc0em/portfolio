import SectionTitle from './SectionTitle.jsx';
import { projects } from '../data/projects.js';

const Projects = ({ activeProjectId, setActiveProjectId }) => {
  const activeProject = projects.find(project => project.id === activeProjectId) ?? projects[0];

  return (
    <section className="section" id="projects" data-animate>
      <div className="container section__inner">
        <SectionTitle title="Проекты и кейсы" subtitle="Реальные задачи для малого бизнеса" />
        <div className="projects">
          <div className="projects__grid">
            {projects.map(project => (
              <button
                type="button"
                key={project.id}
                className={`projects__card ${project.id === activeProject.id ? 'projects__card--active' : ''}`}
                onClick={() => setActiveProjectId(project.id)}
              >
                <h3>{project.title}</h3>
                <p>{project.short}</p>
                <span className="projects__more">Подробнее</span>
              </button>
            ))}
          </div>

          <article className="projects__details" data-animate>
            <h3 className="projects__details-title">{activeProject.title}</h3>
            <div className="projects__details-block">
              <h4>Задача</h4>
              <p>{activeProject.problem}</p>
            </div>
            <div className="projects__details-block">
              <h4>Что сделал</h4>
              <ul>
                {activeProject.solution.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="projects__details-block">
              <h4>Результат</h4>
              <p>{activeProject.result}</p>
            </div>
            <div className="projects__details-block projects__stack">
              <h4>Стек</h4>
              <ul>
                {activeProject.stack.map(tech => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Projects;

