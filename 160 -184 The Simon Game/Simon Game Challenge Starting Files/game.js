// alert("hello Dante"); // testing to make sure game.js is linked
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern;

function nextSequence() {
    var random_number = Math.random()*4; // we multiply by 4 because we use Math.floor it will always round down basically 3.9 will round down to 3
    //and it will never be 4 that way we can still get 0 includesive.
    var chosenNumber = Math.floor(random_number);
    console.log(chosenNumber); // this is just to check the code is working
    return chosenNumber;  // make the function return a number
}

var randomChoosenColour = nextSequence(); // get the random number from nextSequence() function

gamePattern = buttonColours[randomChoosenColour];

console.log(gamePattern);

//-----------------------------------animate a flash to the button selected--------------------------------------
// we can use $("#green").addClass("pressed") or just use slideup() slidedown() opacity();
$("#" + gamePattern).slideUp().slideDown().animate({opacity: 0.5});