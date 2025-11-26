import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects.js';
import { FaArrowLeft, FaExternalLinkAlt, FaBullseye, FaLightbulb, FaRocket, FaCogs } from 'react-icons/fa';
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

          <div className="project-page__timeline">
            <section className="project-page__timeline-item project-page__timeline-item--left">
              <div className="project-page__timeline-icon">
                <FaBullseye />
              </div>
              <div className="project-page__timeline-card">
                <div className="project-page__timeline-label">
                  <span className="project-page__timeline-number">01</span>
                  <span className="project-page__timeline-text">Этап</span>
                </div>
                <h2 className="project-page__timeline-title">Задача</h2>
                <p className="project-page__timeline-description">{project.problem}</p>
              </div>
            </section>

            <section className="project-page__timeline-item project-page__timeline-item--right">
              <div className="project-page__timeline-icon">
                <FaLightbulb />
              </div>
              <div className="project-page__timeline-card">
                <div className="project-page__timeline-label">
                  <span className="project-page__timeline-number">02</span>
                  <span className="project-page__timeline-text">Этап</span>
                </div>
                <h2 className="project-page__timeline-title">Решение</h2>
                <ul className="project-page__timeline-list">
                  {project.solution.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="project-page__timeline-item project-page__timeline-item--left">
              <div className="project-page__timeline-icon">
                <FaRocket />
              </div>
              <div className="project-page__timeline-card">
                <div className="project-page__timeline-label">
                  <span className="project-page__timeline-number">03</span>
                  <span className="project-page__timeline-text">Этап</span>
                </div>
                <h2 className="project-page__timeline-title">Результат</h2>
                <p className="project-page__timeline-description">{project.result}</p>
              </div>
            </section>

            <section className="project-page__timeline-item project-page__timeline-item--right">
              <div className="project-page__timeline-icon">
                <FaCogs />
              </div>
              <div className="project-page__timeline-card">
                <div className="project-page__timeline-label">
                  <span className="project-page__timeline-number">04</span>
                  <span className="project-page__timeline-text">Этап</span>
                </div>
                <h2 className="project-page__timeline-title">Технологии</h2>
                <ul className="project-page__timeline-stack">
                  {project.stack.map(tech => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {project.screenshots && project.screenshots.length > 0 && (
            <section className="project-page__screenshots">
              <div className="project-page__screenshots-header">
                <div className="project-page__timeline-label">
                  <span className="project-page__timeline-number">05</span>
                  <span className="project-page__timeline-text">Демонстрация</span>
                </div>
                <h2 className="project-page__timeline-title">Скриншоты проекта</h2>
              </div>
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
      </div>
      <Footer />
    </>
  );
};

export default ProjectPage;

