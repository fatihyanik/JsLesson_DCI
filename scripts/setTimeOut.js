// setTimeout is a method of the window object
/* function greet(){
    console.log("Howdy!");
}
setTimeout(greet,2000); */

/* function makeTalk(animal){
    const noises = {
        cat: "purr",
        dog: "woof",
        cow: "moo",
        pig: "oink"
    }
    console.log(`A ${animal} goes ${noises[animal]}.`);
}
function getRandom(arr){
    return arr[Math.floor(Math.random() * arr.length)]
}
const animals = ["cat", "dog", "cow", "pig"];
const randomAnimal = getRandom(animals);

setTimeout(() =>{ // setTimeout(function{},2000) same
    makeTalk(randomAnimal);
}, 2000); */

/* console.log(1);
// asynchronous function; put aside and has to wait until the call stack empty. 
setTimeout(() => {
    console.log(2);
}, 0);
console.log(3); */

/* const dog = {
    sound: "woof",
    bark() {
        console.log(`Rover says ${this.sound}!`);
    }
};
dog.bark(); //Rover says woof!

// the bark function is called as a function here, not as a method of dog
setTimeout(dog.bark, 2000); // Rover says undefined! */

/* const dog2 = {
    thisVal: this,
    sound: "woof",
    bark: () => {
        console.log(`Rover-3 says ${this.sound}.`);
    }
}
dog2.bark(); // Rover-3 says undefined.
console.log(dog2.thisVal);
console.log(this); */

/* function getGlobal(){
    console.log(this);
}
getGlobal(); */

/* let user = {
    firstName: "John",
    sayHi(){
        console.log(`Hello, ${this.firstName}!`);
    }
}
setTimeout(user.sayHi, 1000); // Hello, undefined!
setTimeout(() => { console.log(`Hello, ${this.firstName}!`)},1000);
user.sayHi();

// solutions:
// 1. call sayHi as a method, but wrap that call in an outer function
setTimeout(function(){
    user.sayHi();
}, 1000);
// ikisi de ayni
setTimeout(() => { user.sayHi();}, 1000);

// 2. bind user.sayHi to the user object
let sayHi = user.sayHi.bind(user);
setTimeout(sayHi,1000); */


let user2 = {
    firstName: "Jack",
    say(phrase){
        console.log(`${phrase}, ${this.firstName}!`);
    }
};

let say = user2.say.bind(user2);
say("Hello");
say("Bye");


/* let obj1 = {
    firstName:"Joe",
    sayHi: function(){
        console.log(`Hi, ${this.firstName}!`);
    }
}

let obj2 = {
    firstName:"Bo",
    sayHi: obj1.sayHi
}
console.log(obj2.sayHi()); */


