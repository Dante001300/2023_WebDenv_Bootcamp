// we use return syntax to return an output for example
    // function getMilk (money) {
    //     return money;
    // }

//---------------------------------------------------------------------------------------------------------



    function getMilk (money){

        var numberOfBottle = Math.floor(money / 1.5);
        //Math.floor always round DOWN and returns the largest integer for example 5.95 -> 5 // 5.05 -> 5 // -5.05 -> -6

        console.log("buy " + numberOfBottle + " bottle of milk");

        return money % 1.5; // return an modulo of money/1.5
    }

var change = getMilk(4);
console.log(change);    





//--------------------------Now another way to do this is with an output return value function -------------------
  function getMilk (money, costPerBottle){

        //in this method we don't need to use the line below
        // var numberOfBottle = Math.floor(money / 1.5);

        //so when this line ran it will go look for a function called calcBottle(money,1.5) then the function will do its stuffs and return
        //its output 
        console.log("buy " + calcBottle(money, costPerBottle) + " bottle of milk");

        return money % 1.5; // return an modulo of money/1.5
    }

    console.log("hello master, here is your " + getMilk(10,3) + " change.")
    // the function getMilk can be together inside a console.log

function calcBottle (startingMoney, costPerBottle){

    var numberOfBottle = Math.floor(startingMoney/costPerBottle);

    return numberOfBottle;
}