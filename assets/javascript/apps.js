// declare our variables
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
    $("#divStart").css("display", "none");
    $("#divTrivia").css("display","block");

    //initialize the game
    initializeGame();
});

function initializeGame() {
    // reset to zero for restart
    currentQuestion = 0;
    correctGuesses = 0;
    wrongGuesses = 0;
    unansweredQuestions = 0;
    $("#divGuess").html ("");
    $("#divImage").html ("");
    
    // display the questions, start the timer
    updateDisplay();
    countdownTimer();
}

function updateDisplay() {
    $("#pQuestion").html (questionArray[currentQuestion]["question"]);
    $("#choiceA").html (questionArray[currentQuestion]["choiceA"]);
    $("#choiceB").html (questionArray[currentQuestion]["choiceB"]);
    $("#choiceC").html (questionArray[currentQuestion]["choiceC"]);
    $("#choiceD").html (questionArray[currentQuestion]["choiceD"]);
    console.log(currentQuestion + ", " + correctGuesses + ", " + wrongGuesses + ", " + unansweredQuestions);
}

function evaluateClick(clicked) {

    if (questionArray[currentQuestion]["correct"] === clicked) {
        //display thats correct 
     //   $("#divGuess").html = "That's the correct answer!";
        $("#divGuess").html("That's the correct answer!");
        //display the picture
        $("#divImage").html ("<img src='" + questionArray[currentQuestion]["imgSrc"] + "'>");
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
        $("#divGuess").html ("That's the wrong answer!  The correct answer was " + questionArray[currentQuestion]["correctanswer"]);
        //diplay the picture
        $("#divImage").html ("<img src='" + questionArray[currentQuestion]["imgSrc"] + "'>");
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
    $("#divStart").css("display", "block");
    $("#divTrivia").css("display","none");
    $("#divScore").css("display", "block");
    $("#btnStart").html ("Restart");
    unansweredQuestions = (questionArray.length - correctGuesses - wrongGuesses);
    $("#divScore").html ("<p>Game over! </p><p>Correct: " + correctGuesses + "</p><p>Wrong: " + wrongGuesses + "</p><p>Unanswered: " + unansweredQuestions + "</p>");
    currentQuestion = 0;
    correctGuesses = 0;
    wrongGuesses = 0;
    unansweredQuestions = 0;

    // reset the countdown timer
    clearTimeout(waitasecond);
    $("#spanTimeRemaining").html ("60");
}


function countdownTimer() {
    seconds = $("#spanTimeRemaining").html ();
    seconds = parseInt(seconds, 10);

    if (seconds == 1) {
        $("#spanTimeRemaining").html ("0");
        endGame();
        return;
    } else {
        seconds--;
        $("#spanTimeRemaining").html (seconds);
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