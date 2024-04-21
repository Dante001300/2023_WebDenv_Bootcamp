// alert("hello"); // this is just to test the index.js file is working

//-------------------------------use switch statement to select different sound for each drum--------------------------------------------------]

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement  this link is for sound audio


function whichDrumGotClick(){
    // var audio = new Audio("./sounds/tom-1.mp3");
    // audio.play();

    // console.log(this.style.color = "white");  // this is to turn text to white when click using "this"
    
    var drumType = this.innerHTML;
        console.log(drumType);

        switch (drumType) {
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


var numberOfDrum = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfDrum; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", whichDrumGotClick);

}