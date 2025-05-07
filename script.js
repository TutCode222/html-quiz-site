// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    const quizCards = document.querySelectorAll(".quiz-card");
    let score = 0;
    let currentIndex = 0;
  
    // Show only the first question at first
    quizCards.forEach((card, index) => {
      card.style.display = index === 0 ? "block" : "none";
    });
  
    // Select all answer buttons on the page
    const answerButtons = document.querySelectorAll(".answer-btn");
  
    answerButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const parentCard = button.closest(".card");
        const allButtons = parentCard.querySelectorAll(".answer-btn");
  
        // Disable all buttons for this question
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
  
        const questionTitle = parentCard.querySelector(".card-title").innerText;
        const correctAnswer = correctAnswers[questionTitle];
  
        // Check if selected answer is correct
        if (button.innerText === correctAnswer) {
          button.classList.add("btn-kelly-green");
          score++;
        } else {
          button.classList.add("btn-wrong"); // Show red for incorrect
        }
  
        // Highlight the correct answer
        allButtons.forEach((btn) => {
          if (btn.innerText === correctAnswer) {
            btn.classList.add("btn-kelly-green");
          }
        });
  
        // Show the next button
        const nextBtn = parentCard.querySelector(".next-btn");
        if (nextBtn) nextBtn.style.display = "inline-block";
      });
    });
  
    // Handle NEXT button clicks
    const nextButtons = document.querySelectorAll(".next-btn");
    nextButtons.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        quizCards[index].style.display = "none";
  
        if (quizCards[index + 1]) {
          quizCards[index + 1].style.display = "block";
        } else {
          document.getElementById("results").innerHTML = `
            <h3>Quiz Complete!</h3>
            <p>Your score is ${score} out of ${quizCards.length}</p>
          `;
          document.getElementById("results").style.display = "block";
          document.getElementById("restart-btn").style.display = "inline-block";
        }
      });
    });
  
    // Restart button logic
    document.getElementById("restart-btn").addEventListener("click", function () {
      score = 0;
      currentIndex = 0;
  
      const allCards = document.querySelectorAll(".quiz-card");
      allCards.forEach((card, index) => {
        const buttons = card.querySelectorAll(".answer-btn");
        buttons.forEach((btn) => {
          btn.disabled = false;
          btn.classList.remove("btn-kelly-green", "btn-primary", "btn-wrong"); // Remove all custom states
        });
  
        const next = card.querySelector(".next-btn");
        if (next) next.style.display = "none";
  
        card.style.display = index === 0 ? "block" : "none";
      });
  
      document.getElementById("results").style.display = "none";
      document.getElementById("results").innerHTML = "";
      this.style.display = "none";
    });
  });