import { loadQuestions } from "./data-loader.js";
import { renderQuestion, lockAnswers } from "./quiz.js";

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const reviewScreen = document.getElementById("review-screen");

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const reviewButton = document.getElementById("review-btn");
const backButton = document.getElementById("back-btn");
const shareButton = document.getElementById("share-btn");

const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");
const scoreText = document.getElementById("score-text");
const bestScoreText = document.getElementById("best-score-text");
const reviewContainer = document.getElementById("review-container");
const statusText = document.getElementById("status-text");
const categorySelect = document.getElementById("category-select");
const difficultySelect = document.getElementById("difficulty-select");

let allQuestions = [];
let activeQuestions = [];
let currentQuestionIndex = 0;
let selectedAnswer = null;
let score = 0;
let userAnswers = [];

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartQuiz);
reviewButton.addEventListener("click", openReview);
backButton.addEventListener("click", closeReview);
shareButton.addEventListener("click", copyResult);

initialize();

async function initialize() {
  try {
    allQuestions = await loadQuestions();
    fillCategoryOptions(allQuestions);
    showBestScore();
  } catch (error) {
    startButton.disabled = true;
    statusText.textContent = "Не може да се зареди данните за теста.";
    console.error(error);
  }
}

function fillCategoryOptions(questions) {
  const categories = [...new Set(questions.map((q) => q.category))].sort();

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });
}

function startQuiz() {
  activeQuestions = getFilteredQuestions();

  if (activeQuestions.length === 0) {
    alert("Няма въпроси които да отговарят на съответната категория.");
    return;
  }

  currentQuestionIndex = 0;
  selectedAnswer = null;
  score = 0;
  userAnswers = [];

  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  reviewScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  showQuestion();
}

function getFilteredQuestions() {
  const selectedCategory = categorySelect.value;
  const selectedDifficulty = difficultySelect.value;

  return allQuestions.filter((question) => {
    const categoryMatch =
      selectedCategory === "all" || question.category === selectedCategory;
    const difficultyMatch =
      selectedDifficulty === "all" ||
      question.difficulty === selectedDifficulty;

    return categoryMatch && difficultyMatch;
  });
}

function showQuestion() {
  selectedAnswer = null;

  const question = activeQuestions[currentQuestionIndex];
  const position = currentQuestionIndex + 1;
  const total = activeQuestions.length;

  progressText.textContent = `Question ${position} / ${total}`;
  progressBar.style.width = `${(position / total) * 100}%`;
  statusText.textContent = "Избери един въпрос за да продължиш.";

  renderQuestion(question, handleAnswer, selectedAnswer);
}

function handleAnswer(index) {
  selectedAnswer = index;

  renderQuestion(activeQuestions[currentQuestionIndex], handleAnswer, selectedAnswer);
  lockAnswers(activeQuestions[currentQuestionIndex].correct, selectedAnswer);
  statusText.textContent = "Отговор избран. Натиснете Следващ въпрос.";
}

function nextQuestion() {
  if (selectedAnswer === null) {
    alert("Моля изберете отговор.");
    return;
  }

  const currentQuestion = activeQuestions[currentQuestionIndex];

  userAnswers.push(selectedAnswer);
  if (selectedAnswer === currentQuestion.correct) {
    score += 1;
  }

  currentQuestionIndex += 1;

  if (currentQuestionIndex < activeQuestions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  const total = activeQuestions.length;
  const percentage = Math.round((score / total) * 100);
  scoreText.textContent = `Твоя резултат: ${score} / ${total} (${percentage}%)`;

  saveBestScore(percentage);
  showBestScore();
}

function saveBestScore(percentage) {
  const currentBest = Number(localStorage.getItem("Най-добрияРезултатНаТеста") || 0);

  if (percentage > currentBest) {
    localStorage.setItem("Най-добрияРезултатНаТеста", String(percentage));
  }
}

function showBestScore() {
  const best = Number(localStorage.getItem("Най-добрияРезултатНаТеста") || 0);
  bestScoreText.textContent = `Най-добър резултат: ${best}%`;
}

function openReview() {
  resultScreen.classList.add("hidden");
  reviewScreen.classList.remove("hidden");
  renderReview();
}

function closeReview() {
  reviewScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
}

function renderReview() {
  reviewContainer.innerHTML = "";

  activeQuestions.forEach((question, index) => {
    const chosenIndex = userAnswers[index];
    const chosenAnswer = question.answers[chosenIndex];
    const correctAnswer = question.answers[question.correct];
    const isCorrect = chosenIndex === question.correct;

    const item = document.createElement("article");
    item.className = "review-item";

    item.innerHTML = `
      <h3>Question ${index + 1}</h3>
      <p><strong>Category:</strong> ${question.category}</p>
      <p>${question.question}</p>
      <p class="${isCorrect ? "Правилен Отговор" : "Грешен Отговор"}">
        <strong>Твоя Отговор:</strong> ${chosenAnswer}
      </p>
      <p class="correct-answer"><strong>Правилен Отговор:</strong> ${correctAnswer}</p>
      <p><strong>Обяснение:</strong> ${question.explanation}</p>
    `;

    reviewContainer.appendChild(item);
  });
}

function restartQuiz() {
  resultScreen.classList.add("hidden");
  reviewScreen.classList.add("hidden");
  quizScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
  showBestScore();
}

async function copyResult() {
  const total = activeQuestions.length;
  const percentage = total ? Math.round((score / total) * 100) : 0;
  const text = `Аз имам ${score}/${total} (${percentage}%) Тест за пътувания!`;

  try {
    await navigator.clipboard.writeText(text);
    alert("Резултатите бяха копирани на клипборда.");
  } catch (error) {
    console.error("Копирането на клипборда не сработи:", error);
  }
}
