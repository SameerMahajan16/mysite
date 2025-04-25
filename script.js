// Global Variables
const riddles = {
    easy: [
        { question: "What has keys but can't open locks?", answer: "piano" },
        { question: "What has a head, a tail, but no body?", answer: "coin" },
    ],
    medium: [
        { question: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?", answer: "echo" },
        { question: "The more of this there is, the less you see. What is it?", answer: "darkness" },
    ],
    hard: [
        { question: "I’m tall when I’m young, and I’m short when I’m old. What am I?", answer: "candle" },
        { question: "I can be cracked, I can be made, I can be told, I can be played. What am I?", answer: "joke" },
    ]
};

let currentRiddle = null;
let currentDifficulty = null;

// Start the game with selected difficulty
function startGame(level) {
    currentDifficulty = level;
    document.getElementById('difficultySelection').classList.add('d-none');
    document.getElementById('gameArea').classList.remove('d-none');
    showRiddle(level);
}

// Display a random riddle based on difficulty
function showRiddle() {
    const riddleArray = riddles[currentDifficulty];
    const randomIndex = Math.floor(Math.random() * riddleArray.length);
    currentRiddle = riddleArray[randomIndex];
    document.getElementById('riddleDisplay').textContent = currentRiddle.question;
    document.getElementById('feedback').textContent = '';
}

// Check the user's answer
function checkAnswer() {
    const userAnswer = document.getElementById('answerInput').value.trim().toLowerCase();
    const feedbackElement = document.getElementById('feedback');
    if (userAnswer === currentRiddle.answer) {
        feedbackElement.textContent = "Correct! 🎉";
        feedbackElement.className = "mt-4 correct"; // Green color feedback
    } else {
        feedbackElement.textContent = "Oops! Try again. 😞";
        feedbackElement.className = "mt-4 incorrect"; // Red color feedback
    }
    document.getElementById('answerInput').value = ''; // Clear input field after submission
}
