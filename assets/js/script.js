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

var mainParentAttachmentEl = document.querySelector("#title");

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
    
    // this removes the 'click anywhere to start' 
    var initialTask = document.querySelector("#initial-instrcution").remove("#initial-instrcution");

    // shows the rules
    var rules = document.createElement("div");
    rules.className = 'rules';
    rules.innerHTML = "<h3 class='rules'> The rules are that you cannot google any of these asnwers, this is a recall-from-your-memory excersize. You will have 3 minutes to answer 5 multiple choice questions. If the timer runs out, you can retake the quiz again if you would like to. </h3>";
    mainParentAttachmentEl.appendChild(rules);

    // var btnCont = startBtnInitiate.addEventListener("click", function() {

    //     startQuiz();
    // });
    
}

// the startQuiz function
var startQuiz = function() {
    console.log("I hear the click, as well!!");

    
    alert("Allow!!");

    // start / show timmer running

}

// <-- make the function of when user picks the right question, they move to the next question -->


// when the quiz is done, here it'll loop back to the initial function 'initiate'
// initiate();