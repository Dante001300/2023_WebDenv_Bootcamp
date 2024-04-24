/*let's create a constructor function with a method(or function) inside of it
*/

function HouseKeeper (years, name, repertoire) {
    this.numberOfYear = years;
    this.yourName = name;
    this.whatYouGoodAt = repertoire;
    this.nameOfFunction = function (){
        alert("I can do this");
    }
}

//Now let's say we want to create a new house keeper we can just use

var houseKeeperNumber1 = new HouseKeeper (2, "virgil", ["eating","sleeping"]);

//and if we want this houseKeeperNumber1 to perform a function we jsut need to call that function .nameOfFunction

houseKeeperNumber1.nameOfFunction();

//also to empty cache on chrome right click on the refresh button