// has to reach out to localstorage using the same key that you put the information
// convert if from string to array
// make elements, put the info in it, and put it on the page.
// addeventlistener to clear button, and on click, clear localstorage
var Ini = document.getElementById("initials");
var submit = document.getElementById("submitScore");
var finalScore = document.getElementById("score");
var recentScores = localStorage.getItem("recentScores");

var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
// var topfive = 5;
finalScore.innerHTML = recentScores;

Ini.addEventListener("keyup", () => {
    console.log(Ini.value);
    submit.disabled = !Ini.value;
});
function saveHighScore(){
    event.preventDefault();
    var score = (Ini.value + ":" + recentScores);
    highScores.push(score);
    // highScores.sort((a,b) => {
    //     return b.score - a.score;
    // });
    // highScores.splice(5);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    console.log(highScores);
    window.location.assign("highscores.html");
};










