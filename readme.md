Готовим рабочее пространство.

project/
├── index.html         # entry HTML file
├── src/
│   └── script.ts      # your TypeScript logic here
└── dist/              # compiled JS files will appear here

📦 Шаг 2: Инициализация npm и установка TypeScript

npm init -y
npm install -D typescript

⚙️ Шаг 4: Создание tsconfig.json

npx tsc --init

⚙️ Шаг 5: Настраиваем tsconfig.json (замените содержимое на это, можно использовать для работы с DOM):

{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ES2020",
    "outDir": "./dist",
    "rootDir": "./src",
    "moduleResolution": "node",
    "strict": true,
    "esModuleInterop": true
  },
  "include": [
    "src/**/*"
  ]
}

Шаг 6:
В package.json добавьте команду для запуска TypeScript в режиме наблюдения:

  "scripts": {
    "start": "tsc --watch"
  },

Команда --watch будет автоматически компилировать проект при изменении файлов.
