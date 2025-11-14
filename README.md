# Портфолио Никиты

Современный одностраничный сайт-портфолио разработчика Telegram-ботов и сайтов. Реализован на Vite + React с адаптивной версткой и анимациями появления секций.

## Скрипты

- `npm install` — установка зависимостей.
- `npm run dev` — локальная разработка (по умолчанию http://localhost:5173).
- `npm run build` — сборка production-версии в папку `dist`.
- `npm run preview` — предпросмотр собранного проекта.

## Структура

Проект разделен на тематические секции: герой-блок, обо мне, навыки, кейсы, услуги, отзывы-заглушка и контакты. Данные кейсов и навыков лежат в `src/data`, компоненты — в `src/components`, стили — в `src/styles`.

## Деплой на бесплатный хостинг

### Вариант 1: Vercel (Рекомендуется) ⭐

**Способ 1: Через GitHub (автоматический деплой)**

1. Создайте репозиторий на GitHub и загрузите туда проект:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/ваш-username/portfolio.git
   git push -u origin main
   ```

2. Перейдите на [vercel.com](https://vercel.com) и войдите через GitHub

3. Нажмите "Add New Project"

4. Импортируйте ваш репозиторий

5. Vercel автоматически определит настройки (Vite + React)

6. Нажмите "Deploy"

7. Готово! Ваш сайт будет доступен по адресу `ваш-проект.vercel.app`

**Способ 2: Через Vercel CLI (быстрый деплой)**

1. Установите Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. В папке проекта выполните:
   ```bash
   vercel
   ```

3. Следуйте инструкциям в терминале

4. Для продакшн-деплоя:
   ```bash
   vercel --prod
   ```

### Вариант 2: Netlify

1. Создайте аккаунт на [netlify.com](https://netlify.com)

2. Перетащите папку `dist` (после `npm run build`) в Netlify Drop

3. Или подключите GitHub репозиторий для автоматического деплоя

4. Настройки сборки:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Вариант 3: GitHub Pages

1. Установите `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Добавьте в `package.json`:
   ```json
   "homepage": "https://ваш-username.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Выполните:
   ```bash
   npm run deploy
   ```

**Рекомендация:** Используйте Vercel — это самый простой и быстрый способ получить ссылку на ваш сайт для клиентов!

