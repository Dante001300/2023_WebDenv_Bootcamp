/*A higher order function is a function that takes other function as an input for example we have

function add(num1, num2){
    return num1 + num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

instead of having to type in add(1,2) or multiply(4,7) everytime we want to add or multiply we can make a function that passes
in the add and multiply function. And let's call it a calculator function

                            function calculator(num1, num2, operator){
                                return operator(num1, num2);
                            }
So here if we want to add 3 and 4 we can just do ---> calculator(3,4,add); 

Chrome has a cool feature call debugger; where it will go through the process of the function step by step so we can debug where thing
goes wrong. So go to chrome console and type in ------> 
1. debugger;
2. calculator(3,4,add);
*/

function add(num1, num2){
    return num1 + num2;
}

function substrack(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function calculator(num1, num2, operator){
    return operator(num1, num2);
}

// for example calculator(1,2,substrack);