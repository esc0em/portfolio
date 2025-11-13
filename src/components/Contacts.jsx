import SectionTitle from './SectionTitle.jsx';

const Contacts = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText('adressworks@gmail.com').catch(() => {
      alert('Не получилось скопировать email. Попробуйте выделить и скопировать вручную.');
    });
  };

  return (
    <section className="section section--alt" id="contacts" data-animate>
      <div className="container section__inner">
        <SectionTitle title="Контакты" subtitle="Свяжитесь удобным способом" />
        <div className="contacts">
          <div className="contacts__card">
            <h3>Telegram</h3>
            <p>Самый быстрый способ обсудить задачу, отправить техническое задание или голосовое сообщение.</p>
            <a className="btn btn--primary" href="https://t.me/esc0em" target="_blank">
              Написать в Telegram
            </a>
          </div>
          <div className="contacts__card">
            <h3>Email</h3>
            <p>
              Если нужно отправить подробное описание проекта или файлы — пишите на{' '}
              <span className="contacts__email">adressworks@gmail.com</span>.
            </p>
            <div className="contacts__actions">
              <button type="button" className="btn btn--ghost" onClick={copyEmail}>
                Скопировать email
              </button>
            </div>
          </div>
          <div className="contacts__card contacts__card--highlight">
            <h3>Формат сотрудничества</h3>
            <ul>
              <li>Фиксированная стоимость или почасовая оплата, в зависимости от задачи.</li>
              <li>Договоренности фиксируем в чате или документе, чтобы все было прозрачно.</li>
              <li>После запуска остаюсь на связи: слежу за ботом или сайтом, помогаю с обновлениями.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

