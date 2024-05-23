// alert("hello Dante"); // testing to make sure game.js is linked
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var colorGotClickForSound = [];

function generate0To3() {
    var random_number = Math.random()*4; // we multiply by 4 because we use Math.floor it will always round down basically 3.9 will round down to 3
    //and it will never be 4 that way we can still get 0 includesive.
    var chosenNumber = Math.floor(random_number);
    return chosenNumber;
}
var theChosenNumber = generate0To3();
var theChosenColour = buttonColours[theChosenNumber];
gamePattern.push(theChosenColour);
console.log(gamePattern); // this is just to test

//-----------------------------------animate a flash to the button selected--------------------------------------
// we can use $("#green").addClass("pressed") or just use slideup() slidedown() opacity();


$("#" + gamePattern).animate({opacity: 0.5});
setTimeout(() => {
    $("#" + gamePattern).animate({opacity: 1});},100);

//---------------------------------------------Check which button is click-----------------------------------


$(".btn").click(function (Dante){ // lever way to use btn class because all 4 buttons got this class
    // console.log($(this)); // this function will show what the user just clicked on
var colorGotClick = $(this).attr("id");
    // console.log("color got clicked is " + colorGotClick);
    userClickedPattern.push(colorGotClick);
    console.log(userClickedPattern + "      click function"); // this is just to test

//we can not return the colorGotClick outisde of this function so instead of returning it we pass the function that 
//needs it in here to use it.
    toMakeSound(colorGotClick);
});


//---------------------------------------------Play sound when clicked-----------------------------------
//in order for this function to work we need to pass toMakeSound function inside of button is click

function toMakeSound (Dante) {
    console.log(Dante + "       Sound function"); // this is just to test
    switch(Dante){
        case "green":
            var green_sound = new Audio ("./sounds/green.mp3");
            green_sound.play();
        break;


        case "red":
            var red_sound = new Audio ("./sounds/red.mp3");
            red_sound.play();
        break;


        case "yellow":
            var yellow_sound = new Audio ("./sounds/yellow.mp3");
            yellow_sound.play();
        break;


        case "blue":
            var blue_sound = new Audio ("./sounds/blue.mp3");
            blue_sound.play();
        break;

    }
}