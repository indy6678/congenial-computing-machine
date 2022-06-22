var listOne = {
    1: "strings",
    2: "booleans",
    3: "alerts",
    4: "numbers"
}

var listTwo = {
    1: "quotes",
    2: "curly brackets",
    3: "parenthesis",
    4: "square brackets"
}

var listThree = {
    1: "numbers and strings",
    2: "other arrays",
    3: "booleans",
    4: "All of the above"
}

var ListFour = {
    1: "commas",
    2: "curly brackets",
    3: "quotes",
    4: "parenthesis"
}

var listFive = {
    1: "Javascript",
    2: "terminal/bash",
    3: "for loops",
    4: "console.log"
}

var pageID=""
var titleList = {
    1: "Commonly used data types do NOT include:",
    2: "The condition in an if/else statement is enclosed with _______.",
    3: "Arrays in Javascript can be used to store ________.",
    4: "String values must be enclosed within _______ when being assigned to variables.",
    5: "A very useful tool used during development and debugging for printing content to the debugger is:",
    6: "All done!"
}

var startQuiz = document.querySelector("btn");


var quizPageOneEl = document.createElement("section");
quizPageOneEl.className="pageOne";
quizPageOneEl.innerHTML="<h1>Commonly used data types do NOT <br> include:<h1>";

// create container for each page
var createQuizPage = function () {
    var quizPageEl=document.createElement("section");
    quizPageEl.className="quizPage";
    quizPageEl.setAttribute("pageNum",pageID)
}

var pageTitleEl=document.createElement("div");
pageTitleEl.className="text";

var pageBlockEl=document.createElement("div");
pageBlockEl.className="questions"

var pageBlockListEl=document.createElement("li")
pageBlockListEl.className="qList"