// https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event this link is for keydown

//-------------------------------using key down to detect keyboard presses-------------------------------------------------]


var numberOfDrum = document.querySelectorAll(".drum").length;
//====================================This is the for function to go through all the picture===========and button got click

for(var i = 0; i < numberOfDrum; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;  //thi.innerHTML converts the javascript into html string
        toMakeSound(buttonInnerHTML); //This will allow the function toMakeSound to use the variable buttonInnerHTML to run click on button
        animationForDrum(buttonInnerHTML);
    });

}
//======================================This is when key is pressed down===================================================

    document.addEventListener("keydown", function(dante){
        dante = dante.key; // key here is similar to this.innerHTML it conver the javscript into html string
        toMakeSound(dante);
        animationForDrum(dante);
    });

 //=============================================To add animation to the button when press or click===============================
function animationForDrum(buttonInnerHTML) {
    console.log("animation " + buttonInnerHTML);
    document.querySelector("."+buttonInnerHTML).classList.add("pressed");  //the "." before the buttonInnerHTML is because to search
    //for class it need to be .class or .w or .drum

//Now we need to remove a .pressed class after a few seconds, so we need to add a delay function to remove it
function turnOffPressedClass() {
    document.querySelector("."+buttonInnerHTML).classList.remove("pressed");
}

setTimeout(turnOffPressedClass, 200);
}

   
//=============================================this is the switch statement to make sound========================================

function toMakeSound(key){

        switch (key) {
            case "w":
                var w_drum = new Audio("./sounds/crash.mp3");
                w_drum.play();
                break;
    
            case "a":
                var a_drum = new Audio("./sounds/kick-bass.mp3");
                a_drum.play();
                break;

            case "s":
                var s_drum = new Audio("./sounds/snare.mp3");
                s_drum.play();
                break;

            case "d":
                var d_drum = new Audio("./sounds/tom-1.mp3");
                d_drum.play();
                break;

            case "j":
                var j_drum = new Audio("./sounds/tom-2.mp3");
                j_drum.play();
                break;

            case "k":
                var k_drum = new Audio("./sounds/tom-3.mp3");
                k_drum.play();
                break;

            case "l":
                var l_drum = new Audio("./sounds/tom-4.mp3");
                l_drum.play();
                break;
        
            default:
                console.log("nothing");
                break;
        }
}


//===================================================to detect key pressed========================================
// document.addEventListener("keydown", iPressed); // "keydown" here is a key syntax

// // we can input a variable inside the function so it can return the value back
// function iPressed (dante){
//     var dante = dante.key;
// //so for key board press we have to use .key to convert to text (this is simlar to --> var drumType = this.innerHTML;)
//     console.log(dante);
// }

//========================================COMPLETED THE PROJECT=====================================================