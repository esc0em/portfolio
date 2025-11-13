import { useState } from 'react';

const navLinks = [
  { href: '#about', label: 'Обо мне' },
  { href: '#skills', label: 'Навыки' },
  { href: '#projects', label: 'Проекты' },
  { href: '#services', label: 'Услуги' },
  { href: '#contacts', label: 'Контакты' }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <a className="logo" href="#top" onClick={closeMenu}>
          <span className="logo__accent">esc0em</span> DEV
        </a>

        <nav className={`nav ${isMenuOpen ? 'nav--open' : ''}`}>
          <ul className="nav__list">
            {navLinks.map(link => (
              <li key={link.href} className="nav__item">
                <a href={link.href} className="nav__link" onClick={closeMenu}>
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

