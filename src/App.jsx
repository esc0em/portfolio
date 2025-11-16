import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ProjectPage from './pages/ProjectPage.jsx';

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
};

const AnimationObserver = () => {
  const location = useLocation();

  useEffect(() => {
    let observer = null;
    
    // Небольшая задержка, чтобы DOM успел отрендериться
    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll('[data-animate]');

      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '50px' }
      );

      elements.forEach(element => {
        // Убираем старый класс, если он был
        element.classList.remove('is-visible');
        observer.observe(element);
      });
    }, 50);

    return () => {
      clearTimeout(timeoutId);
      if (observer) observer.disconnect();
    };
  }, [location.pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToSection />
      <AnimationObserver />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
};

export default App;

