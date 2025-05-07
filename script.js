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

// Define correct answers (use textContent or innerText as needed)

// Get the question title (e.g., "Question 1")

// Check if clicked answer is correct

// Highlight the correct button