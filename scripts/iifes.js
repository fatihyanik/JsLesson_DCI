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
