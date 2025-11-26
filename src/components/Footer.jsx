const Footer = () => (
  <footer className="footer">
    <div className="container footer__inner">
      <p>© {new Date().getFullYear()} Никита — разработчик Telegram-ботов и сайтов.</p>
      <p>
        Готов обсудить ваш проект: <a href="https://t.me/esc0em" className="footer__link">✨ t.me/esc0em</a>
      </p>
    </div>
  </footer>
);

export default Footer;

