/*
we can use .push function to add an item to an array for example:
var x = []; empty array
x.push(1); will add one to the array

we can use .pop function to remove an item from an array(the last position in an array)
var x = [1 2 3];
x.pop; will remove number 3

*/

var output = [];
var count = 1;

function fizzBuzz () {

  if(count % 3 === 0 && count % 5 ===0){
    output.push("Fizz Buzz");
  }else if(count % 5 ===0){
    output.push("Buzz");
  }else if(count % 3 === 0){
    output.push("Fizz");
  }else{
    output.push(count);
  }
  
  count++;
  console.log(output);
}

