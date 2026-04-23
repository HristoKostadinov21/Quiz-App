# Travel Challenge App

A fully working browser app inspired by a quiz-style structure, but built around a **different theme: travel, destinations, landmarks, and geography**.

It is designed so **4 people can build it together as one complete GitHub project**.

---

## 1. Project idea

This app lets the user:

- choose a **category**
- choose a **difficulty**
- answer travel-related questions
- see the final score
- review all answers
- copy the result to the clipboard
- save the best score in `localStorage`

The project uses only:

- HTML
- CSS
- JavaScript (ES modules)
- JSON data

No frameworks and no external dependencies are required.

---

## 2. Folder structure

```text
travel-challenge-app/
├── index.html
├── css/
│   └── style.css
├── data/
│   └── questions.json
├── scripts/
│   ├── app.js
│   ├── data-loader.js
│   └── quiz.js
├── .gitattributes
├── .gitignore
└── README.md
```

---

## 3. How 4 people can split the work

### Person 1 — UI and page structure
Responsible for:
- `index.html`
- screen layout
- buttons, containers, labels
- semantic structure of the app

Suggested GitHub branch:
```bash
git checkout -b feature/ui-layout
```

---

### Person 2 — Styling and responsive design
Responsible for:
- `css/style.css`
- colors, layout, spacing
- answer button states
- responsive/mobile adjustments

Suggested GitHub branch:
```bash
git checkout -b feature/styling
```

---

### Person 3 — Quiz data and filtering
Responsible for:
- `data/questions.json`
- `scripts/data-loader.js`
- categories
- difficulty values
- validation of question format

Suggested GitHub branch:
```bash
git checkout -b feature/data-and-filters
```

---

### Person 4 — App logic and integration
Responsible for:
- `scripts/app.js`
- `scripts/quiz.js`
- score logic
- progress bar
- review mode
- clipboard copy
- localStorage best score
- final merge and testing

Suggested GitHub branch:
```bash
git checkout -b feature/app-logic
```

---

## 4. GitHub workflow for the 4 people

### Step 1: One person creates the repository
Example name:
```text
travel-challenge-app
```

### Step 2: Upload the project
You can do it with GitHub Desktop or with terminal commands.

```bash
git init
git add .
git commit -m "Initial project setup"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/travel-challenge-app.git
git push -u origin main
```

### Step 3: Each person clones the same repository
```bash
git clone https://github.com/YOUR-USERNAME/travel-challenge-app.git
cd travel-challenge-app
```

### Step 4: Each person creates their own branch
Examples:
```bash
git checkout -b feature/ui-layout
git checkout -b feature/styling
git checkout -b feature/data-and-filters
git checkout -b feature/app-logic
```

### Step 5: Work locally, then commit and push
```bash
git add .
git commit -m "Add quiz screen layout"
git push origin feature/ui-layout
```

### Step 6: Open Pull Requests on GitHub
Each teammate opens a Pull Request into `main`.

### Step 7: The team leader or integrator reviews and merges
After checking the app works, merge each PR into `main`.

---

## 5. Recommended commit plan

### Person 1
- `Create main HTML structure`
- `Add start screen and result screen`
- `Add review section and app containers`

### Person 2
- `Add full visual theme`
- `Style buttons and answers`
- `Improve responsive layout`

### Person 3
- `Add travel questions JSON`
- `Add category selector support`
- `Improve question dataset`

### Person 4
- `Implement quiz flow`
- `Add scoring and result screen`
- `Add review logic and local best score`
- `Connect all modules`

---

## 6. How to run the project

Because the app uses `fetch()` to load `questions.json`, do **not** open `index.html` directly with `file://`.

Run a local server instead.

### Option A — Python
```bash
python -m http.server 8000
```

Then open:
```text
http://localhost:8000
```

### Option B — VS Code Live Server
- Install the **Live Server** extension
- Right click `index.html`
- Choose **Open with Live Server**

---

## 7. How to build it together step by step

### Stage 1 — Base structure
1. Create the repository.
2. Add folders: `css`, `scripts`, `data`.
3. Add the main HTML screens.
4. Push the initial version.

### Stage 2 — Visual design
1. Add the main app card layout.
2. Style buttons, question blocks, review cards.
3. Make the app responsive.

### Stage 3 — Data layer
1. Create the question JSON file.
2. Add categories and difficulty values.
3. Create the loader function with `fetch()`.

### Stage 4 — Quiz logic
1. Start challenge button.
2. Filter questions.
3. Render questions dynamically.
4. Select answers.
5. Move to next question.
6. Calculate score.
7. Show results.

### Stage 5 — Final features
1. Add answer review.
2. Add copy result button.
3. Add local best score.
4. Test all screens together.
5. Merge all branches into `main`.

---

## 8. Testing checklist

Before merging into `main`, test these cases:

- start button works
- category filter works
- difficulty filter works
- questions render correctly
- only one answer is selected at a time
- next button works
- final score is correct
- review answers screen works
- best score saves after reload
- copy result button works
- no console errors appear

---

## 9. Why this is different from the reference app

This project is **inspired by the same technical idea** but is clearly different because it uses:

- a **travel theme** instead of programming
- **category filtering**
- **difficulty filtering**
- **progress bar**
- **best score in localStorage**
- a more expanded team workflow for GitHub collaboration

---

## 10. Good presentation idea for university

When presenting it, say:

- the project is modular
- the work was divided among 4 collaborators
- GitHub branches and pull requests were used
- the final result was integrated into one working application
- the app is easy to extend with more questions and features

---

## 11. Future improvements

Possible future features:

- timer per question
- random question order
- dark/light mode switch
- image-based travel questions
- leaderboard with backend storage

---

## 12. License

You can add your own team names and GitHub usernames before submitting.
