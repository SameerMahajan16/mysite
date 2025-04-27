let easyRiddles = [
    { question: "What has keys but can't open locks?", answer: "piano" },
    { question: "What has a head and a tail but no body?", answer: "coin" },
    { question: "What gets wetter as it dries?", answer: "towel" }
];

let mediumRiddles = [
    { question: "I speak without a mouth and hear without ears. What am I?", answer: "echo" },
    { question: "The more you take, the more you leave behind. What are they?", answer: "footsteps" },
    { question: "What has hands but can’t clap?", answer: "clock" }
];

let hardRiddles = [
    { question: "What can run but never walks, has a bed but never sleeps?", answer: "river" },
    { question: "The more you remove from me, the bigger I get. What am I?", answer: "hole" },
    { question: "What disappears as soon as you say its name?", answer: "silence" }
];

let currentLevel = "";
let currentRiddle = null;
let lives = 3;

function startGame(level) {
    currentLevel = level;
    lives = 3;
    document.getElementById("lives").innerHTML = "Lives: ❤️❤️❤️";
    document.getElementById("levelText").style.display = "none"; // Hide the starting text
    if (level === "easy") {
        currentRiddle = easyRiddles[Math.floor(Math.random() * easyRiddles.length)];
        document.getElementById("currentLevel").style.color = "green";
    } else if (level === "medium") {
        currentRiddle = mediumRiddles[Math.floor(Math.random() * mediumRiddles.length)];
        document.getElementById("currentLevel").style.color = "yellow";
    } else if (level === "hard") {
        currentRiddle = hardRiddles[Math.floor(Math.random() * hardRiddles.length)];
        document.getElementById("currentLevel").style.color = "red";
    }
    document.getElementById("riddle").textContent = currentRiddle.question;
    document.getElementById("feedback").textContent = "";
    document.getElementById("answerInput").value = "";
    document.getElementById("difficultySelection").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
    document.getElementById("currentLevel").textContent = `Level ${currentLevel.charAt(0).toUpperCase() + currentLevel.slice(1)}`;
}

function submitAnswer() {
    let userAnswer = document.getElementById("answerInput").value.toLowerCase().trim();
    if (userAnswer === "") {
        document.getElementById("feedback").textContent = "Please enter an answer!";
        document.getElementById("feedback").className = "incorrect";
        return;
    }
    if (userAnswer === currentRiddle.answer) {
        document.getElementById("feedback").textContent = "Correct! You've moved to the next level!";
        document.getElementById("feedback").className = "correct";
        if (currentLevel === "easy") {
            startGame("medium");
        } else if (currentLevel === "medium") {
            startGame("hard");
        } else {
            document.getElementById("gameArea").innerHTML = `
                <div id='completedMessage'>
                    <h2 style="color: green;">Congratulations! You completed the Riddle Quest!</h2>
                    <p>You get a cookie! 🍪</p>
                </div>
            `;
        }
    } else {
        lives--;
        document.getElementById("lives").innerHTML = `Lives: ${"❤️".repeat(lives)}${"🤍".repeat(3 - lives)}`;
        if (lives <= 0) {
            document.getElementById("feedback").textContent = `Game Over! The correct answer was: ${currentRiddle.answer}`;
            document.getElementById("feedback").className = "incorrect";
            setTimeout(resetGame, 4000); // Wait 4 seconds before resetting
        } else {
            document.getElementById("feedback").textContent = "Incorrect! Try again.";
            document.getElementById("feedback").className = "incorrect";
        }
    }
}

function resetGame() {
    document.getElementById("difficultySelection").style.display = "block";
    document.getElementById("gameArea").style.display = "none";
    document.getElementById("answerInput").value = "";
    document.getElementById("feedback").textContent = "";
    document.getElementById("lives").innerHTML = "Lives: ❤️❤️❤️";
    document.getElementById("currentLevel").textContent = "";
    document.getElementById("levelText").style.display = "block"; // Show level text again
}

function checkEnter(event) {
    if (event.key === "Enter") {
        submitAnswer();
    }
}
