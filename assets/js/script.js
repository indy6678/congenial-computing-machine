var qListArr= {
    listOne: ["strings","booleans","alerts","numbers"],
    listTwo: ["quotes","curly brackets","parenthesis","square brackets"],
    listThree: ["numbers and strings","other arrays","booleans","All of the above"],
    listFour: ["commas","curly brackets","quotes","parenthesis"],
    listFive: ["Javascript","terminal/bash","for loops","console.log"]
}

var pageID = ""
var titleList = {
    1: "Commonly used data types do NOT include:",
    2: "The condition in an if/else statement is enclosed with _______.",
    3: "Arrays in Javascript can be used to store ________.",
    4: "String values must be enclosed within _______ when being assigned to variables.",
    5: "A very useful tool used during development and debugging for printing content to the debugger is:",
    6: "All done!"
}

var createQuizPage = function () {
    // create container to hold the list
    var quizPageEl = document.createElement("section");
    quizPageEl.className = "quizPage";

    // create list to hold choices
    var pageBlockListEl = document.createElement("ul")
    pageBlockListEl.className = "qList";

    console.log(qListArr);

}

var pageTitleEl = document.createElement("div");
pageTitleEl.className = "title";

var pageBlockEl = document.createElement("div");
pageBlockEl.className = "questionBox";

// get reference to startQuiz element
var startQuiz = document.getElementById("start");
console.log(startQuiz);

// var clickorama = function() {
//     console.log("you clicked!")
// }

// add event listener to start quiz button
// startQuiz.addEventListener("click", clickorama);
startQuiz.addEventListener("click",createQuizPage);