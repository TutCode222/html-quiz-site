// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {

    
// Select all answer buttons on the page
const answerButtons = document.querySelectorAll(".answer-btn");

answerButtons.forEach((button) => {
    // Add a click event to each button
    button.addEventListener("click", function () {
        const parentCard = button.closest(".card"); // Get the card container
        const allButtons = parentCard.querySelectorAll(".answer-btn"); // All buttons in this card


// Prevent multiple clicks by disabling all buttons in the question
allButtons.forEach((btn) => {
    btn.disabled = true;
  });


// Define correct answers 
const correctAnswers = {
    "Question 1": "<p>",
    "Question 2": "<a>",
    "Question 3": "<img>",
    "Question 4": "<table>",
    "Question 5": "<form>",
    "Question 6": "<h1>"
  };


// Get the question title (e.g., "Question 1")
const questionTitle = parentCard.querySelector(".card-title").innerText;
      const correctAnswer = correctAnswers[questionTitle];

// Check if clicked answer is correct

// Highlight the correct button