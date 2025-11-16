import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';
import Services from '../components/Services.jsx';
import Contacts from '../components/Contacts.jsx';
import Footer from '../components/Footer.jsx';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contacts />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;

