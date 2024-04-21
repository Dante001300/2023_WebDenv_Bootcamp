/*
alright so we'll go deeper into create a javascript object let's say we want to create a variable that includes many other
elements inside of it. say var name and inside name we want age, height, weight,...
*/

var houseKeeper1 = {
    yearOfExperience:12,
    name: "Tom",
    cleanRepertoire: ["bathroom", "lobby", "bedroom"]
}

/*Now what if we want 100 more houseKeeper we're not going to make 100 variable for houseKeeper instead we can use
constructor function. Note that the first letter of contructor function is capitalize "Person" P is cap

    function Person (first,last,age,eye){
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
    }
*/

function HouseKeeper (yearOfExperience, name, cleanRepertoire){
    this.yearOfExperience = yearOfExperience;
    this.name = name;
    this.cleanRepertoire = cleanRepertoire;
}

// so now if we want to add a new house keeper all we have to do is below
var houseKeeper1 = new HouseKeeper (9, "Tin", ["lobby", "bedroom"]);

//try this in chrome developer tool

//if we type in houseKeeper1.name ---> result --> Tin