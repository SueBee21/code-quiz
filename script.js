// get elements
var startBtn = document.getElementById("start-button");
var homeScreen = document.getElementById("home-screen");
var nextButton = document.createElement("button");
var question = document.getElementById("question");
var selectChoices = document.getElementById("select-choices");
var choiceA = document.getElementById("a");
var choiceB = document.getElementById("b");
var choiceC = document.getElementById("c");
var choiceD = document.getElementById("d");
var scoreBtn = document.getElementById("score");
var scorePage = document.getElementById("score-page");
var initials = document.getElementById("initials");
var time = document.getElementById("timer");
var displayTime = document.getElementById("display-time")
var item = document.createElement("div");
// var score = [];
var correct = [];
var questionNumber = 0;
var q;
var timerInterval;
var secondsRemaining = 50;

// start quiz
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    homeScreen.style.display = "none";
    var quiz = document.getElementById("quiz");
    quiz.style.display = "block";
    askQuestion();
    startTimer();
}

// start timer

function startTimer() {
    timerInterval = setInterval(function () {
        secondsRemaining--;
        displayTime.textContent = secondsRemaining;

        if (secondsRemaining <= 0) {
            clearInterval(timerInterval);
            alert("Out of time!");
            secondsRemaining = 0;
            inputInitials()
        }

    }, 1000);
}



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


]
// var currentQuestion = []


console.log(q)
// ask questions
function askQuestion() {
    item.textContent = ""
    q = questionList[questionNumber++]
    question.innerHTML = q.question;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;

    console.log(q.correct)
}

// register answer and score question

choiceA.addEventListener("click", scoreQuestion);
choiceB.addEventListener("click", scoreQuestion);
choiceC.addEventListener("click", scoreQuestion);
choiceD.addEventListener("click", scoreQuestion);

function scoreQuestion(event) {

    var buttonSelected = event.target
    console.log(buttonSelected)

    var userResponse = buttonSelected.textContent;
    console.log(userResponse)



    selectChoices.addEventListener("click", function (event) {
        event.preventDefault();

        if (q.correct == userResponse) {

            item.textContent = "Correct! The answer is " + q.correct
            quiz.append(item);

            nextButton.textContent = "Next";
            quiz.append(nextButton);
        }
        else {
            secondsRemaining = secondsRemaining -5;

            if (secondsRemaining <= 0) {
                clearInterval(timerInterval);
                alert("Out of time!");
                secondsRemaining = 0;
                inputInitials()
            }
    

            item.textContent = "Incorrect. The correct answer is " + q.correct
            quiz.append(item);

            nextButton.textContent = "Next";
            quiz.append(nextButton);
        }
    });

}

nextButton.addEventListener("click", askQuestion);

// for (var i = 0; i < questionList.length; i++) {
//     questionNumber[i];
// }





// final score 

// high scores
scoreBtn.addEventListener("click", revealScores);

function revealScores() {
    homeScreen.style.display = "none";
    quiz.style.display = "none";
    initials.style.display = "none"
    scorePage.style.display = "block";
};

function inputInitials() {

}