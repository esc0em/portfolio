export interface Skill {
  id: string
  title: string
  description: string
  businessExample: string
  icon: string
  isBusinessCritical: boolean
}

export const skills: Skill[] = [
  {
    id: 'python',
    title: 'Python + Aiogram',
    description: 'Создаю Telegram-ботов с логикой, очередями, оплатой и уведомлениями.',
    businessExample: 'Запись на услуги, расчёт заказов, воронки продаж в Telegram',
    icon: '🐍',
    isBusinessCritical: true
  },
  {
    id: 'fastapi',
    title: 'FastAPI',
    description: 'Пишу API и административные панели для управления ботами и интеграциями.',
    businessExample: 'API для управления заказами, админ-панели для бизнеса',
    icon: '⚡',
    isBusinessCritical: true
  },
  {
    id: 'web',
    title: 'React + TypeScript',
    description: 'Создаю современные веб-приложения с отличной производительностью и UX.',
    businessExample: 'Лендинги для услуг, промо-страницы, дашборды',
    icon: '⚛️',
    isBusinessCritical: false
  },
  {
    id: 'tailwind',
    title: 'Tailwind CSS',
    description: 'Верстаю адаптивные интерфейсы с современным дизайном.',
    businessExample: 'Адаптивные сайты, кастомные UI компоненты',
    icon: '🎨',
    isBusinessCritical: false
  },
  {
    id: 'git',
    title: 'Git и GitHub',
    description: 'Веду проекты в репозиториях, оформляю историю изменений, настраиваю CI/CD.',
    businessExample: 'Версионирование проектов, совместная разработка, автоматизация деплоя',
    icon: '📦',
    isBusinessCritical: false
  },
  {
    id: 'integrations',
    title: 'Интеграции и парсинг',
    description: 'Подключаю платежи, CRM, сервисы доставки, собираю данные из открытых источников.',
    businessExample: 'Подключение платежей, синхронизация с CRM, сбор данных для анализа',
    icon: '🔗',
    isBusinessCritical: true
  }
]

export default skills
