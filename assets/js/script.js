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
var startBtnInitiate = document.querySelector("#initial-instruction");
// ---------------------------------------------------------// ---------------------------------------------------------

var initiate = startBtnInitiate.addEventListener("click", function() {
    console.log("I hear the click, Houston");
    rulesOfTheQuiz();
});

// the rules function
var rulesOfTheQuiz = function() {
    console.log("you have 5 min to complete this quiz you can retake after if you would like to.")
    
    // this removes the 'click anywhere to start' 
    var initialTask = document.querySelector("#initial-instruction").remove("#initial-instruction");
    
    // shows the rules
    var rules = document.createElement("div");
    rules.className = 'rules';
    rules.innerHTML = "<h3 class='rules'> The rules are that you cannot google any of these asnwers, this is a recall-from-your-memory excersize. You will have 3 minutes to answer 5 multiple choice questions. If the timer runs out, you can retake the quiz again if you would like to. </h3>";
    mainParentAttachmentEl.appendChild(rules);

    var rulesBtn = document.createElement("button");
    rulesBtn.className = 'contBtnRules';
    rulesBtn.innerHTML = "<h5>click here if you have read the rules and are ready to go</h5>";
    rules.appendChild(rulesBtn);
    
    var btnCont = rulesBtn.addEventListener("click", function() {

        alert("onto the game");

        var counter = 3 
        
        
        var countDownFunc = function (countDown){
            console.log(counter);
            counter--;
            if (counter === 0) {
                console.log("lets begin");
                // alert("lets begin");
                clearInterval(countDown);
            };
        };
        
        var countDownFunc = setInterval(countDownFunc, 1000);

    });
    
};

// coutndown function, when finished, it starts the quiz








// the startQuiz function
var startQuiz = function() {
    console.log("I hear the click, as well!!");

    // the question
    var quizQuestionEl = document.createElement("h3");
    quizQuestionEl.innerHTML = questions.question;

    var awrContainerEl = document.createElement("ul");
    
    var awrItemsEl = document.createElement("li");
    awrItemsEl.innerHTML = questions.choices;

    console.log(questions.question);
    console.log(questions.choices);

    // start / show timmer running

}

// <-- make the function of when user picks the right question, they move to the next question -->


// when the quiz is done, here it'll loop back to the initial function 'initiate'
// initiate();