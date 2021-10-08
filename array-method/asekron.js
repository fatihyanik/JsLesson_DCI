//Synchronous and Asynchronous coding

//Synchronous //blocking code => top to the bottom
console.log("start");

console.log("line 5");

//asynchronous code paralel the each other
setTimeout(()=>{
    console.log("console from setTimeout 1")
},2000)

setTimeout(()=>{
    console.log("console from setTimeout 2")
},1000)

setTimeout(()=>{
    for(let i=0; i<10000000; i++){
        if(i===9999999){
            console.log("done")
        }
    }
},0)

let a = "hello world";
console.log(a);

console.log("ending");

// all synchronous code execute before asynchronous code

//hoisting
/* let b = 23;
let printname = () =>{
    console.log("hello naqvi");
}
printname(); */