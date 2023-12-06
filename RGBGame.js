var colours = randomColours(6);
 
// quesrSelector takes a CSS variable hence the full stop
var squares = document.querySelectorAll(".square");
var colourPicked = pickColour();
var winningColour = document.querySelector("#winningColour");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var scoreCurrent = 6;
var score = document.getElementById("score");

winningColour.textContent = colourPicked;
 
 
for(var i=0 ; i<squares.length ; i++){
    // Add colours to squares
    squares[i].style.backgroundColor = colours[i];
 
    // Add click listeners to squares
    // Setup mouseover listener
    squares[i].addEventListener("click", function(){
    // Grab colour of picked square
    var clickedColour = this.style.backgroundColor;
        // Compare colour to winningColour
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
    // Make an array
    var array = [];
    // Add "amount" number of colours to array
    for(var i=0 ; i<amount ; i++){
        array.push(randomColour());
    }
    // Return array 
    return array;
}
 
function randomColour(){
    // Random red from 0 - 255
    var red = Math.floor(Math.random() * 256);
    // Random green from 0 - 255
    var green = Math.floor(Math.random() * 256);
    // Random blue from 0 - 255
    var blue = Math.floor(Math.random() * 256);
    var colour = "rgb(" + red + ", " + green + ", " + blue + ")";
    return colour;
}