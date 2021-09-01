//1)What do you call “()“, “[]“, “{}“?
/*
() =>Parenthesis
[] =>square brackets
{} =>curly braces
*/

//2)What do you call the inputs to a function?
//argument

//3)What do you call the output of a function?
//return value

//4)Define a function that takes 2 numbers as inputs and outputs their difference.
/*
function multy(num1,num2){
    return num1 - num2;
};
console.log(multy(2,3));
*/

//5)How does an arrow function expression differ from a traditional function expression?
//No duplicate named parameter and syntax.

//6)If you declare a variable inside a function, can you access it from outside the function?
//No.

//7)What is a side-effect?  Give an example!
//A side effect is any application state change that is observable outside the called function other than its return value.

//8)What is the difference between a while-loop and a do-while loop?
//The do while loop executes the content of the loop once before checking the condition of the while.
//Whereas a while loop will check the condition first before executing the content.2

//9)When do you use a simple if-conditional and when an if/else if - conditional?
//Use if to specify a block of code to be executed, if a specified condition is true
//Use else to specify a block of code to be executed, if the same condition is false
//Use else if to specify a new condition to test, if the first condition is false

//10)How can you access the last element of an array?
//array.length-1

//11)What do you expect to be logged to the console after the following lines of code?


let myStr = 'abracadabra';
myStr.toUpperCase();
console.log(myStr); 
//abracadabra


let myArr = [1, 2, 3];
console.log(myArr.pop()); //3
console.log(myArr); // [1, 2]