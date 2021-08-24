//console.log(Math.PI.toFixed(1))

/*
let val;
val = Math.min(2,34,55,500);
val = Math.max(2,34,55,500);
val = Math.random().toFixed(1)*10;
val = Math.floor(3.9);
val = Math.floor(Math.random()*10);
val = Math.ceil(3.2);
val = Math.round(3.2);
val = Math.round(3.5);
*/
//console.log(val);

// USE THE CORRECT MATH FUNCTION TO GENERATE THREE RANDOM NUMBER 1-10
// STORE EACH OF THESE IN VARIABLE NAMED NUM1, NUM2, NUM3. CONSOLE LOG THE VARIABLES
//FIND THE LARGEST OF THREE NUMBERS BY USING THE RELEVANT MATH METHOD. 
//STORE THE VALUE IN A VARIABLE AND CONSOLE.LOG MAX TO SHOW THE LARGEST NUMBER

//First Way
/*
let num1 = Math.random().toFixed(1)*10;
console.log("num1: "+ num1);
let num2 = Math.random().toFixed(1)*10;
console.log("num2: "+ num2);
let num3 = Math.random().toFixed(1)*10;
console.log("num3: " + num3);
largest =Math.max(num1, num2, num3);
console.log("Largest number: " + largest);
*/

//Second Way
/*
let num1 = Math.floor(Math.random() * 10 +1);
console.log("num1: "+ num1);
let num2 = Math.floor(Math.random() * 10 +1);
console.log("num2: "+ num2);
let num3 = Math.floor(Math.random() * 10 +1);
console.log("num3: " + num3);
largest =Math.max(num1, num2, num3);
console.log("Largest number: " + largest);
*/

//Third Way
let num1 = Math.ceil(Math.random() * 10);
console.log("num1: "+ num1);
let num2 = Math.ceil(Math.random() * 10);
console.log("num2: "+ num2);
let num3 = Math.ceil(Math.random() * 10);
console.log("num3: " + num3);
largest =Math.max(num1, num2, num3);
console.log("Largest number: " + largest);