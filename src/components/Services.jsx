import SectionTitle from './SectionTitle.jsx';

const services = [
  {
    title: 'Telegram-бот под ключ',
    description:
      'Прорабатываю сценарии, создаю структуру, подключаю платежи, интеграции и админ-панель. Включена поддержка после запуска.',
    price: 'от 7 000 ₽'
  },
  {
    title: 'Доработка или поддержка бота',
    description:
      'Разбираю текущий код, чиню ошибки, добавляю новые функции, подключаю статистику и помогаю с инфраструктурой.',
    price: 'от 1 500 ₽ за час или фиксированно по задаче'
  },
  {
    title: 'Лендинг или сайт-визитка',
    description:
      'Собираю современный адаптивный сайт на React/Vite, настраиваю формы заявок и подключаю аналитику.',
    price: 'от 15 000 ₽'
  }
];

const Services = () => (
  <section className="section" id="services" data-animate>
    <div className="container section__inner">
      <SectionTitle title="Чем могу помочь" subtitle="Услуги и ориентиры по стоимости" />
      <div className="services">
        {services.map((service, index) => (
          <article key={service.title} className="services__card" style={{ '--index': index }}>
            <div className="services__number">{String(index + 1).padStart(2, '0')}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span className="services__price">💰 {service.price}</span>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;

