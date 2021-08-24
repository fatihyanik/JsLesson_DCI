// console.log("Hi, there!");

// expressions, values, storing values in variables.
// console.log("James Bond");
// let, const, var
// "="_ assignment operator
// assignment statement : assigns the value of the expression on the right to the variable on the left
// 1. declares the variable "myName", using the "let" keyword
// 2. it assigns the variable "myNmae" the value of the expression "James Bond": "James Bond";
// 1. declare a let variable
// 2. assign the variable the value "James Bond" (initialize the variable with the value "James Bond")

/*
let myName = "James Bond";
console.log(myName);
*/
// variable reassignment
/*myName="Dr. No";
console.log(myName);// "Dr. No"
*/
// Updating the value of a variable in terms of its old value
/*let balance = 100;
balance = balance + 20;
balance += 20;
console.log(balance);*/
/*
let num=10;
num='eight';
console.log(typeof num);//string

let it="b";
let them="eat cake";
it=them;
console.log(it);//eat cake
console.log(them);//eat cake
*/
// the scope of a variable is the region of source code where it is defined
// determines the visibility of the variable.

// const, let : global scope or block scope.
// var: global scope or function scope

// Variables defined inside a block are not visible from outside the block
/*
{
    let a = 10;
}
console.log(a);*/ // Reference Error: a is not defined

// Variables defined outside a block are visible from inside the block
/*let a = 10;
{
    a = 20;
}
console.log(a);*/ //20

//Accessing a let or const variable before it is declared results in a reference error
/*console.log(borogove);
let borogove = "mimsy";*/ //reference error

/*console.log(borogove);
var borogove = "mimsy";*/ //undefined

// var variable declarations are hoisted to the top, let declarations are not
/*var borogove;
console.log(borogove);//undefined
borogove = "mimsy";
console.log(borogove);//mimsy */

// A let variable that has been declared but not yet initialized has the default value of undefined
//let a;
//console.log(a);

// Declaring a const variable without initializing it is a syntax error
//const a;
//console.log(a);

// Redeclaring a let or const variable is a syntax error
//let a = 10;
//let a = 10;

// A variable that has been declared outside a block can be redeclared inside the block
/*
let wocky = 11;
{
    let wocky = 13;
    console.log(wocky);//13
}
console.log(wocky);//11
*/

/*
var wocky = 11;
{
    var wocky = 13;
    console.log(wocky);//13
}
console.log(wocky);//13
*/

// The value of a const variable cannot be changed through reassignment
// const balance = 100;
// balance += 10; // Type error : no reassignment of values to const variables
// console.log(balance); // does not get executed

// let variables are mutable, const variables are not.
// DON'T confuse the mutability of values with the mutability of variables!!!!

// assigning a new value to a const variable is a type error.
// changing the value of a const variable is OK if that value is mutable
// changing the existing value of a const variable is not the same as replacing the value
// of a const variable with a new value
// const obj = {a : 1};
// obj = "Hello";
// obj.b =2;
// obj.b =3;
// console.log(obj);

// string concatenation
// const str1 = "Hello";
// const str2 = "world";
// console.log(str1+str2);
// console.log(str1+ ", " +str2+"!");

// const str1 = "Tom";
// const str2 = "Tom";
// console.log(str1 === str2);

// const obj1 = {city: "Hamburg"};
// const obj2 = {city: "Hamburg"};
// console.log(obj1 === obj2);//false

// ternary operator
// let num1 = 2 < 3 ? "Tom" : "Jerry";
// let num2 = 2 > 3 ? "Tom" : "Jerry";
// console.log(num1);
// console.log(num2);

// lazy evaluation; logical short-circuiting
// console.log(jubjub);
// console.log(false && jubjub);//false
// console.log(true && jubjub);//reference error
// console.log(true || jubjub);//true
// console.log(jubjub || true);//undefined
// console.log(false || jubjub);//undefined

// const port = process.env.PORT || 3000;

/*
if(user){
    //do something
}
*/
/*
let myName = 10 < 11 ? "Carlos" : "Edo";
let city = 10 > 12 ? "Italien": "Spanien";
console.log(myName + " " + city);
*/

/*
const str1 = "Fatih";
const str2 = "Edo";
{
    const str1 = "Edo";
    const str2 = "Fatih";
    console.log(str1);
    console.log(str2);
}
console.log(str1);
console.log(str2);
*/


var str1 = "Fatih";
var str2 = "Edo";
{
    var str1 = "Edo";
    var str2 = "Fatih";
    console.log(str1);
    console.log(str2);
}
console.log(str1);
console.log(str2);
