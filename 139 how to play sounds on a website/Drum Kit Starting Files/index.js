// alert("hello"); // this is just to test the index.js file is working

// what we want is to add an event listener when the picture got click https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// addEventListener(type, listener)  type: A case-sensitive string representing the event type to listen for. 
//                                  listener: is basically a function like the one below funciton gotClick(){}


// document.querySelector("button").addEventListener("click", gotClick);
// button locates in index.html and it's a tag
// also we didn't use gotClick (from above) with parenthesis because if we do it will automatically trigger. So we leave out the ()

// function gotClick (){
//     alert("got click");  //this is for the pop up when drums got click
  
// }

// ------------------------------------------------------------------------------------------------------------------------------

/* Now before we can only make the first button to trigger when click now we want all the buttons to trigger when click.
if we use document.querySelectorAll("Button"); ==> result ==> NodeList(7) [button.w.drum, button.a.drum, button.s.drum, button.d.drum, button.j.drum, button.k.drum, button.l.drum]
so we know it's an array so we need to sort through all those array when a user click on a letter by using for loop and there're 7 array
so 0-6
*/

//alternatively we can also use for(var i = 0; i< 6; i++) because we know there're 7 drums in total

// for(var i = 0; i< document.querySelectorAll(".drum").length; i++){

//     document.querySelectorAll(".drum")[i].addEventListener("click", gotClick);
// // here we use the class .drum in lieu of button because it's more specific and it will sort through the whole class array from i=0-6 to find if something got click.
// }


//--------------------------------------------------Sound when drum got click--------------------------------------------------]

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement  this link is for sound audio


function whichDrumGotClick(){
    var audio = new Audio("./sounds/tom-1.mp3");
    audio.play();
    // return console.log(this);
// instroducitng syntax -->this<--- this will identify the button that trigger the vent listener 
//this will -->result--> <button class="a drum">a</button> and we can also use inner html to access to the object
    //  console.log(this.innerHTML);  // this will resulst --> w a s l or whichever click
//-------------------------to change the color of the button click to white---------------
    console.log(this.style.color = "white");
}

var numberOfDrum = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfDrum; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", whichDrumGotClick);

}