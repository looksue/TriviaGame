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

//delay timer
var delay = ( function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();

//start the game by pressing start button

btnStart.addEventListener("click", function() {
    divStart.style.display = "none";
    divTrivia.style.display = "block";
    runGame();
});

function updateTimer(){
    // var foo = setTimeout(endGame(), 1000 * 120);
    var secondsLeft = 10;
    // update time remaining
    var bar = setInterval(function() {
        if (secondsLeft > 0) {
            secondsLeft--;
            timeRemaining.innerHTML = secondsLeft;
        } else {
            endGame();
        }
    }, 1000);
}

function runGame() {

    // display the questions, listen for clicks
    for (var i = 0; i < questionArray.length -1; i++){
        pQuestion.innerHTML = questionArray[i]["question"];
        choiceA.innerHTML = questionArray[i]["choiceA"];
        choiceB.innerHTML = questionArray[i]["choiceB"];
        choiceC.innerHTML = questionArray[i]["choiceC"];
        choiceD.innerHTML = questionArray[i]["choiceD"];
        guess.innerHTML = "";
        image.innerHTML = "";

        console.log("Correct answer: " + questionArray[i]["correct"]);

        // listen for user choices
        choiceA.addEventListener("click", function() {
            if (questionArray[i]["correct"] === "A") {
                //display thats correct 
                guess.innerHTML = "That's the correct answer!";
                //display the picture
                image.innerHTML = "<img src='" + questionArray[i]["imgSrc"] + "'>";
                //add 1 to correct guesses
                correctGuesses = correctGuesses +1;
                //wait 3 seconds 
                delay(function(){
                    // do stuff
                }, 3000 ); // end delay
                //next questions
            } else {
                //display wrong guess
                guess.innerHTML = "That's the wrong answer!  The correct answer was " + questionArray[i]["correctanswer"];
                //diplay the picture
                image.innerHTML = "<img src='" + questionArray[i]["imgSrc"] + "'>";
                //add 1 to wrong guesses
                wrongGuesses = wrongGuesses + 1;
                //wait 3 seconds
                delay(function(){
                    // do stuff
                }, 3000 ); // end delay
                //next questions
            }
        });
        choiceB.addEventListener("click", function() {

        });
        choiceC.addEventListener("click", function() {

        });
        choiceD.addEventListener("click", function() {

        });

    // display final result

    }
}

function endGame() {
    // display final results

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
        question: "Which President collets Spiderman comic books?",
        choiceA: "Ronald Reagan",
        choiceB: "Barack Obama",
        choiceC: "George W. Bush",
        choiceD: "Bill Clinton",
        correct: "B",
        correctanswer: "Barack Obama",
        imgSrc: "assets/images/obamaspiderman.jpg"
    },
    {
        question: "Who was the first President to call his residence the 'White House'?" ,
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
        imgSrc: "assets/images/harrytv.jpg"
    } 
];