var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var randomChosenColour;
var randomNumber;
var x;
var userClickedPattern = [];
var FirstPress = true;
var level = 0;
var i;

function playSound(name){
    var audio2 = new Audio("sounds/" + name + ".mp3");
    audio2.play();
}

function nextSequence(){

    i = 0 ;
    randomNumber = Math.floor(Math.random() * 4);

    randomChosenColour = buttonColours[randomNumber]; 
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(60).fadeIn(70).fadeOut(50).fadeIn(40);
    
    $("h1").text("Level " + level);
    ++level;

    playSound(randomChosenColour);

}

$(".btn").click(function(){

    if(FirstPress==true)
    return;

    var userChosenColour;
    userChosenColour = $(this).attr("id");
    playSound(userChosenColour);
    animatePress(userChosenColour);

        if(gamePattern[i] == userChosenColour){
            i++;
            if(i == gamePattern.length){
                nextSequence();
            }
        }
        else {
            var w ="wrong";
            playSound(w);
            startOver();
            $("h1").text("Game Over, Press Any Key to Restart");
            $("body").addClass("game-over");
            setTimeout(function(){
            $("body").removeClass("game-over")},200);
        }
})

function startOver(){
    level = 0;
    gamePattern = [];
    FirstPress = true;
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    
    setTimeout(function(){
    $("#" + currentColour).removeClass("pressed")},100);
    
}

$(document).keypress(function(){
    if(FirstPress === true)
    {
        nextSequence();
        FirstPress = false;
    }
})
