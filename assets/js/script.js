// Christian, my man. You CAN do this dude. I know it. Trust me.



// <-- questions array -->
var questions = [
    {
        question: "what is 1 + 1?" , 
        choices: [1,2,3,] ,
        correctAsnwer: 2 
    } 
];

// ---------------------------------------------------------// ---------------------------------------------------------

// <-- make variables that are js versions of html elements -->

// this makes the h2 element (for the question)
var questionStatementEl = document.createElement("h2");

// this created the ul element (for all the answers to be in a list)
var questionAnswerAreaEl = document.createElement("ul");

// this creates a list element (for all the asnwer items in a list)
var questionAnswerItemEl = document.createElement("li");

// this represents the quiz area
var quizArea = document.querySelector("#quiz");






// this is listening for a click in the html document, when it does it starts the quiz
var startBtnInitiate = document.querySelector("html");
// ---------------------------------------------------------// ---------------------------------------------------------

var initiate = startBtnInitiate.addEventListener("click", function() {
    console.log("I hear the click, Houston");
    rulesOfTheQuiz();
});

// the rules function
var rulesOfTheQuiz = function() {
    console.log("you have 5 min to complete this quiz you can retake after if you would like to.")
    startQuiz();

    // display rules where quiz'll go
}

// the startQuiz function
var startQuiz = function(_event) {
    console.log("I hear the click, as well!!");

    // start / show timmer running

}

// <-- make the function of when user picks the right question, they move to the next question -->


// when the quiz is done, here it'll loop back to the initial function 'initiate'
// initiate();