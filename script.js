// get elements
var startBtn = document.getElementById("start-button");
var homeScreen = document.getElementById("home-screen");

var question = document.getElementById("question");
var selectChoices = document.getElementById("select-choices");
var choiceA = document.getElementById("a");
var choiceB = document.getElementById("b");
var choiceC = document.getElementById("c");
var choiceD = document.getElementById("d");
var highscore = document.getElementById("highscore")
var time = document.getElementById("time")
var score = 0
var correct = []
// start quiz
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    homeScreen.style.display = "none";
    var quiz = document.getElementById("quiz");
    quiz.style.display = "block";
    askQuestion();
}

// start timer

// Questions list

let questionList = [
    {
        question: "What color is a banana?",
        choiceA: "A: red",
        choiceB: "B: purple",
        choiceC: "C: white",
        choiceD: "D: yellow",
        correct: "D: yellow",
    },
    {
        question: "This is question 2?",
        choiceA: "first",
        choiceB: "second",
        choiceC: "third",
        choiceD: "fourth",
        correct: "first",
    }
]
var questionNumber = 0
var q = questionList[questionNumber];

console.log(q)
// ask questions
function askQuestion() {

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
            score++;

            var item = document.createElement("div");
            item.textContent = "Correct! The answer is " + q.correct
            quiz.append(item);

            var nextButton = document.createElement("button");
            nextButton.textContent = "Next";
            quiz.append(nextButton);
        }
        else {
            var item = document.createElement("div");
            item.textContent = "Incorrect. The correct answer is " + q.correct
            quiz.append(item);

            var nextButton = document.createElement("button");
            nextButton.textContent = "Next";
            quiz.append(nextButton);
        }
    });

}



// next question




// final score 

// high scores
