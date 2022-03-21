// Christian, my man. You CAN do this dude. I know it. Trust me.






// <-- make variables that are js versions of html elements -->

var questionStatementEl = document.createElement("h2");
var questionAnswerAreaEl = document.createElement("ul");
var questionAnswerItemEl = document.creatElement("li");

// this is listening for a click, when it does it starts the quiz
var startBtnInitiate = document.addEventListener("click",startQuiz);



// the area where the quiz goes
var quizArea = document.querySelector("#quiz");




// <-- make your question array -->
var questions = [

    {
        question: "what is 1 + 1?" , 
        choices: [1,2,3,] ,
        correctAsnwer: 2 
    },

    {
        question: "what is 2 + 2?" , 
        choices: [4,2,3,] ,
        correctAsnwer: 4
    }, 

    {
        question: "what is 3 + 3?" , 
        choices: [6,2,3,] ,
        correctAsnwer: 6 
    },

    {
        question: "what is 4 + 4?" , 
        choices: [8,2,3,] ,
        correctAsnwer: 8
    } , 

    {
        question: "what is 5 + 5?" , 
        choices: [10,2,3,] ,
        correctAsnwer: 10 
    }

];

// <-- make the functionality of when user picks the right question, they move to the next question -->

// when you click on this button it executes the startQuiz function


// the startQuiz function
var startQuiz = function() {

}

