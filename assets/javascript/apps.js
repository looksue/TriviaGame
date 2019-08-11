
let timeRemaining = document.getElementById("spanTimeRemaining");
let choices = document.getElementById("divChoices");
let start = document.getElementById("divStart");
let trivia = document.getElementById("divTrivia");
let wrongGuess = document.getElementById("divWrongGuess");
let score = document.getElementById("divScore");
let question = document.getElementById("pQuestion");
let btnStart = document.getElementById("btnStart");

var choiceA=document.getElementById("choiceA");
var choiceB=document.getElementById("choiceB");
var choiceC=document.getElementById("choiceC");
var choiceD=document.getElementById("choiceD");

//start the game by pressing start button

btnStart.addEventListener("click", function() {
    divStart.style.display = "none";
    divTrivia.style.display = "block";
    runGame();
});

function runGame() {
    // put 120 seconds on the clock
    var foo = setTimeout(endGame(), 1000 * 120);
    var secondsLeft = 120;
    
    // update time remaining
    var bar = setInterval(function() {
        if (secondsLeft > 0) {
            secondsLeft--;
            timeRemaining.innerHTML = secondsLeft;

            // display the first question, listen for clicks
            for (var i = 0; i < questionArray.length - 1; i++){
                pQuestion.innerHTML = questionArray[i]["question"];
            }

            // evaluate user choice, update display

            // advance to next question

            // display final result

        } else {
            endGame();
        }
    }, 1000);
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
        imgSrc: "assets/images/george.jpg"
    },
    {
        question: "Which President was a speed reader?",
        choiceA: "Jimmy Carter",
        choiceB: "Grover Cleveland",
        choiceC: "Theodore Roosevelt",
        choiceD: "Woodrow Wilson",
        correct: "A",
        imgSrc: "assets/images/jimmyreading.jpg"
    },
    {
        question: "Which President collets Spiderman comic books?",
        choiceA: "Ronald Reagan",
        choiceB: "Barack Obama",
        choiceC: "George W. Bush",
        choiceD: "Bill Clinton",
        correct: "B",
        imgSrc: "assets/images/obamaspiderman.jpg"
    },
    {
        question: "Who was the first President to call his residence the 'White House'?" ,
        choiceA: "Calvin Coolidge",
        choiceB: "Franklin Roosevelt",
        choiceC: "Harry Truman",
        choiceD: "Theodore Roosevelt",
        correct: "D",
        imgSrc: "assets/images/thewhitehouse.jpg"
    },
    {
        question: "Who was the first President to give a speech on television?",
        choiceA: "Franklin Roosevelt",
        choiceB: "Dwight Eisenhower",
        choiceC: "Harry Truman",
        choiceD: "John F. Kennedy",
        correct: "C",
        imgSrc: "assets/images/harrytv.jpg"
    } 
];

