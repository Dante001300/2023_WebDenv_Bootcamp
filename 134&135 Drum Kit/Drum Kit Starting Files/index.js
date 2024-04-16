// alert("hello"); // this is just to test the index.js file is working

// what we want is to add an event listener when the picture got click https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// addEventListener(type, listener)  type: A case-sensitive string representing the event type to listen for. 
//                                  listener: is basically a function like the one below funciton gotClick(){}


// document.querySelector("button").addEventListener("click", gotClick);
// button locates in index.html and it's a tag
// also we didn't use gotClick (from above) with parenthesis because if we do it will automatically trigger. So we leave out the ()

function gotClick (){
    alert("got click");
}

// ------------------------------------------------------------------------------------------------------------------------------

/* Now before we can only make the first button to trigger when click now we want all the buttons to trigger when click.
if we use document.querySelectorAll("Button"); ==> result ==> NodeList(7) [button.w.drum, button.a.drum, button.s.drum, button.d.drum, button.j.drum, button.k.drum, button.l.drum]
so we know it's an array so we need to sort through all those array when a user click on a letter by using for loop and there're 7 array
so 0-6
*/

//alternatively we can also use for(var i = 0; i< 6; i++) because we know there're 7 drums in total

for(var i = 0; i< document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", gotClick);
// here we use the class .drum in lieu of button because it's more specific and it will sort through the whole class array from i=0-6 to find if something got click.
}