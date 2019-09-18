# Project Title: TriviaGame
This is a trivia game using JavaScript and Jquery. The player will have 60 seconds to complete the multiple questions about Presidents. When the player answers the 5 questions, or the time runs out, the score will be calculated and the player will have the option to restart the game. 

Motivation: This game was inspired by my friend and previous co-worker. We both taught 2nd grade, so we divided up the challenge and she taught them science and I taught them Social Studies. 

Code Style: Standard
Tech/Framework: HTML5, CSS3, JavaScript, JQuery

Features: Fade in/out features, countdown timer

Code Example: 
function updateDisplay() {
    //fade out the question and choices to make it obvious a new question is being displayed
    $("#divFader").fadeTo(1000, 0.0, function() {
        // Animation complete.
        $("#pQuestion").html (questionArray[currentQuestion]["question"]);
        $("#choiceA").html (questionArray[currentQuestion]["choiceA"]);
        $("#choiceB").html (questionArray[currentQuestion]["choiceB"]);
        $("#choiceC").html (questionArray[currentQuestion]["choiceC"]);
        $("#choiceD").html (questionArray[currentQuestion]["choiceD"]);    
      });
    $("#divFader").fadeTo(1000, 1.0, function() {
        // Animation complete.
      });
    console.log(currentQuestion + ", " + correctGuesses + ", " + wrongGuesses + ", " + unansweredQuestions);
}

Screenshot: ![Trivia Game](assets\images\background.jpg)


 https://looksue.github.io/TriviaGame/
