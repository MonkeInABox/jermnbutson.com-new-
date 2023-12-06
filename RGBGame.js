var colours = randomColours(6);

var squares = document.querySelectorAll(".square");
var colourPicked = pickColour();
var winningColour = document.querySelector("#winningColour");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var scoreCurrent = 6;
var score = document.getElementById("score");

winningColour.textContent = colourPicked;
 
 
for(var i=0 ; i<squares.length ; i++){
    squares[i].style.backgroundColor = colours[i];
    squares[i].addEventListener("click", function(){
    var clickedColour = this.style.backgroundColor;
        if(clickedColour === colourPicked){
            var popup = document.getElementById("myPopup");
            popup.classList.toggle("show");
            changeColours(clickedColour);
        } else{
            this.style.backgroundColor = "#232323";
            scoreCurrent = scoreCurrent - 1;
        }
    });
}
 
function changeColours(colour){
    for (var i=0 ; i<squares.length ; i++){
        squares[i].style.backgroundColor = colour;      
    }
    score.innerText = "Score: " + scoreCurrent + "/" + 6;
}
 
function pickColour(){
    var number = Math.floor(Math.random() * colours.length);
    return colours[number];
}
 
function randomColours(amount){
    var array = [];
    for(var i=0 ; i<amount ; i++){
        array.push(randomColour());
    } 
    return array;
}
 
function randomColour(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var colour = "rgb(" + red + ", " + green + ", " + blue + ")";
    return colour;
}