// Immediately Invoke Function Expressions (IIFE's)
/* const add = function (x,y){
    return x+y
} */
let num = function(x,y){return x+y;}(3,4); // immediately invoked function expression (IIFE)
console.log(num);

/* function greet(greting, name){
    return `${greting}, ${name}!`;
}
let aliGreeting = greet("Hi", "Ali");
console.log(aliGreeting); */

let aliGreeting = (function (greeting, name){
    return greeting + ", " + name + "!";
}("Hi", "Ali"));
console.log(aliGreeting);

// nested functions
let napoGreeting = function outer(){
    function inner(){
        return 'Hi, Napo!';
    }
    return inner;
}()();
console.log(napoGreeting);

/* let msg = "Secret message";
console.log(msg); */
(function(){
    let msg = "Secret message";
    console.log(msg);
})();


function createStack() {
    return {
      items: [],
      push(item) {
        this.items.push(item);
      },
      pop() {
        return this.items.pop();
      }
    };
  }
  const stack = createStack();
  stack.push(10);
  stack.push(5);
  stack.pop(); // => 5
  stack.items; // => [10]
  stack.items = [10, 100, 1000]; 

function multiply(num1,num2){
    if(num1&&num2){
        return num1*num2;
    }
    return function (num2){
        return num1*num2;
    }
}
console.log(multiply(4,5));

const double = multiply(2);
console.log(double(11));