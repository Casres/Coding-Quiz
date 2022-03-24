



var qIndex = 0;
// <-- questions array -->
var questions = [
  {
    question: "what is an array?",
    answers: [
      "A type of variable that holds more than one object value",
      "A type of variable that holds more than one value",
      "An object that holds more than one variable",
    ],
    // correctAnswer: 1 ,
    correctAnswerIndex: 1,
  },
  {
    question: "(T/F) An if statement can have a for loop in it?",
    answers: ["True", "False"],
    // correctAnswer: "C",
    correctAnswerIndex: 0,
  },
  {
    question: "What is HTML?",
    answers: [
      "the base style design of a website",
      "the logic of a website",
      "the skeleton of a website",
    ],
    // correctAnswer: 3 ,
    correctAnswerIndex: 2,
  },
  {
    question: "what a function?",
    answers: ["A boolean", "A condition", "A method"],
    // correctAnswer: 5 ,
    correctAnswerIndex: 1,
  },
  {
    question: "Does the indentation of HTML matter??",
    answers: [
      "No, it doesn't; only the element inheritance structure does",
      "No, the indentation matters, not the element inheritance",
      "yes,it does, only the element inheritance structure does",
    ],
    // correctAnswer: 6 ,
    correctAnswerIndex: 0,
  },
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

var initiate = startBtnInitiate.addEventListener(
  "click",
  function initiateQuiz() {
    console.log("I hear the click, Houston");
    rulesOfTheQuiz();
  }
);

// the rules function
var rulesOfTheQuiz = function () {
  // this removes the 'click anywhere to start'
  var initialTask = document
    .querySelector("#initial-instruction")
    .remove("#initial-instruction");
  bootleg();
};

// this is so that when the player clicks restart, they aren't starting from the very beginning, they are starting from the rules display part
var bootleg = function () {
  rulesDisplay();
};

var rulesDisplay = function () {
  // shows the rules
  var rules = document.createElement("div");
  rules.className = "rules";
  rules.innerHTML =
    "<h3 class='rules'> The rules are that you cannot google any of these answers, this is a recall-from-your-memory excursive. You will have 3 minutes to answer 5 multiple choice questions. If the timer runs out, you can retake the quiz again if you would like to. </h3>";
  mainParentAttachmentEl.appendChild(rules);

  var rulesBtn = document.createElement("button");
  rulesBtn.className = "contBtnRules";
  rulesBtn.innerHTML =
    "<h5>click here if you have read the rules and are ready to go</h5>";
  rules.appendChild(rulesBtn);

  var btnCont = rulesBtn.addEventListener("click", function () {
    var counter = 1;
    var countDownFunc = function (countDown) {
      console.log(counter);
      counter--;
      if (counter === -1) {
        console.log("lets begin");
        clearInterval(countDownFunc);
        startQuiz();
      }
    };
    var countDownFunc = setInterval(countDownFunc, 1000);
  });
};

// the startQuiz function
var startQuiz = function () {
  // removes the instructions
  var instructionsRmv = document.querySelector(".rules").remove(".rules");
  showNextQuestion();
};

// where the count down starts from 3 minutes

function showNextQuestion() {
  // the question
  var existingQuestionAnswerContainerEl = mainParentAttachmentEl.querySelector(
    "#question-answer-container"
  );
  if (existingQuestionAnswerContainerEl != null) {
    existingQuestionAnswerContainerEl.remove();
  }

  var questionAnswerContainerEl = document.createElement("div");
  questionAnswerContainerEl.id = "question-answer-container";
  mainParentAttachmentEl.appendChild(questionAnswerContainerEl);

  var quizQuestionEl = document.createElement("h2");
  quizQuestionEl.className = "questionItem";
  quizQuestionEl.textContent = questions[qIndex].question;
  questionAnswerContainerEl.appendChild(quizQuestionEl);

  var awrContainerEl = document.createElement("ul");
  awrContainerEl.id = "answer-container";
  questionAnswerContainerEl.append(awrContainerEl);

  for (var i = 0; i < questions[qIndex].answers.length; i++) {
    console.log("running loop");
    var possibleAnswerEl = document.createElement("li");
    possibleAnswerEl.setAttribute("data-index", i);
    possibleAnswerEl.textContent = questions[qIndex].answers[i];
    possibleAnswerEl.addEventListener("click", handleClick);
    awrContainerEl.appendChild(possibleAnswerEl);
  }
}

// var awrInput = document.addEventListener("click", ".answerItems", handleClick);

var handleClick = function (event) {
  console.log(event);
  var target = event.target;
  var index = target.dataset.index;

  if (index == questions[qIndex].correctAnswerIndex) {
    console.log("you got it right!");
    alert("Correct!");
  } else {
    console.log("false!");
    alert("Incorrect");
  }

  if (qIndex < questions.length - 1) {
    qIndex++;

    showNextQuestion();
  } else {
    console.log("Show scoreboard");
    scoreBoard();
  }
};

// when the quiz is done
var scoreBoard = function () {
  var rmQuiz = document
    .querySelector("#question-answer-container")
    .remove("#question-answer-container");
  var scoreBoardEL = document.createElement("div");
  scoreBoardEL.className = "scoreBoardClass";
  scoreBoardEL.textContent = "great job! you finished the quiz. You scored:";
  mainParentAttachmentEl.appendChild(scoreBoardEL);
  restart();
};

