var output = [];
var count = 1;

function fizzBuzz () {

    while(count <= 100){
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
}
  console.log(output);
}

//----------------------------------------EXCERCISE------------------------------------------------------------------

n = 99;

while(n >= 1){
    b = n-1;
    console.log( n + " bottle of bear on the wall, " + n + " bottle of bear. Take one down and pass it around," + b + " bottles of beer on the wall" );
    n--;
}
