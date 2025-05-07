// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    const quizCards = document.querySelectorAll(".quiz-card"); // 🆕 Wraps each question card
    let score = 0; // Track correct answers
    let currentIndex = 0;


// Show only the first question at first
quizCards.forEach((card, index) => {
    card.style.display = index === 0 ? "block" : "none";
  });


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
if (button.innerText === correctAnswer) {
        button.classList.add("btn-success");
        score++;
      } else {
        button.classList.add("btn-danger");


// Highlight the correct button
allButtons.forEach((btn) => {
    if (btn.innerText === correctAnswer) {
      btn.classList.add("btn-success");
    }
  });
}

// Show NEXT button after answer
const nextBtn = parentCard.querySelector(".next-btn");
      if (nextBtn) nextBtn.style.display = "inline-block";

});
});

//Handle NEXT button click
const nextButtons = document.querySelectorAll(".next-btn");

  nextButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      quizCards[index].style.display = "none";

      if (quizCards[index + 1]) {
        quizCards[index + 1].style.display = "block";
      } else {
        // Show results at end
        document.getElementById("results").innerHTML = `
          <h3>Quiz Complete!</h3>
          <p>Your score is ${score} out of ${quizCards.length}</p>
        `;
        document.getElementById("results").style.display = "block";
        document.getElementById("restart-btn").style.display = "inline-block";
      }
});
});
});

document.getElementById("restart-btn").addEventListener("click", function () {
    score = 0;
    currentIndex = 0;
  
    // Reset answer buttons and styling

    // Hide results and restart button