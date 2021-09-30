// You already know that inner functions have access to the variables of outer functions
function outer(){
    let count = 0;
    function inner(){
        return count;
    }
    return inner();
}
let myCount = outer();
console.log(myCount); // 0

// inner functions have access to the variables of outer functions even after the outer functions
// have returned. Such functions are called closures.
function outer1(){
    let count = 13;
    function inner1(){
        return count;
    }
    return inner1;
}
let thirteenCounter = outer1();
console.log(thirteenCounter())


// inner functions have access to the parameters of outer functions after the outer functions have returned.
function outer2(count){
    function inner2(){
        return count;
    }
    return inner2;
} 
let myCount2 = outer2(13);
console.log(myCount2());

// inner functions can update the variables of outer functions even after those functions have returned
function outer3(){
    let count = 0;
    function inner3(){
        count +=1;
        return count;
    }
    return inner3;
}
let getCount = outer3();
console.log(getCount());
console.log(getCount());
console.log(getCount());
let getOtherCount = outer3();
console.log(getOtherCount());
console.log(getCount());


//Scharif's Explanation
/* lexical scope -> a variable defined outside a function can be accessible inside another function defined after the variable declaration, 
                    but it doesn't work the other way around.
   closure -> lexical environment is part of every stack frame and link between identifiers and values,
                    6 the inner function will go one step up in the call stack and use the outer funcion to get the values needed. */