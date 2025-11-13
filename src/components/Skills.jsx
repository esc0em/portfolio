import { SiPython, SiFastapi, SiHtml5, SiJavascript, SiGithub, SiZapier } from 'react-icons/si';
import SectionTitle from './SectionTitle.jsx';
import { skills } from '../data/skills.js';

const icons = {
  SiPython: <SiPython />,
  SiFastapi: <SiFastapi />,
  SiHtml5: <SiHtml5 />,
  SiJavascript: <SiJavascript />,
  SiGithub: <SiGithub />,
  SiZapier: <SiZapier />
};

const Skills = () => (
  <section className="section section--alt" id="skills" data-animate>
    <div className="container section__inner">
      <SectionTitle title="Навыки" subtitle="Инструменты, с которыми работаю каждый день" />
      <div className="skills">
        {skills.map(skill => (
          <article key={skill.id} className="skills__card">
            <div className="skills__icon">{icons[skill.icon]}</div>
            <h3 className="skills__title">{skill.title}</h3>
            <p className="skills__description">{skill.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;

