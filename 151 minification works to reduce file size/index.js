//https://code.jquery.com/jquery-3.7.1.min.js

/*minification is simply take code and delete all the spacing and comment to reduce file size

go to this website to quickly do it    ---> https://www.minifier.org/
*/

var numberOfDrum=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrum;i++){document.querySelectorAll(".drum")[i].addEventListener("click",function()
{var buttonInnerHTML=this.innerHTML;toMakeSound(buttonInnerHTML);animationForDrum(buttonInnerHTML)})}
document.addEventListener("keydown",function(dante){dante=dante.key;toMakeSound(dante);animationForDrum(dante)});
function animationForDrum(buttonInnerHTML){console.log("animation "+buttonInnerHTML);
document.querySelector("."+buttonInnerHTML).classList.add("pressed");
function turnOffPressedClass(){document.querySelector("."+buttonInnerHTML).classList.remove("pressed")}
setTimeout(turnOffPressedClass,200)}
function toMakeSound(key){switch(key){case "w":var w_drum=new Audio("./sounds/crash.mp3");
w_drum.play();break;case "a":var a_drum=new Audio("./sounds/kick-bass.mp3");a_drum.play();
break;case "s":var s_drum=new Audio("./sounds/snare.mp3");s_drum.play();break;case "d":
var d_drum=new Audio("./sounds/tom-1.mp3");d_drum.play();break;case "j":var j_drum=new Audio("./sounds/tom-2.mp3");
j_drum.play();break;case "k":var k_drum=new Audio("./sounds/tom-3.mp3");
k_drum.play();break;case "l":var l_drum=new Audio("./sounds/tom-4.mp3");l_drum.play();break;default:console.log("nothing");break}}