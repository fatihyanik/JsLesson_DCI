//Closure


//scopes
//Global
//local scope //block scope
//lexical scope


let name = "John"  //global scoped variable

function outerFunc(){
    //........
    let age = 23; //local scoped variable
//Closure


//scopes
//Global
//local scope //block scope
//lexical scope

let name = "John"  //global scoped variable

function outerFunc(){
    //..........
    let age = 23; //local scope //block scope

    // Lexical scope of innerFunc()

    //...........
    function innerFunc(){
        // reference
        let city = "Berlin" //local scoped variable
        return {age, name,city}
    }
    return innerFunc;
}
let returnedFunc =outerFunc();
console.dir(returnedFunc()) //Burada returnedFunc'tan sonra () konmazsa closure hangisi onu görebiliyoruz browserDA
name ="Robert";
console.dir(returnedFunc())
    
    // Lexical scope
    
    
    
    //.....
    function innerFunc(){
        //reference 
        let city="berlin" //local scoped variable
        return {age,name,city}
    }

    return innerFunc;
    

}

let returnedFunc = outerFunc()


console.dir(returnedFunc())

function main(){
let age=23;
let name ="ali"

function total(a,b){
    let sum= a+b;
    return {age,name};
}
return total

}
//function along with its lexical scope binded together to create a closure.

console.dir(main())









//callback
//function you pass as an argument to another function is called callback

function printNumber(number){
    console.log(number)
}


function randomNumberGen(){
    return Math.random()
}
/* 
let number= randomNumberGen()

printNumber(number) */


function giveNumber(pn, rn){
    let number= rn()
    pn(number)
}

giveNumber(printNumber, randomNumberGen)



function a(){
    console.log("a")
}

function b(){
    console.log("b")
}

setTimeout(()=>{
    console.log("setTimeout")
    a()
    b()
}, 0)




/* 
b(a) */

function createProfile(user){
        console.log(user.name)
        console.log(user.age)
}

function fetchdata(cb){
   //sending request to server to get a new user
   //after 2 second we receive our user
   //once we have a user , then exercute this call function
    cb(user)
}

fetchdata(createProfile)

