// start screen
var startBtn = document.getElementById("start-button")
var homeScreen = document.getElementById("home-screen")
startBtn.addEventListener("click", startQuiz)

function startQuiz() {
    homeScreen.style.display = "none";
}




// var highscore = document.getElementById("highscore")
// var time = document.getElementById("time")

// var quiz = document.getElementById("quiz")
// var question = document.getElementById("question")
// var selectChoices = document.getElementById("select-choices")
// var choiceA = document.getElementById("a")
// var choiceB = document.getElementById("b")
// var choiceC = document.getElementById("c")
// var choiceD = document.getElementById("d")


// let questions = [
//     {
//         question: "What color is a banana?",
//         choiceA: "red",
//         choiceB: "purple",
//         choiceC: "white",
//         choiceD: "yellow",
//         correct: "A"
//     },
//     {
//         question: "This is question 2?",
//         choiceA: "first",
//         choiceB: "second",
//         choiceC: "third",
//         choiceD: "fourth",
//         correct: "C"

//     }
// ]