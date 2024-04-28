/*Alright so this lession is about understanding callback fuction and higher-order function
so first let's use wekipedia to do exercise on this lession go to https://en.m.wikipedia.org/wiki/JavaScript
and select the wikipedia heading <h1> and we can see that the h1 is the "$0" and we'll add an eventlistener to it for click

*/

$0.addEventListener("click", function(dante){
    console.log(dante);
    //when we clicked on the javascript h1 it should give us the detail
});

//--------------------------------------------------------------------------------------------
/*Now let practice callback function
*/

function anotherEventListener (typeOfEvent, callback){
  // typeOfEvent is listed under eventType and if the function anotherEventListener is use it need to use the items inside of eventType  
    var eventType = {
        name: "festival",
        days: 2,
        key: "p"
    }

    if(eventType.name === typeOfEvent){
        callback(eventType);
    }
}



anotherEventListener("festival", function(dante){
//the first input needs to be "featival" from name, or 2 from day, or "p" from key 
    console.log(dante);
})
//result should be this ==> {name: 'festival', days: 2, key: 'p'}days: 2key: "p"name: "festival"[[Prototype]]: Object
//--------------------------------------------------------------------------------------------------
