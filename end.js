
var Ini = document.getElementById("initials");
var submit = document.getElementById("submitScore");
var finalScore = document.getElementById("score");
var recentScores = localStorage.getItem("recentScores");

var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
finalScore.innerHTML = recentScores;

Ini.addEventListener("keyup", () => {
    console.log(Ini.value);
    submit.disabled = !Ini.value;
});
function saveHighScore(event){
    event.preventDefault();
    var score = (Ini.value + ":" + recentScores);
    highScores.push(score);
    highScores.sort((a,b) => {
        return b.score - a.score;
    });
    highScores.splice(5);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    console.log(highScores);
    window.location.assign("highscores.html");
};
saveHighScore();









