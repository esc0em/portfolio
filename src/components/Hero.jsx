const Hero = () => (
  <section className="hero" id="top" data-animate>
    <div className="container hero__inner">
      <div className="hero__content">
        <div className="hero__intro">
          <p className="hero__eyebrow">
            <span className="hero__wave">👋</span> Привет! Я Никита
          </p>
          <h1 className="hero__title">
            Разрабатываю <span className="hero__highlight">Telegram-ботов</span> и{' '}
            <span className="hero__highlight">адаптивные сайты</span> для малого бизнеса
          </h1>
          <p className="hero__text">
            Помогаю предпринимателям быстрее обрабатывать заявки, автоматизировать рутину и делать цифровые продукты,
            которыми удобно пользоваться. Беру на себя коммуникацию, сроки и поддержку после запуска.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="https://t.me/esc0em" target="_blank" rel="noopener noreferrer">
              <span>✉️</span> Написать в Telegram
            </a>
            <a className="btn btn--ghost" href="#projects">
              <span>🚀</span> Посмотреть проекты
            </a>
          </div>
        </div>
        <div className="hero__badge">
          <span className="hero__badge-title">2+ года</span>
          <span className="hero__badge-text">Практики в ботовой автоматизации и веб-разработке</span>
        </div>
      </div>
      <div className="hero__visual" aria-hidden="true">
        <div className="hero__frame">
          <img src="/hero/screen-main.jpg" alt="Пример интерфейса из портфолио Никиты" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;

