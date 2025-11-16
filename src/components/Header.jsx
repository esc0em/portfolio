import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const navLinks = [
  { href: '#about', label: 'Обо мне' },
  { href: '#skills', label: 'Навыки' },
  { href: '#projects', label: 'Проекты' },
  { href: '#services', label: 'Услуги' },
  { href: '#contacts', label: 'Контакты' }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    closeMenu();

    // Если мы не на главной странице, переходим на главную
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Если уже на главной, просто скроллим
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="container header__inner">
        <a className="logo" href="/" onClick={handleLogoClick}>
          <img src="/logo.svg" alt="esc0em DEV Logo" className="logo__img" />
          <span className="logo__accent">esc0em</span> DEV
        </a>

        <nav className={`nav ${isMenuOpen ? 'nav--open' : ''}`}>
          <ul className="nav__list">
            {navLinks.map(link => (
              <li key={link.href} className="nav__item">
                <a 
                  href={link.href} 
                  className="nav__link" 
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn--primary nav__cta" href="https://t.me/esc0em" target="_blank">
            Написать в Telegram
          </a>
        </nav>

        <button
          type="button"
          className={`burger ${isMenuOpen ? 'burger--active' : ''}`}
          onClick={toggleMenu}
          aria-label="Открыть меню"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Header;

