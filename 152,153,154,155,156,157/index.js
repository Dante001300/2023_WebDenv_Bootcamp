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

// $("button").click(function(){ //So now when click on any button H1 will change color to red
//     $("h1").css("color", "yellow");
// });

// $("input").keypress(function (danteSeeEvent){ //input is the search bar in index.html
//     console.log(danteSeeEvent.key); //.key here is a method to detect key choke
//     var pressed_key = danteSeeEvent.key;
//     $("h1").text(pressed_key);
// });

// $("h1").on("mouseover", function(){ // mouseover is a method when mouse is hover over h1 it will change color
//     $("h1").css("color", "green");
// });


//157------------------Adding and Removing Elements with JQuery------------------------------------

// $("h1").before("<button>Before is outside h1</button>"); // this is to add a button before the h1 by using .before method
// $("h1").prepend("<button>prepend is before h1 but still inside h1 element</button>");
// $("h1").append("<button>append is after h1 but still inside h1 element</button>");
// $("h1").after("<button>after is after h1 and is outside of h1 element</button>");
// $("buttons").remove() // this will remove everything


//158------------------Website animations with JQuery------------------------------------
$("button").on("click", function(){
    // $("h1").hide(); // this will hide the h1 when click on any buttons.
    // $("h1").show(); // this will show the h1 when click on any buttons.
    // $("h1").toggle(); // this will toggle between show and hide the h1 when click on any buttons.
    // $("h1").fadeOut(); // this will slowly disappear
    // $("h1").fadeIn(); // this will slowly reappear
    // $("h1").fadeToggle(); // this will slowly fade in and out
    // $("h1").slideUp(); // this will slide up
    // $("h1").slideDown(); // this will slide down
    // $("h1").slideToggle(); // this will slide toggle

    // $("h1").animate({opacity: 0.5}); // custom css animation
    //animate only take in numeric value for example animate({color: red will not work}) for animate to work the second
    //input has to be a number value for example animate({margin: "20%"})

    $("h1").slideUp().slideDown().animate({opacity: 0.5}); // we can also chain animation
});