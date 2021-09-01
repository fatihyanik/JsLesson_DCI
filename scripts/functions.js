// function with side-effect but no explicit return statement
//console.log('Hello, John!');

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
console.log(multy(2,3));
let result = multy(5,6);
console.log(result);//30

//2. Multiply - Function Declarations as Values
//Rework the syntax of the above function so that the function declaration is stored as a value.
const product = function(val1,val2){
    return val1 * val2;
};
console.log(product(2,6));

//3. Multiply - Arrow Function
//Rework the syntax of the function declaration so that is uses the arrow function shorthand.
const multiply = (num3, num4) => num3 * num4;
console.log(multiply(7,8));

//2.way
const multiply2 = (num3, num4) =>{
    return num3 * num4;
}
console.log(multiply2(7,8));
//4. Declarations
//Create functions (using all three declarations) to check the remainder of division given two numbers.
//function declaration way
function type0(num1, num2){
    return num1 % num2;
}
console.log(type0(3,2));

//stored as a value way(declarations)
const type1 = function(num1, num2){
    return num1%num2;
}
console.log(type1(4,2));

//arrow way
const type2 = (num1, num2) =>{
    return num1%num2;
}
console.log(type2(7,5));

//1. Print Exponential Values
//Write a function that accepts two numbers and validate that they are numbers.
//After that, the function should print y exponential values starting from x.
//For example if we have function(3, 5) The function should print 3 9 27 81 243. Prints 5 exponential values of 3.
//function(2, 8) The function prints 2 4 8 16 32 64 128 256. Prints 8 exponential values of 2.

function num(x,y){
    if(typeof x === 'number' && typeof y==='number'){
        let i = 0;
        do{
            i++;
            let exponential = x ** i;
            console.log(exponential+ ' ');
        }while(i<y);
    }
}
num(2,8);


const numbers = (num1, num2) =>{
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        let product = 1;
        for(let i=0; i<num2; i++){
            console.log(num1*product);
            product = product * num1;  
        }
    }else{
        return `Please type in valid numbers`;
    }
}
console.log(numbers(3,5));



//2. Fruits
//Create a function named printFavoriteFruit. 
//Declare a variable outside of the function and store your favorite fruit as a value.
//Reassign the variable within the function and print “My favorite fruit is: x”.
let favoriteFruit = "banana";
const printFavoriteFruit = (favoriteFruit) =>{
    favFruit = favoriteFruit;
    console.log(`My favorite fruit is ${favFruit}`);
}
printFavoriteFruit(favoriteFruit);
//3. Multiply a Number by Itself
//Create a function named exponent that takes two numbers as parameters.
//The second parameter defines how many times the first number should be multiplied by itself. 
//Save the output in a variable named result.
//Then, try to access the variable result outside of the exponent function. 
const exponent = (num1, num2) => {
    for(i = 0; i < num2; i++){
        let result = num1 *= num1;
    }
    console.log(result);
}
//Is this possible? Why/Why not? Comment your answer in the index.js file.
const exponent1 = (x, y) => (result =(x**y));
console.log(exponent1(2,3));
console.log(result);

//Salim puzzle
let array1 = ["l", "o", "v", "e"];
let array2=array1.reverse();
console.log(array2);//[ 'e', 'v', 'o', 'l' ]
array1.reverse();
console.log(array1);//[ 'l', 'o', 'v', 'e' ]
console.log(array2);//[ 'l', 'o', 'v', 'e' ]
array1.reverse();
console.log(array2);