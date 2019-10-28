# TriviaGame
This is a trivia game using JavaScript and Jquery. The player will have 60 seconds to complete the multiple questions about Presidents. When the player answers the 5 questions, or the time runs out, the score will be calculated and the player will have the option to restart the game. 

# How to Use:
1. To start the game and the timer, click the start button.
2. Read the questions and click on your answer.
3. If it is correct, you will be told that is the correct answer and see a picture of the correct answer.
4. If it is wrong, you will be told that is the wrong answer, and be shown the right answer and picture. 
5. When the timer runs out or you finish the trivia questions, you will get a score card displaying the correct,     wrong, and unanswered questions. 
6. A restart button will appear for you to try and improve your score! 

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

Screenshot: ![Trivia Game](https://github.com/looksue/TriviaGame/blob/master/assets/images/projectimage.png)

 https://looksue.github.io/TriviaGame/
