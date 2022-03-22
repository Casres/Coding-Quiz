

var qIndex = 0
// <-- questions array -->
var questions = [
    {
        question: "what is 1 + 1?" , 
        answers: [ ["Lorem ipsum dolor, Assumenda voluptatem natus sunt,  "],["I eat tacos, and I love it.  "],["ad delectus tempora laudantium expedita dolorem quo, dicta quas accusantium harum ipsa ipsam"] ]  ,
        correctAnswer: 2 
    } ,
    {
        question: "pick A, B or C?" , 
        answers: [ ["A"],["B"],["C"] ]  ,
        correctAnswer: "C" 
    } 
];



// ---------------------------------------------------------// ---------------------------------------------------------

// <-- make variables that are js versions of html elements -->

// this makes the h2 element (for the question)
var questionStatementEl = document.createElement("h2");

// this created the ul element (for all the answers to be in a list)
var questionAnswerAreaEl = document.createElement("ul");

// this creates a list element (for all the answer items in a list)
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
    rules.innerHTML = "<h3 class='rules'> The rules are that you cannot google any of these answers, this is a recall-from-your-memory excursive. You will have 3 minutes to answer 5 multiple choice questions. If the timer runs out, you can retake the quiz again if you would like to. </h3>";
    mainParentAttachmentEl.appendChild(rules);

    var rulesBtn = document.createElement("button");
    rulesBtn.className = 'contBtnRules';
    rulesBtn.innerHTML = "<h5>click here if you have read the rules and are ready to go</h5>";
    rules.appendChild(rulesBtn);
    
    var btnCont = rulesBtn.addEventListener("click", function() {

        // alert("onto the game");

        var counter = 1 
        
        
        var countDownFunc = function (countDown){
            console.log(counter);
            counter--;
            if (counter === -1) {
                console.log("lets begin");
                // alert("lets begin");
                // clearInterval(countDown);
                clearInterval(countDownFunc);
                startQuiz();
            };
        };
        
        var countDownFunc = setInterval(countDownFunc, 1000);

    });
    
};

// the startQuiz function
var startQuiz = function() {

    // start / show timer running

    // removes the instructions
    var instructionsRmv = document.querySelector(".rules").remove(".rules");

    var quizQuestionEl = document.createElement("div");
    // the question 
    quizQuestionEl.className = 'questionItem';
    quizQuestionEl.innerHTML = "<h2 class='question'>" + questions[qIndex].question + "</h2>";
    mainParentAttachmentEl.appendChild(quizQuestionEl);


    // where the questions are held
    var awrContainerEl = document.createElement("ul");
    // the answers
    questions[qIndex].answers.forEach(ans => {
        var awrItemsEl = document.createElement("div");
        awrItemsEl.className = 'answerItems';
        awrItemsEl.innerHTML = `<h4 class='answerChoices'>${ans}</h4>`;
        mainParentAttachmentEl.appendChild(awrItemsEl);
    })
}



// var awrInput = document.addEventListener("click", ".answerItems", handleClick);

var handleClick = function () {

    if(qIndex<questions.length-1){
        qIndex++;
    
        startQuiz();
    } else {
        console.log('Show scoreboard');
    }


};

// <-- make the function of when user picks the right question, they move to the next question -->


// when the quiz is done, here it'll loop back to the initial function 'initiate'
// initiate();







// for(i=1; i<=questions[0].answers.length; i++) {
//     create elements to display here 
    
//     }