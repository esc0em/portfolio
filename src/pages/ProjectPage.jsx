import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects.js';
import { FaArrowLeft, FaExternalLinkAlt, FaBullseye, FaLightbulb, FaRocket, FaCogs, FaCode } from 'react-icons/fa';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const getProjectIcon = (projectId) => {
    const icons = {
      'detailing-bot': '🚗',
      'periphery-shop': '⌨️',
      'stories-bot': '📖',
      'paintultra-bot': '🎨',
      'cryptobot': '₿'
    };
    return icons[projectId] || '🚀';
  };

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
            {/* Заголовок проекта */}
            <header className="project-page__header">
              <div className="project-page__header-icon">{getProjectIcon(project.id)}</div>
              <h1 className="project-page__title">{project.title}</h1>
              <p className="project-page__subtitle">{project.short}</p>
            </header>

            {/* Основные секции */}
            <div className="project-page__sections">
              {/* Задача */}
              <section className="project-page__section">
                <div className="project-page__section-header">
                  <div className="project-page__section-icon">
                    <FaBullseye />
                  </div>
                  <h2 className="project-page__section-title">Задача</h2>
                </div>
                <div className="project-page__section-content">
                  <p>{project.problem}</p>
                </div>
              </section>

              {/* Решение */}
              <section className="project-page__section">
                <div className="project-page__section-header">
                  <div className="project-page__section-icon">
                    <FaLightbulb />
                  </div>
                  <h2 className="project-page__section-title">Решение</h2>
                </div>
                <div className="project-page__section-content">
                  <ul className="project-page__solution-list">
                    {project.solution.map((item, index) => (
                      <li key={index}>
                        <span className="project-page__solution-number">{index + 1}</span>
                        <span className="project-page__solution-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Результат */}
              <section className="project-page__section">
                <div className="project-page__section-header">
                  <div className="project-page__section-icon">
                    <FaRocket />
                  </div>
                  <h2 className="project-page__section-title">Результат</h2>
                </div>
                <div className="project-page__section-content">
                  <p>{project.result}</p>
                </div>
              </section>

              {/* Технологии */}
              <section className="project-page__section">
                <div className="project-page__section-header">
                  <div className="project-page__section-icon">
                    <FaCogs />
                  </div>
                  <h2 className="project-page__section-title">Технологии</h2>
                </div>
                <div className="project-page__section-content">
                  <div className="project-page__tech-grid">
                    {project.stack.map((tech, index) => (
                      <div key={index} className="project-page__tech-item">
                        <FaCode className="project-page__tech-icon" />
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Скриншоты */}
              {project.screenshots && project.screenshots.length > 0 && (
                <section className="project-page__section project-page__section--screenshots">
                  <div className="project-page__section-header">
                    <div className="project-page__section-icon">
                      <FaRocket />
                    </div>
                    <h2 className="project-page__section-title">Скриншоты проекта</h2>
                  </div>
                  <div className="project-page__screenshots-grid">
                    {project.screenshots.map((screenshot, index) => (
                      <div key={index} className="project-page__screenshot-item">
                        <div className="project-page__screenshot-image">
                          <img 
                            src={screenshot.path} 
                            alt={screenshot.caption}
                            loading="lazy"
                          />
                        </div>
                        <p className="project-page__screenshot-caption">{screenshot.caption}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Футер с CTA */}
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
