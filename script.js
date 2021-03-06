// get elements
var homeBtn = document.getElementById("home");
var startBtn = document.getElementById("start-button");
var homeScreen = document.getElementById("home-screen");


var question = document.getElementById("question");
// var selectChoices = document.getElementById("select-choices");
var choiceA = document.getElementById("a");
var choiceB = document.getElementById("b");
var choiceC = document.getElementById("c");
var choiceD = document.getElementById("d");
var questionNumber = 0;
var q;

var nextBtn = document.getElementById("next");
var completeBtn = document.createElement("button");

var scoreBtn = document.getElementById("score");
var scorePage = document.getElementById("score-page");

var scoreList = document.getElementById("score-list");

var initialsPage = document.getElementById("enter-initials");
var yourInitials = document.getElementById("your-initials");
var submitBtn = document.getElementById("submit");
// var finalScore = document.getElementById("final-score");

var time = document.getElementById("timer");
var displayTime = document.getElementById("display-time");
var item = document.createElement("div");
var timerInterval;
var secondsRemaining = 60;

// return top home screen
homeBtn.addEventListener("click", returnHome);

function returnHome() {
    homeScreen.style.display = "block";
    quiz.style.display = "none";
    initialsPage.style.display = "none";
    scorePage.style.display = "none";
};

// start quiz
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    homeScreen.style.display = "none";
    var quiz = document.getElementById("quiz");
    quiz.style.display = "block";
    homeScreen.style.display = "none";
    initialsPage.style.display = "none";
    scorePage.style.display = "none";
    askQuestion();
    startTimer();
};

// start timer
function startTimer() {
    timerInterval = setInterval(function () {
        secondsRemaining--;
        displayTime.textContent = secondsRemaining;

        if (secondsRemaining <= 0) {
            clearTimeout(timerInterval);
            alert("Out of time!");
            inputInitials();
        };
    }, 1000);
};

// Questions list
let questionList = [
    {
        question: "What tag is used to define the body of the HTML document?",
        choiceA: "A: h2",
        choiceB: "B: br",
        choiceC: "C: p",
        choiceD: "D: body",
        correct: "D: body",
    },
    {
        question: "What tag would be used to add an image to a website?",
        choiceA: "A: img",
        choiceB: "B: video",
        choiceC: "C: picture",
        choiceD: "D: div",
        correct: "A: img",
    },
    {
        question: "What is a CSS style sheet used for?",
        choiceA: "A: To set the main text content of a website",
        choiceB: "B: To change the look of a website",
        choiceC: "C: There is no such thing as CSS",
        choiceD: "D: To help you preform difficult calculations",
        correct: "B: To change the look of a website",
    },
    {
        question: "What tag would you use to make a button?",
        choiceA: "A: radio",
        choiceB: "B: button",
        choiceC: "C: strong",
        choiceD: "D: h1",
        correct: "B: button",
    },
    {
        question: "What does the CSS color property do?",
        choiceA: "A: It draws a rainbow",
        choiceB: "B: It changes the background color",
        choiceC: "C: It specifies the color of text",
        choiceD: "D: It opens a new tab in the browser",
        correct: "C: It specifies the color of text",
    },
];

// ask questions
function askQuestion() {
    item.textContent = "";
    nextBtn.style.display = "none";
    q = questionList[questionNumber++];
    question.innerHTML = q.question;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
};

// click to choose and score question
choiceA.addEventListener("click", scoreQuestion);
choiceB.addEventListener("click", scoreQuestion);
choiceC.addEventListener("click", scoreQuestion);
choiceD.addEventListener("click", scoreQuestion);

nextBtn.addEventListener("click", askQuestion);

function scoreQuestion(event) {
    nextBtn.style.display = "block";
    var buttonSelected = event.target;
    var userResponse = buttonSelected.textContent;

    if (q.correct == userResponse) {

        if (questionNumber <= 4) {
            item.textContent = "Correct! The answer is " + q.correct;
            quiz.append(item);
        }

        else {
            item.textContent = "Correct! The answer is " + q.correct;
            quiz.append(item);
            completeBtn.textContent = "Score Your Quiz!";
            quiz.appendChild(completeBtn);

            nextBtn.style.display = "none";
            finalScore = secondsRemaining;
            clearTimeout(timerInterval);
        };
    }
    else {
        secondsRemaining = secondsRemaining - 5;
        item.textContent = "Incorrect. The correct answer is " + q.correct;
        quiz.append(item);

        if (questionNumber <= 4) {
            item.textContent = "Incorrect. The correct answer is " + q.correct;
            quiz.append(item);
        }

        else {
            item.textContent = "Incorrect. The correct answer is " + q.correct;
            quiz.append(item);
            completeBtn.textContent = "Score Your Quiz!";
            quiz.appendChild(completeBtn);

            nextBtn.style.display = "none";
            finalScore = secondsRemaining;
            clearTimeout(timerInterval);
        };
    };
};

completeBtn.addEventListener("click", inputInitials);
submitBtn.addEventListener("click", saveEntry);
var finalScore;

// final score and enter enter-initials
function inputInitials() {
    // finalScore = secondsRemaining;
    homeScreen.style.display = "none";
    quiz.style.display = "none";
    initialsPage.style.display = "block";
    scorePage.style.display = "none";

    item.textContent = "Your Score is: " + finalScore;
    initialsPage.appendChild(item);

};

// saved initials and high score
function saveEntry() {
    var myStringifiedObject = JSON.stringify({yourInitials});
localStorage.setItem("mySavedScore", myStringifiedObject);
console.log(myStringifiedObject)

var myParsedObject = JSON.parse(localStorage.getItem("mySavedScore"));
console.log(myParsedObject) 
scoreList.push(myParsedObject); 
};


// show high scores
scoreBtn.addEventListener("click", revealScores);

function revealScores() {
    homeScreen.style.display = "none";
    quiz.style.display = "none";
    initialsPage.style.display = "none";
    scorePage.style.display = "block";

    scoreList.textContent = myParsedObject + "=" + finalScore;
    scorePage.appendChild(scoreList);
};


