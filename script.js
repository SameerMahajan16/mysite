const riddles = {
    easy: [
        { question: "What has keys but can't open locks?", answer: "piano" },
        { question: "What has legs but doesn’t walk?", answer: "table" }
    ],
    medium: [
        { question: "What comes once in a minute, twice in a moment, but never in a thousand years?", answer: "m" },
        { question: "What can fill a room but takes up no space?", answer: "light" }
    ],
    hard: [
        { question: "The more you take, the more you leave behind. What are they?", answer: "footsteps" },
        { question: "I have cities but no houses, mountains but no trees, and water but no fish. What am I?", answer: "map" }
    ]
};

let currentDifficulty = "";
let currentRiddle = {};
let lives = 3;

function startGame(difficulty) {
    currentDifficulty = difficulty;
    document.getElementById("homeScreen").classList.add("d-none");
    document.getElementById("gameScreen").classList.remove("d-none");

    document.getElementById("levelIndicator").innerText = "Level: " + difficulty.charAt(0).toUpperCase() + difficulty.slice(1);

    const riddleArray = riddles[difficulty];
    currentRiddle = riddleArray[Math.floor(Math.random() * riddleArray.length)];
    document.getElementById("riddle").innerText = currentRiddle.question;
    document.getElementById("lives").innerHTML = "❤️❤️❤️";
}

function checkAnswer() {
    const input = document.getElementById("answerInput").value.trim().toLowerCase();
    const feedback = document.getElementById("feedback");

    if (!input) {
        feedback.innerText = "You didn't enter an answer yet!";
        return;
    }

    if (input === currentRiddle.answer) {
        document.body.classList.add("correct");
        feedback.innerHTML = "✅ Correct!";
        setTimeout(() => {
            location.reload();
        }, 1500);
    } else {
        lives--;
        if (lives === 2) {
            document.getElementById("lives").innerHTML = "❤️❤️";
        } else if (lives === 1) {
            document.getElementById("lives").innerHTML = "❤️";
        } else {
            feedback.innerText = "❌ You lost! Resetting...";
            setTimeout(() => {
                location.href = "index.html";
            }, 1500);
        }
    }
}

function resetGame() {
    location.href = "index.html";
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
});
