const letters = ["A", "B", "C", "D"];

export function renderQuestion(question, onAnswerSelected, selectedAnswer) {
  const questionText = document.getElementById("question-text");
  const answersContainer = document.getElementById("answers-container");
  const metaText = document.getElementById("meta-text");

  questionText.textContent = question.question;
  metaText.textContent = `${question.category} • ${capitalize(question.difficulty)}`;

  answersContainer.innerHTML = "";

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.dataset.letter = letters[index] ?? "?";
    button.textContent = answer;

    if (selectedAnswer === index) {
      button.classList.add("selected");
    }

    button.addEventListener("click", () => onAnswerSelected(index));
    answersContainer.appendChild(button);
  });
}

export function lockAnswers(correctIndex, selectedIndex) {
  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach((button, index) => {
    button.classList.add("locked");

    if (index === correctIndex) {
      button.classList.add("correct");
    }

    if (index === selectedIndex && selectedIndex !== correctIndex) {
      button.classList.add("wrong");
    }
  });
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
