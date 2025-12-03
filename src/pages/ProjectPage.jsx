import { useState, useEffect, useRef } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects.js';
import { FaArrowLeft, FaExternalLinkAlt, FaBullseye, FaLightbulb, FaRocket, FaCogs, FaChevronDown } from 'react-icons/fa';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);
  
  const [activeSection, setActiveSection] = useState('problem');
  const [expandedSections, setExpandedSections] = useState({
    problem: true,
    solution: false,
    result: false,
    stack: false
  });
  
  const problemRef = useRef(null);
  const solutionRef = useRef(null);
  const resultRef = useRef(null);
  const stackRef = useRef(null);
  const screenshotsRef = useRef(null);

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

  // Отслеживание активного раздела при скролле
  useEffect(() => {
    const sections = [
      { id: 'problem', ref: problemRef },
      { id: 'solution', ref: solutionRef },
      { id: 'result', ref: resultRef },
      { id: 'stack', ref: stackRef },
      { id: 'screenshots', ref: screenshotsRef }
    ].filter(s => s.ref.current);

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = sections.find(s => s.ref.current === entry.target)?.id;
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach(section => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, [project]);

  const handleNavClick = (sectionId, e) => {
    e.preventDefault();
    const refs = {
      problem: problemRef,
      solution: solutionRef,
      result: resultRef,
      stack: stackRef,
      screenshots: screenshotsRef
    };
    
    const targetRef = refs[sectionId];
    if (targetRef?.current) {
      const offset = 100; // Отступ от верха для sticky-навигации
      const elementPosition = targetRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleAccordion = (sectionId) => {
    // Аккордеон работает только на мобильных устройствах
    if (window.innerWidth <= 768) {
      setExpandedSections(prev => ({
        ...prev,
        [sectionId]: !prev[sectionId]
      }));
    }
  };

  return (
    <>
      <Header />
      <div className={`project-page project-page--${project.id}`}>
        <div className="project-page__background"></div>
        
        {/* Sticky Navigation */}
        <nav className="project-page__nav">
          <div className="project-page__nav-container">
            <a 
              href="#problem" 
              onClick={(e) => handleNavClick('problem', e)}
              className={`project-page__nav-link ${activeSection === 'problem' ? 'is-active' : ''}`}
            >
              Задача
            </a>
            <a 
              href="#solution" 
              onClick={(e) => handleNavClick('solution', e)}
              className={`project-page__nav-link ${activeSection === 'solution' ? 'is-active' : ''}`}
            >
              Решение
            </a>
            <a 
              href="#result" 
              onClick={(e) => handleNavClick('result', e)}
              className={`project-page__nav-link ${activeSection === 'result' ? 'is-active' : ''}`}
            >
              Результат
            </a>
            <a 
              href="#stack" 
              onClick={(e) => handleNavClick('stack', e)}
              className={`project-page__nav-link ${activeSection === 'stack' ? 'is-active' : ''}`}
            >
              Технологии
            </a>
            {project.screenshots && project.screenshots.length > 0 && (
              <a 
                href="#screenshots" 
                onClick={(e) => handleNavClick('screenshots', e)}
                className={`project-page__nav-link ${activeSection === 'screenshots' ? 'is-active' : ''}`}
              >
                Скриншоты
              </a>
            )}
          </div>
        </nav>
        
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
            <section 
              id="problem" 
              ref={problemRef}
              className={`project-page__timeline-item project-page__timeline-item--left ${expandedSections.problem ? 'is-expanded' : ''}`}
            >
              <div className="project-page__timeline-icon">
                <FaBullseye />
              </div>
              <div className="project-page__timeline-card">
                <button 
                  className="project-page__timeline-toggle"
                  onClick={() => toggleAccordion('problem')}
                  aria-expanded={expandedSections.problem}
                >
                  <div className="project-page__timeline-label">
                    <span className="project-page__timeline-number">01</span>
                    <span className="project-page__timeline-text">Этап</span>
                  </div>
                  <h2 className="project-page__timeline-title">Задача</h2>
                  <span className="project-page__timeline-chevron">
                    <FaChevronDown />
                  </span>
                </button>
                <div className="project-page__timeline-content">
                  <p className="project-page__timeline-description">{project.problem}</p>
                </div>
              </div>
            </section>

            <section 
              id="solution" 
              ref={solutionRef}
              className={`project-page__timeline-item project-page__timeline-item--right ${expandedSections.solution ? 'is-expanded' : ''}`}
            >
              <div className="project-page__timeline-icon">
                <FaLightbulb />
              </div>
              <div className="project-page__timeline-card">
                <button 
                  className="project-page__timeline-toggle"
                  onClick={() => toggleAccordion('solution')}
                  aria-expanded={expandedSections.solution}
                >
                  <div className="project-page__timeline-label">
                    <span className="project-page__timeline-number">02</span>
                    <span className="project-page__timeline-text">Этап</span>
                  </div>
                  <h2 className="project-page__timeline-title">Решение</h2>
                  <span className="project-page__timeline-chevron">
                    <FaChevronDown />
                  </span>
                </button>
                <div className="project-page__timeline-content">
                  <ul className="project-page__timeline-list">
                    {project.solution.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section 
              id="result" 
              ref={resultRef}
              className={`project-page__timeline-item project-page__timeline-item--left ${expandedSections.result ? 'is-expanded' : ''}`}
            >
              <div className="project-page__timeline-icon">
                <FaRocket />
              </div>
              <div className="project-page__timeline-card">
                <button 
                  className="project-page__timeline-toggle"
                  onClick={() => toggleAccordion('result')}
                  aria-expanded={expandedSections.result}
                >
                  <div className="project-page__timeline-label">
                    <span className="project-page__timeline-number">03</span>
                    <span className="project-page__timeline-text">Этап</span>
                  </div>
                  <h2 className="project-page__timeline-title">Результат</h2>
                  <span className="project-page__timeline-chevron">
                    <FaChevronDown />
                  </span>
                </button>
                <div className="project-page__timeline-content">
                  <p className="project-page__timeline-description">{project.result}</p>
                </div>
              </div>
            </section>

            <section 
              id="stack" 
              ref={stackRef}
              className={`project-page__timeline-item project-page__timeline-item--right ${expandedSections.stack ? 'is-expanded' : ''}`}
            >
              <div className="project-page__timeline-icon">
                <FaCogs />
              </div>
              <div className="project-page__timeline-card">
                <button 
                  className="project-page__timeline-toggle"
                  onClick={() => toggleAccordion('stack')}
                  aria-expanded={expandedSections.stack}
                >
                  <div className="project-page__timeline-label">
                    <span className="project-page__timeline-number">04</span>
                    <span className="project-page__timeline-text">Этап</span>
                  </div>
                  <h2 className="project-page__timeline-title">Технологии</h2>
                  <span className="project-page__timeline-chevron">
                    <FaChevronDown />
                  </span>
                </button>
                <div className="project-page__timeline-content">
                  <ul className="project-page__timeline-stack">
                    {project.stack.map(tech => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {project.screenshots && project.screenshots.length > 0 && (
            <section id="screenshots" ref={screenshotsRef} className="project-page__screenshots">
              <div className="project-page__screenshots-header">
                <div className="project-page__timeline-label">
                  <span className="project-page__timeline-number">05</span>
                  <span className="project-page__timeline-text">Демонстрация</span>
                </div>
                <h2 className="project-page__timeline-title">Скриншоты проекта</h2>
              </div>
              <div className="project-page__screenshots-container">
                <div className="project-page__screenshots-scroll">
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

