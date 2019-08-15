// declare our variables
let timeRemaining = document.getElementById("spanTimeRemaining");
let choices = document.getElementById("divChoices");
let start = document.getElementById("divStart");
let trivia = document.getElementById("divTrivia");
let guess = document.getElementById("divGuess");
let image = document.getElementById("divImage");
let score = document.getElementById("divScore");
let question = document.getElementById("pQuestion");
let btnStart = document.getElementById("btnStart");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");
var correctGuesses = 0;
var wrongGuesses = 0;
var unansweredQuestions = 0;
var clicked = "";
var currentQuestion = 0;
var seconds = 120;
var temp = "";
var waitasecond;

// listen for user choices
choiceA.addEventListener("click", function () {
    evaluateClick("A");
});
choiceB.addEventListener("click", function () {
    evaluateClick("B");
});
choiceC.addEventListener("click", function () {
    evaluateClick("C");
});
choiceD.addEventListener("click", function () {
    evaluateClick("D");
});

//start the game by pressing start button
btnStart.addEventListener("click", function () {
    divStart.style.display = "none";
    divTrivia.style.display = "block";

    //initialize the game
    initializeGame();
});


function initializeGame() {
    // reset to zero for restart
    currentQuestion = 0;
    correctGuesses = 0;
    wrongGuesses = 0;
    unansweredQuestions = 0;

    // display the questions, start the timer
    updateDisplay();
    countdownTimer();
}

function updateDisplay() {
    pQuestion.innerHTML = questionArray[currentQuestion]["question"];
    choiceA.innerHTML = questionArray[currentQuestion]["choiceA"];
    choiceB.innerHTML = questionArray[currentQuestion]["choiceB"];
    choiceC.innerHTML = questionArray[currentQuestion]["choiceC"];
    choiceD.innerHTML = questionArray[currentQuestion]["choiceD"];
    console.log(currentQuestion + ", " + correctGuesses + ", " + wrongGuesses + ", " + unansweredQuestions);
}

function evaluateClick(clicked) {

    if (questionArray[currentQuestion]["correct"] === clicked) {
        //display thats correct 
        guess.innerHTML = "That's the correct answer!";
        //display the picture
        image.innerHTML = "<img src='" + questionArray[currentQuestion]["imgSrc"] + "'>";
        //add 1 to correct guesses
        correctGuesses = correctGuesses + 1;
        //next questions
        if (currentQuestion < questionArray.length - 1) {
            currentQuestion = currentQuestion + 1;
            updateDisplay();
        } else {
            endGame();
        }
    } else {
        //display wrong guess
        guess.innerHTML = "That's the wrong answer!  The correct answer was " + questionArray[currentQuestion]["correctanswer"];
        //diplay the picture
        image.innerHTML = "<img src='" + questionArray[currentQuestion]["imgSrc"] + "'>";
        //add 1 to wrong guesses
        wrongGuesses = wrongGuesses + 1;
        //next questions
        if (currentQuestion < questionArray.length - 1) {
            currentQuestion = currentQuestion + 1;
            updateDisplay();
        } else {
            endGame();
        }
    }
};

function endGame() {
    // display final results
    divStart.style.display = "block";
    divTrivia.style.display = "none";
    divScore.style.display = "block";
    btnStart.innerHTML = "Restart";
    unansweredQuestions = (questionArray.length - correctGuesses - wrongGuesses);
    divScore.innerHTML = "<p>Game over! </p><p>Correct: " + correctGuesses + "</p><p>Wrong: " + wrongGuesses + "</p><p>Unanswered: " + unansweredQuestions + "</p>";
    currentQuestion = 0;
    correctGuesses = 0;
    wrongGuesses = 0;
    unansweredQuestions = 0;

    // reset the countdown timer
    clearTimeout(waitasecond);
    document.getElementById("spanTimeRemaining").innerHTML = 60;
}


function countdownTimer() {
    seconds = document.getElementById("spanTimeRemaining").innerHTML;
    seconds = parseInt(seconds, 10);

    if (seconds == 1) {
        temp = document.getElementById("spanTimeRemaining");
        temp.innerHTML = "0";
        endGame();
        return;
    } else {
        seconds--;
        temp = document.getElementById("spanTimeRemaining");
        temp.innerHTML = seconds;
        waitasecond = setTimeout(countdownTimer, 1000);
    }
}



let questionArray = [
    {
        question: "Which President was the only President to be unamimously elected?",
        choiceA: "Ulysses S. Grant",
        choiceB: "James Madison",
        choiceC: "Andrew Jackson",
        choiceD: "George Washington",
        correct: "D",
        correctanswer: "George Washington",
        imgSrc: "assets/images/george.jpg"
    },
    {
        question: "Which President was a speed reader?",
        choiceA: "Jimmy Carter",
        choiceB: "Grover Cleveland",
        choiceC: "Theodore Roosevelt",
        choiceD: "Woodrow Wilson",
        correct: "A",
        correctanswer: "Jimmy Carter",
        imgSrc: "assets/images/jimmyreading.jpg"
    },
    {
        question: "Which President collects Spiderman comic books?",
        choiceA: "Ronald Reagan",
        choiceB: "Barack Obama",
        choiceC: "George W. Bush",
        choiceD: "Bill Clinton",
        correct: "B",
        correctanswer: "Barack Obama",
        imgSrc: "assets/images/obamaspiderman.jpg"
    },
    {
        question: "Who was the first President to call his residence the 'White House'?",
        choiceA: "Calvin Coolidge",
        choiceB: "Franklin Roosevelt",
        choiceC: "Harry Truman",
        choiceD: "Theodore Roosevelt",
        correct: "D",
        correctanswer: "Theodore Roosevelt",
        imgSrc: "assets/images/thewhitehouse.jpg"
    },
    {
        question: "Who was the first President to give a speech on television?",
        choiceA: "Franklin Roosevelt",
        choiceB: "Dwight Eisenhower",
        choiceC: "Harry Truman",
        choiceD: "John F. Kennedy",
        correct: "C",
        correctanswer: "Harry Truman",
        imgSrc: "assets/images/harry.jpg"
    }
];