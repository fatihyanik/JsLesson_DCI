function add(x,y){
    return x+y;
}

//1, 2, 3

console.log(add(1,2,3));
console.log(add(1, add(2,3)));

// every function has an implicit parameter: the argument object
//VARIADIC FUNCTION (FUNCTION WITH A VARIABLE NUMBER OF ARGUMENTS)
function addArgs(){
    let sum = 0;
    for (let i = 0; i<arguments.length; i++){
        sum+=arguments[i];
    }
    return sum;
}
console.log(addArgs(1,2,3));


function addArgs1(){
    let product = 1;
    for (let i = 0; i<arguments.length; i++){
        product*=arguments[i];
    }
    return product;
}
console.log(addArgs1(1,2,3,4));


function addRest(...rest){
    let sum = rest.reduce((acc,curr) => acc + curr);
    return sum;
}
console.log(addRest(1,2,3,4));


function addRest1(...rest){
    let product = rest.reduce((acc,curr) => acc * curr);
    return product;
}
console.log(addRest1(1,2,3,5));


function logNames(a, b, ...rest){
    console.log(a,b);
    rest.forEach(item =>{
        console.log(`Another rest input : ${item}`);
    });
}
logNames('Jim', 'Jane', 'Bob', 'Phil');


// DEFAULT PARAMETERS
function greet(greeting, name){
    return greeting + ', ' + name + '!';
}
let hiMo = greet('Hi', 'Mohammad');
console.log(hiMo);


function greet2(greeting, name='user'){
    return greeting + ', ' + name + '!';
}
let welcome = greet2('Welcome');
console.log(welcome);


function greet3(greeting = 'Hello', name='user'){
    return greeting + ', ' + name + '!';
}
let hello = greet3();
//console.log(hello);
let otherHello = greet3(undefined, 'Fatih');
console.log(otherHello);