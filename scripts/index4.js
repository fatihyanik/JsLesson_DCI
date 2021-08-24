// pre-increment and post-increment operator
//let count = 1;
//console.log(count++);//1 returns count, then increments count by 1
//console.log(count);//2
//console.log(++count);//3 increments count by 1 and returns the incremented count

// the decrement operator "--" works in the same way
//let count = 10;
//console.log(count--);//10 returns count, then decrements count by 1
//console.log(count);//9
//console.log(--count);//8 decrements count by 1 and returns the incremented count

//console.log(4); //integers
//console.log(4.1);//floating point number (floats)

//implicitly converting strings to numbers
//console.log(typeof(1 * '3'));//implicit type conversion / type coercion 
//console.log(+'3');//implicitly converts string to number
//console.log(1 * '3');//implicit type conversion / type coercion

//explicitly converting strings to numbers
//let str = '3';
//console.log(parseInt(str));
//console.log(parseInt('3.9'));
//console.log(parseFloat('3.9'));
//console.log(Number('3.9'));

//Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.
//let introSentence = "hello, my name is Fran and I am";
//let age = 25;
//console.log(introSentence+" " +age);//string

//Create a variable with the value of “1005”. Convert it to a number.
//let value = "1005";
//console.log(parseInt(value));
//console.log(Number(value));
//console.log(1 * value);
//console.log(+ value);

//Create a variable with the value of “10.05". Convert it to a number.
//let num = "10.05";
//console.log(parseFloat(num));
//console.log(parseInt(num));
//console.log(Number(num));
//console.log(1 * num);
//console.log(+ num);

//Pitfalls
//1. NaN
//Question: Comment your answer in your js file: What does NaN stand for?
//Not a number value

//Check if "hello" is NaN.
console.log("hello");
console.log(isNaN("hello"));//true

//Check if 3 is NaN.
console.log(isNaN(3));//false

//What is the type of NaN?
console.log(typeof NaN);//number

//2. Rounding
console.log(0.1 * 0.2);
console.log((0.1 * 0.2).toFixed(2));

//The above in JavaScript will print: 0.020000000000000004. Use a method to make sure that only 0.02 is printed.
console.log(Math.ceil(0.020000000000000004));// rounding up
console.log(Math.floor(0.020000000000000004));//rounding down

//3. Infinity
//Divide Infinity by 0.
console.log(Infinity/0);//infinity
//Divide Infinity by Infinity.
console.log(Infinity/Infinity);//NaN
//Divide 1 by 0.
console.log(1/0);//Infinity

//NaN
console.log(3 * 'John'); // NaN
console.log(typeof NaN); // number
console.log(NaN === NaN);// false 

// isNaN(x) determines if value is NaN; so does x !== x
let myProduct = 3 * 'John'; //NaN
console.log('myProduct is ' + myProduct);
console.log(isNaN(myProduct));//true
console.log(myProduct !== myProduct); //true

let myFraction = 0/0;
console.log('myFraction is' + myFraction);
console.log(isNaN(myFraction));//true
console.log(myFraction === myFraction);// false(correct answer)

let myOtherFraction = 1/0;
console.log('myOtherFraction is ' , myOtherFraction);//Infinity
console.log(isNaN(myOtherFraction));//false
console.log(myOtherFraction === myOtherFraction); //true

//but beware of false positives
console.log(isNaN('Hello'));//true

//reliable tests
console.log(Number.isNaN('Hello'));//false
console.log('Hello' === 'Hello');//true

//statements vs expressions
//expressions have a value, statements end in a semicolon and do something
console.log('hi'); // statement
2 + 2 === 5; // expression with value false

//escape character(\), escape sequences(\')
console.log('I can\'t do this'); //single (double) quotes are string delimiters
console.log(`I can't do this`); 
console.log("I can't do this"); 
console.log('He said "Yes first, then "No"');

// use the escape sequence \n to start a new line
console.log('Line 1 \nLine 2');
console.log(`Line 1 
Line 2`);