import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Services from './components/Services.jsx';
import Contacts from './components/Contacts.jsx';
import Footer from './components/Footer.jsx';

import { projects } from './data/projects.js';

const App = () => {
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);

  useEffect(() => {
    const elements = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects activeProjectId={activeProjectId} setActiveProjectId={setActiveProjectId} />
        <Services />
        <Contacts />
      </main>
      <Footer />
    </>
  );
};

export default App;

