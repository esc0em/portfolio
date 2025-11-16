import { useState, useRef } from 'react';
import SectionTitle from './SectionTitle.jsx';
import { projects } from '../data/projects.js';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentScreenshot(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentScreenshot(0);
    document.body.style.overflow = 'unset';
  };

  const nextScreenshot = () => {
    if (selectedProject?.screenshots) {
      setCurrentScreenshot((prev) => 
        prev < selectedProject.screenshots.length - 1 ? prev + 1 : prev
      );
    }
  };

  const prevScreenshot = () => {
    setCurrentScreenshot((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!selectedProject?.screenshots) return;
    
    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        // Свайп влево - следующий
        nextScreenshot();
      } else {
        // Свайп вправо - предыдущий
        prevScreenshot();
      }
    }
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
        <div className="project-viewer" onClick={closeModal}>
          <div className="project-viewer__inner" onClick={(e) => e.stopPropagation()}>
            <button className="project-viewer__close" onClick={closeModal} aria-label="Закрыть">
              ✕
            </button>

            {selectedProject.screenshots && selectedProject.screenshots.length > 0 ? (
              <div className="project-viewer__split">
                {/* Галерея */}
                <div 
                  className="project-gallery"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <div className="project-gallery__main">
                    <img
                      src={selectedProject.screenshots[currentScreenshot].path}
                      alt={selectedProject.screenshots[currentScreenshot].caption}
                      className="project-gallery__image"
                    />
                    <div className="project-gallery__overlay">
                      <div className="project-gallery__counter">
                        {currentScreenshot + 1} / {selectedProject.screenshots.length}
                      </div>
                      <p className="project-gallery__caption">
                        {selectedProject.screenshots[currentScreenshot].caption}
                      </p>
                    </div>
                  </div>

                  <div className="project-gallery__nav">
                    <button
                      className="project-gallery__arrow project-gallery__arrow--prev"
                      onClick={prevScreenshot}
                      disabled={currentScreenshot === 0}
                      aria-label="Предыдущий"
                    >
                      ‹
                    </button>
                    <div className="project-gallery__dots">
                      {selectedProject.screenshots.map((_, index) => (
                        <button
                          key={index}
                          className={`project-gallery__dot ${
                            index === currentScreenshot ? 'active' : ''
                          }`}
                          onClick={() => setCurrentScreenshot(index)}
                          aria-label={`Скриншот ${index + 1}`}
                        />
                      ))}
                    </div>
                    <button
                      className="project-gallery__arrow project-gallery__arrow--next"
                      onClick={nextScreenshot}
                      disabled={currentScreenshot === selectedProject.screenshots.length - 1}
                      aria-label="Следующий"
                    >
                      ›
                    </button>
                  </div>
                </div>

                {/* Информация */}
                <div className="project-info">
                  <div className="project-info__content">
                    <h2 className="project-info__title">{selectedProject.title}</h2>
                    
                    <div className="project-info__section">
                      <h4>Задача</h4>
                      <p>{selectedProject.problem}</p>
                    </div>
                    
                    <div className="project-info__section">
                      <h4>Что сделал</h4>
                      <ul className="project-info__list">
                        {selectedProject.solution.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="project-info__section">
                      <h4>Результат</h4>
                      <p>{selectedProject.result}</p>
                    </div>
                    
                    <div className="project-info__section">
                      <h4>Стек</h4>
                      <ul className="project-info__stack">
                        {selectedProject.stack.map(tech => (
                          <li key={tech}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="project-info project-info--full">
                <div className="project-info__content">
                  <h2 className="project-info__title">{selectedProject.title}</h2>
                  
                  <div className="project-info__section">
                    <h4>Задача</h4>
                    <p>{selectedProject.problem}</p>
                  </div>
                  
                  <div className="project-info__section">
                    <h4>Что сделал</h4>
                    <ul className="project-info__list">
                      {selectedProject.solution.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="project-info__section">
                    <h4>Результат</h4>
                    <p>{selectedProject.result}</p>
                  </div>
                  
                  <div className="project-info__section">
                    <h4>Стек</h4>
                    <ul className="project-info__stack">
                      {selectedProject.stack.map(tech => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

