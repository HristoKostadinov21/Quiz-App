# Travel Challenge App

Travel Challenge App е браузърно quiz приложение на тема пътувания, държави, столици, забележителности и география. Проектът е направен с HTML, CSS и JavaScript без външни библиотеки.

---

## 1. Описание на проекта

Приложението позволява на потребителя да:

- избере категория;
- избере трудност;
- отговаря на въпроси, свързани с пътувания;
- вижда текущ прогрес;
- получава краен резултат;
- преглежда правилните и грешните отговори;
- копира резултата;
- запазва най-добър резултат чрез `localStorage`.

---

## 2. Реална структура на проекта

```text
Quiz-App-main-fixed/
├── index.html
├── css/
│   └── style.css
├── data/
│   └── questions.json
├── scripts/
│   ├── app.js
│   ├── data-loader.js
│   └── quiz.js
├── bg.png
├── .gitattributes
├── .gitignore
├── README.md
└── документация за 4-ма участници (.docx)
```



---

## 3. Разпределение на работата в екипа

### Person 1 — UI and page structure

Отговаря за:

- `index.html`;
- основната HTML структура;
- екраните: start, quiz, result и review;
- бутоните, контейнерите, labels и select полетата;
- подредбата на съдържанието.

### Person 2 — Styling and responsive design

Отговаря за:

- `css/style.css`;
- цветове, фон, spacing, cards и buttons;
- responsive оформление;
- визуални състояния на отговорите: selected, correct, wrong, locked.

### Person 3 — Quiz data and filtering

Отговаря за:

- `data/questions.json`;
- структурата на въпросите;
- категории и трудност;
- `scripts/data-loader.js`;
- зареждане на данните чрез `fetch()`.

### Person 4 — App logic and integration

Отговаря за:

- `scripts/app.js`;
- `scripts/quiz.js`;
- логика на стартиране на теста;
- филтриране по категория и трудност;
- избор на отговор;
- изчисляване на резултат;
- review режим;
- localStorage за най-добър резултат;
- копиране на резултата.

---

 4. 
Коректният вариант е:

- проектът е разделен на задачи по файлове;
- всеки човек има описан принос спрямо конкретни файлове;
- branch-овете `feature/ui-layout`, `feature/styling`, `feature/data-and-filters` и `feature/app-logic` могат да се използват като препоръчителен GitHub workflow, но не се представят като вече доказано използвани;
- commit съобщенията в документацията са дадени като препоръчителни примери, а не като реална история на репозиториума.

---

## 5. Препоръчителен GitHub workflow за бъдеща/поправена работа

Ако проектът трябва да бъде качен отново в GitHub по правилен начин, може да се използва следната организация:

```bash
git checkout -b feature/ui-layout
git checkout -b feature/styling
git checkout -b feature/data-and-filters
git checkout -b feature/app-logic
```

Примерни смислени commit имена:

- `Create main HTML structure`
- `Style quiz screens and buttons`
- `Add travel questions data`
- `Implement quiz flow and score logic`
- `Add review screen and best score storage`
- `Fix project folder structure`

---

## 6. Как да се стартира проектът

Тъй като приложението използва `fetch()` за зареждане на `data/questions.json`, не е препоръчително да се отваря директно чрез `file://`.

Стартиране с Python server:

```bash
python -m http.server 8000
```

След това се отваря:

```text
http://localhost:8000
```

Може да се използва и VS Code Live Server.
