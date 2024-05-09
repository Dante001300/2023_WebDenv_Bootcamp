//152 ------------- select an element on the webpage using JQuery we'll be using JQuery or $ sign---------------------------------

// ============================"$" or "JQuery" are bascially === document.querySelector==============================

// //152-----------------Select elements with JQuery--------------------------
// $("h1") //select an h1 element
// $(h1.title) //h1 with a class or title
// $("#header h1"); //h1 nested inside a div with a ID of header


// //153 ------------- manipulating styles with JQuery---------------------------------
// $("h1").css("color", "green");
// console.log($("h1").css("color", "green")); // we can also console log to see the color red,gree,blue
// console.log($("h1").css("font-size", "5rem"));// to see the font size
// $("h1").addClass("big-title margin-50")///////// we can also add multiple class at once
// $("h1").hasClass("margin-50"); // this is to check if we have the class name margin-50


// //154------------------Manipulating Text with JQuery-----------------------------------

// $("h1").text("byesdfsdfs"); // change the text of the element
// $("h1").html("<em>Italicize the text by using method .html in lieu of .text</em>") // a method is dot in front of for exm: .t or .html


// //155-------------------Manipulating Attributes with JQuery-----------------------------------
// //attribute is like src= of img or href of <a>

// console.log($("img").attr("src")); // this is to get the value of the attribute using the methods .attr
// $("a").attr("href", "https://www.yahoo.com");//change the url


//156------------------Adding Event listeners With JQuery------------------------------------

// $("h1").click(function(){ //this is to add evenListner to css using Jquery after clicking h1 the color of h1 change to red
//     $("h1").css("color", "red")
// });

// //Now if we want to add eventListener to all the h1 using document search this is what we will do using for loop
// for (var i = 0; i<5; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color = "green";
//     });
// }
//Above is the long way to do it we can do it with JQuery with fewer line of code

$("button").click(function(){ //So now when click on any button H1 will change color to red
    $("h1").css("color", "yellow");
});

$("input").keypress(function (danteSeeEvent){ //input is the search bar in index.html
    console.log(danteSeeEvent.key); //.key here is a method to detect key choke
    var pressed_key = danteSeeEvent.key;
    $("h1").text(pressed_key);
});

$("h1").on("mouseover", function(){ // mouseover is a method when mouse is hover over h1 it will change color
    $("h1").css("color", "green");
});