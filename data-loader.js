export async function loadQuestions() {
  const response = await fetch("data/questions.json");

  if (!response.ok) {
    throw new Error("Failed to load questions.json");
  }

  const data = await response.json();
  return data.questions;
}
