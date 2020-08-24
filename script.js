// start screen
var startBtn = document.getElementById("start-button");
var homeScreen = document.getElementById("home-screen");
startBtn.addEventListener("click", startQuiz);

var question = document.getElementById("question");
var selectChoices = document.getElementById("select-choices");
var choiceA = document.getElementById("a");
var choiceB = document.getElementById("b");
var choiceC = document.getElementById("c");
var choiceD = document.getElementById("d");

function startQuiz() {
    homeScreen.style.display = "none";
    var quiz = document.getElementById("quiz");
    quiz.style.display = "block";
    askQuestion();
}

// Questions




let questionList = [
    {
        question: "What color is a banana?",
        choiceA: "A: red",
        choiceB: "B: purple",
        choiceC: "C: white",
        choiceD: "D: yellow",
        correct: "A",
    },
    {
        question: "This is question 2?",
        choiceA: "first",
        choiceB: "second",
        choiceC: "third",
        choiceD: "fourth",
        correct: "C",

    }
]

var lastQuestion = question.length -1
var questionNumber = 0

function askQuestion() {
    var q = questionList[questionNumber];

    question.innerHTML = q.question;
    choiceA.innerHTML = q.choiceA
    choiceB.innerHTML = q.choiceB
    choiceC.innerHTML = q.choiceC
    choiceD.innerHTML = q.choiceD

}
// var highscore = document.getElementById("highscore")
// var time = document.getElementById("time")




