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

function startGame(level) {
    currentLevel = level;
    if (level === "easy") {
        currentRiddle = easyRiddles[Math.floor(Math.random() * easyRiddles.length)];
    } else if (level === "medium") {
        currentRiddle = mediumRiddles[Math.floor(Math.random() * mediumRiddles.length)];
    } else if (level === "hard") {
        currentRiddle = hardRiddles[Math.floor(Math.random() * hardRiddles.length)];
    }
    document.getElementById("riddle").textContent = currentRiddle.question;
    document.getElementById("feedback").textContent = "";
    document.getElementById("answerInput").value = "";
}

function submitAnswer() {
    let userAnswer = document.getElementById("answerInput").value.toLowerCase().trim();
    if (userAnswer === currentRiddle.answer) {
        document.getElementById("feedback").textContent = "Correct! Moving to next level...";
        document.getElementById("feedback").className = "correct";
        if (currentLevel === "easy") {
            startGame("medium");
        } else if (currentLevel === "medium") {
            startGame("hard");
        } else {
            document.getElementById("gameArea").innerHTML = "<div id='completedMessage'>Congratulations! You completed the Riddle Quest!</div>";
        }
        // Insert answer image here if you want later
    } else {
        document.getElementById("feedback").textContent = "Incorrect! Try again.";
        document.getElementById("feedback").className = "incorrect";
    }
}
