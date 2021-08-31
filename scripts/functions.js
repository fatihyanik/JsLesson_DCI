// function with side-effect but no explicit return statement
console.log('Hello, John!');

// function without side-effect but with explicit return statement
// function declaration
/*
function add(x, y) {
    return x + y;
}
const sum = add(3,5); // invoking a function; calling a function; applying the function certain arg
console.log(sum);
console.log(add(3,5));
*/

// function expression ( Function expressions are always part of larger statements)
/*
const add = function(x,y){
    return x+y;
}

console.log(add(3,5));
*/

//function declarations are hoisted(moved to the top of their scope),
//so you can access the function before it is declared
/*
console.log(squared(2));
function squared(x){
    return x *x;
}
*/

// function expressions are not hoisted
/*
console.log(cubed(2));//const varda burasi function'in ustne yaziamaz
const cubed = function(x){
    return x*x*x;
}
//console.log(cubed(2));
*/

// traditional function expression
/*
const double = function(x){
    return 2*x;
};
*/

// arrow function expression("return" keyword and braces around function body not)
/*
const double = x => 2 * x;
const double4 =double(4);
console.log(double4);
*/

// traditional function expression
/*
const greet = function(name){
    let greeting = 'Hi';
    return greeting + ', ' +name + '!';
};
*/

/*
const greet = name => {
    let greeting = 'Hi';
    return greeting + ', ' +name + '!';
};
const janeGreeting = greet('Jane');
console.log(janeGreeting);
*/

/*
function addSquares(x,y){
    function square(x){
        return x * x;
    }
    console.log(square(5));//25 return'den onunde calisiyor
    return square(x) + square(y);
    console.log(square(5));//Burada calismiyor. onemli
}
console.log(addSquares(2,3));//13
*/

//1. Multiply - Function Declaration
//Create a function that multiples a number by another number.
function multy(num1,num2){
    return num1 * num2;
};
let fatih = multy(5,6);
console.log(fatih);//30
console.log(multy(2,3));
//2. Multiply - Function Declarations as Values
//Rework the syntax of the above function so that the function declaration is stored as a value.
const product = function(val1,val2){
    return val1 * val2;
};
console.log(product(5,6));

//3. Multiply - Arrow Function
//Rework the syntax of the function declaration so that is uses the arrow function shorthand.
const multiply = (num3, num4) =>{
    return num3 * num4;
}
console.log(multiply(7,8));
//4. Declarations
//Create functions (using all three declarations) to check the remainder of division given two numbers.
function type0(num1, num2){
    return num1 % num2;
}
console.log(type0(3,2));

const type1 = function(num1, num2){
    return num1%num2;
}
console.log(type1(4,2));

const type2 = (num1, num2) =>{
    return num1%num2;
}
console.log(type2(7,5));