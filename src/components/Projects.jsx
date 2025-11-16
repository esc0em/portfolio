import { useState } from 'react';
import SectionTitle from './SectionTitle.jsx';
import { projects } from '../data/projects.js';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="section" id="projects" data-animate>
      <div className="container section__inner">
        <SectionTitle title="Проекты и кейсы" subtitle="Реальные задачи для малого бизнеса" />
        <div className="projects__grid">
          {projects.map(project => (
            <button
              type="button"
              key={project.id}
              className="projects__card"
              onClick={() => openModal(project)}
            >
              <h3>{project.title}</h3>
              <p>{project.short}</p>
              <span className="projects__more">Подробнее →</span>
            </button>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" onClick={closeModal} aria-label="Закрыть">
              ✕
            </button>
            <article className="modal__content">
              <h2 className="modal__title">{selectedProject.title}</h2>
              
              <div className="modal__section">
                <h4>Задача</h4>
                <p>{selectedProject.problem}</p>
              </div>
              
              <div className="modal__section">
                <h4>Что сделал</h4>
                <ul className="modal__list">
                  {selectedProject.solution.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="modal__section">
                <h4>Результат</h4>
                <p>{selectedProject.result}</p>
              </div>
              
              <div className="modal__section">
                <h4>Стек</h4>
                <ul className="modal__stack">
                  {selectedProject.stack.map(tech => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

