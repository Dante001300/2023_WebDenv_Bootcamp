/*
to store a lot of data into one variable we use array --> var x = [a,b,c,d,e];
we can use syntax .includes to search for an item in an array for example  --> x.includes();
*/

var guestList = ["angela", "jack", "james", "lara", "jason"];

var name = prompt("what is your name?");

var search = guestList.includes(name);

if(search === true){
    console.log("you're on the list");
}
else{
    console.log("you're not");
}