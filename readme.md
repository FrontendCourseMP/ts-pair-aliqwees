Готовим рабочее пространство.

project/
├── index.html <-- входной файл
├── src/
 │   └── script.ts <-- тут будет логика
└── dist/ <-- тут будут файл js компилирован

📦 Шаг 2: Инициализируйте npm и установите TypeScript


npm init -y
npm install -D typescript


⚙️ Шаг 4: Создайте tsconfig.json

npx tsc --init

⚙️ Шаг 5: Настраиваем tsconfig.json (заменяет оодержание на это тут обработка DOM)

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
В package.json устанавливает команду запуска

  "scripts": {
    "start": "tsc --watch"
  },

Тут --watch автоматически будет обновлять все изменения
