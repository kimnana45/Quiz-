
var question = document.getElementById("question");
var choices = Array.from(document.getElementsByClassName("choice-text"));

var currentQuestion = {};
var takeAnswers = false; 
var score = 0;
var questionCounter = 0;
var availableQuestions = [];
// Need a list of multichoice questions
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
var time = 0; 
var timer = document.getElementById("timer");
//how the game start
function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getQuestion();
};
function getQuestion() {
        if(availableQuestions.length === 0 || questionCounter > maxQuestions) {
        localStorage.setItem("recentScores", score);
        return window.location.assign("end.html");  
        }
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
//trying out something new : fat arrow fundtion  
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
            // console.log(score);
        }    
        }
        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getQuestion();
        }, 1000);
        // console.log(selectedAnswer == currentQuestion.Answer);
            
    });
});
//keeping score. correct answer = +1. incorrect answer get nothing and no minus either.
incrementScore = num => {
    score += num;
};
//timer fundtion. 60 seconds and the game end no matter what. 
function gameTime (){
    time = time + 1;
    if (time < 61){
        timer.innerHTML = time; 
    }
    if (time > 61){
        clearInterval(update);
        return window.location.assign("end.html"); 
    } 
}
update = setInterval("gameTime()", 1000);

startGame();
//view highscores on the left corner
var viewHighScores = document.getElementById("viewHighScores");
viewHighScores.addEventListener("click", function(event){
    var element = event.target;
    if (element.matches("#viewHighScores")=== true){
        location.assign("highscores.html");
    }
});


