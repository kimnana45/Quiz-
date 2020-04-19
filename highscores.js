var highScoresList = document.getElementById("highScoresList");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);
var goBack = document.getElementById("back");
var clear = document.getElementById("clear");
//try many ways, something is missing? Could not get the score to append :'(
function showHighScores(){
    for (var i=0; i< highScoresList.length; i ++){
        var highScores = score[i];
        var li = document.createElement("li");
        li.textContent = highScores;
        highScoresList.append(highScores);
    }
};
showHighScores();

//button eventlisteners 
goBack.addEventListener("click", function(event){
    var element = event.target;
    if (element.matches("button")=== true){
        location.assign("start.html");
    }
});

clear.addEventListener("click", function(event){
    highScoresList.innerHTML= "";
})