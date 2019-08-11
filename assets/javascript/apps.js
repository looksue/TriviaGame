
let choices=document.getElementById("choices");
let wrongguess=document.getElementById("wrongguess");
let score=document.getElementById("score");
let secondsLeft=document.getElementById("secondsLeft");

var timeRemaining = document.getElementById("start");
var trivia =document.getElementById("trivia");
var question =document.getElementById("question");
var choiceA=document.getElementById("A");
var choiceB=document.getElementById("B");
var choiceC=document.getElementById("C");
var choiceD=document.getElementById("D");

var intervalId;


$("#start").on("click",function() {
    $("#start").css("display","none");
    $("#trivia").css("display","block");
});

$("#show-number").html("<h2>" + timeRemaining + "</h2>");

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

