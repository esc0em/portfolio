import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects.js';
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const handleBackToProjects = (e) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('contacts');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <Header />
      <div className={`project-page project-page--${project.id}`}>
        <div className="project-page__background"></div>
        
        <div className="project-page__container">
          <button onClick={handleBackToProjects} className="project-page__back">
            <FaArrowLeft /> Вернуться к проектам
          </button>

        <article className="project-page__content">
          <header className="project-page__header">
            <h1 className="project-page__title">{project.title}</h1>
            <p className="project-page__subtitle">{project.short}</p>
          </header>

          <div className="project-page__grid">
            <section className="project-page__section">
              <div className="project-page__card">
                <h2 className="project-page__section-title">
                  <span className="project-page__number">01</span>
                  Задача
                </h2>
                <p className="project-page__text">{project.problem}</p>
              </div>
            </section>

            <section className="project-page__section">
              <div className="project-page__card">
                <h2 className="project-page__section-title">
                  <span className="project-page__number">02</span>
                  Решение
                </h2>
                <ul className="project-page__list">
                  {project.solution.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="project-page__section">
              <div className="project-page__card">
                <h2 className="project-page__section-title">
                  <span className="project-page__number">03</span>
                  Результат
                </h2>
                <p className="project-page__text">{project.result}</p>
              </div>
            </section>

            <section className="project-page__section">
              <div className="project-page__card">
                <h2 className="project-page__section-title">
                  <span className="project-page__number">04</span>
                  Технологии
                </h2>
                <ul className="project-page__stack">
                  {project.stack.map(tech => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {project.screenshots && project.screenshots.length > 0 && (
            <section className="project-page__screenshots">
              <h2 className="project-page__section-title">
                <span className="project-page__number">05</span>
                Скриншоты проекта
              </h2>
              <div className="project-page__screenshots-grid">
                {project.screenshots.map((screenshot, index) => (
                  <div key={index} className="project-page__screenshot">
                    <img 
                      src={screenshot.path} 
                      alt={screenshot.caption}
                      loading="lazy"
                    />
                    <p className="project-page__screenshot-caption">{screenshot.caption}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <footer className="project-page__footer">
            <button onClick={handleContactClick} className="project-page__cta">
              Обсудить проект <FaExternalLinkAlt />
            </button>
          </footer>
        </article>
      </div>
      <Footer />
    </>
  );
};

export default ProjectPage;

