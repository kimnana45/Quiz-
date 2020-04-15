// event listener on the button to start the game

/* Starting the game */

// A timer starts and is displayed on the page.
// set a variable that has the number of milliseconds
// Will need to setup a setinterval function
// if variable reaches 0, clear the timer, example is in 4.08
// Make sure it works for like 10 seconds and doesn't go below 0, ex no negatives
// clear the timer when it hits 0
// clear the middle section and display first question

/* Logic of the quiz */
// Need something keeping track of score
var question = document.getElementById("question");
var choices = Array.from(document.getElementsByClassName("choice-text"));

var currentQuestion = {};
var takeAnswers = false; 
var score = 0;
var questionCounter = 0;
var availableQuestions = [];
// Need a list of multichoice questions
// list of questions inside array.
// what makes a question:
// answers
// which answer is right, and which are wrong
// the actual question
var questions =  [
  {
      question: "Commonly used data types DO NOT include:",
      
        choice1 :  "a. strings",
        choice2 :  "b. booleans",
        choice3 :  "c. alerts",
        choice4 :  "d. numbers",
      
        Answer: 3
},
   { 
    question: "What JavaScript method is use to turn object into string?",
    
      choice1 :  "a. string()",
      choice2 :  "b. stringTo()",
      choice3 :  "c. Stringify()",
      choice4 :  "d. stringWith()",
    
      Answer: 3
},
   {
    question: "Where is the best place to put your script file in the HTML?",
    
      choice1 :  "a. At the bottom of the HTML, because all the elements are all idetified.",
      choice2 :  "b. In the middle of the HTML, because JavaScript is the center of everything.",
      choice3 :  "c. At the top of  the HTML, because you can easily see it that way.",
      choice4 :  "d. At the top of the HTML, because it looks cool that way.",
    
      Answer: 1
},
    {
    question: "When we need to apply the same method to all items inside an array, we use:",
    
      choice1 :  "a. forEach()",
      choice2 :  "b. for loop",
      choice3 :  "c. forver()",
      choice4 :  "d. either forEach() or for loop",
    
      Answer: 4
},
    {
    question: "What does the setAttribute function do?",
    
      choice1 :  "a. Setting up an HTML page.",
      choice2 :  "b. Adds the specified attribute to an element, and gives it the specified value.",
      choice3 :  "c. Overide all other attributes.",
      choice4 :  "d. Store attribute into local storage.",
    
      Answer: 2
},
]
var bonus = 1;
var maxQuestions = 5;

startGame=() => {
      if(availableQuestions.length === 0 || questionCounter > maxQuestions) {
        //go to highscore page 
        //return window.location.assign("highscore.html");   
      }
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getQuestion();
};
getQuestion=() => {
    questionCounter++;
    var QIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[QIndex];
    question.innerHTML = currentQuestion.question;

    choices.forEach(choice => {
    var number =choice.dataset["number"];
    choice.innerHTML = currentQuestion["choice" + number];
    });

    availableQuestions.splice(QIndex, 1);

    takeAnswers = true;
};
    choices.forEach(choice => {
    choice.addEventListener("click", event => {
        if(!takeAnswers) return; 
        var selectedChoice = event.target;
        var selectedAnswer = selectedChoice.dataset["number"];
        //how to tell when user choose right vs. wrong answer
        var classToApply = "incorrect";
        if(selectedAnswer == currentQuestion.Answer){
            classToApply = "correct";
        if(classToApply === "correct"){
            incrementScore(bonus);
            console.log(score);
        }    
        }
        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getQuestion();
        }, 1000);
        console.log(selectedAnswer == currentQuestion.Answer);
            
    });
});
incrementScore = num => {
    score += num;
};

startGame();
        




/* Putting a question on the page */
// Counter variable starting at 0.
// Take the first question from the array, this will be an object
// Grab the title of the question and put it on the page with javascript
// Grab the answers of the question
  // Loop through the answers
  // Put the answers in individual buttons
  // Have some data on the buttons indicating the value inside (hint data-answer)
  // event listener to click those answers
      // when you click the answer, you grab the value of that button and compare to the correct answer
          // if right, you can keep score the same or increase
          // if wrong, you can lower the score
      // after comparison and score calculation,
          // old question disappears, new question appears
              // increase the counter by 1 to get to the next question
          // compare counter to length of the array, if less go to next question
              // repeat everything we did above
      // once the counter is equal to length of the array, we don't show the next question, the game ends

      // Last screen all done
          // Title
          // Your final score
          // input
          // submit button
      // Once you submit the score
          // Grab the initial array from localstorage, if there is one, and convert it, otherwise use an empty array
          // take the score and initials, put it into an array, stringify that array, and then put it in localstorage
          // You'll save that score, and the initials to localStorage
// var highscores = [
//   {
//       score:
//       initials
//   }
// ]

