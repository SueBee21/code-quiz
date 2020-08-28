// get elements
var startBtn = document.getElementById("start-button");
var homeScreen = document.getElementById("home-screen");

var question = document.getElementById("question");
var selectChoices = document.getElementById("select-choices");
var choiceBtn = document.getElementsByClassName("choice")
var choiceA = document.getElementById("a");
var choiceB = document.getElementById("b");
var choiceC = document.getElementById("c");
var choiceD = document.getElementById("d");
var highscore = document.getElementById("highscore")
var time = document.getElementById("time")
var score = 0

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
        correct: "d",
    },
    {
        question: "This is question 2?",
        choiceA: "first",
        choiceB: "second",
        choiceC: "third",
        choiceD: "fourth",
        correct: "c",

    }
]
var questionNumber = 0

// ask questions
function askQuestion() {
    var q = questionList[questionNumber];

    question.innerHTML = q.question;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;

    console.log(q.correct)
}

// register answer and score question


function scoreQuestion() {
    choiceBtn.addEventListener("click", scoreQuestion);



    var userResponse = this.choiceBtn.id;
    console.log(userResponse);

    // if correct, increase score
    if (q.correct == userResponse) {
        alert("Correct!");
        score++
    }
    else {
        alert("Incorrect. The correct answer is " + q.correct);
    }

}




// // next question
// function nextQuestion() {
//     for (var i = 0; i < questionList.length; i++);

// }


// final score 

// high scores


