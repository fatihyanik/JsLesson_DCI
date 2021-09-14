// Objects: unordered collections of properties
// properties: name/value (key/value) pairs
// property names: strings or symbols
// property values: any JS value
// properties: enumerable vs. non-enumerable properties
// properties: own properties vs inherits properties

const user = {
    firstName : 'Donald',
    lastName : 'Knuth',
    linkedIn :'',
    age: 32,
    publications: ['The TeX Book', 'The Art of Computer Programming'],
    getMainPub : function(){ // template strings, string interpolation
        return `The main publication of ${this.firstName} ${this.lastName} is ${this.publications[1]}.`;//this keywordu yerine user kullanilabilirdi
    },//trailing comma
};

// 3 ways of creating objects
// 1. creating an object with an object literal
const obj1 = {};
obj1.firstName = 'Joe';
console.log(obj1); //{ firstName: 'Joe' }

// 2. creating an object with the "new" keyword and the Object constructor function
const obj2 = new Object(); //creates an empty object
obj2.lastName = "Yanik";
console.log(obj2);

// 3. creating an object with Object.create(prototype);
const obj3 = Object.create(obj1); //creates a new object that inherits from obj1
console.log(obj3.firstName); //Joe

// 2 Way of accessing object properties
// 1. using the dot notation
console.log(user.firstName); //Donald

// 2. using the bracket notation
console.log(user['firstName']); //string literals must be enclosed in quotes when using the bracket notation
// object['string']
// object[expression]
let key = 'firstName';
console.log(user[key]); //only bracket notation works with computed property names

const user2 = {
    'country of origin': 'Syria' //multi-word property names be enclosed unquotes
}

// calling a function property (method)
console.log(user.getMainPub());

// objects are mutable; you can change (mutate) them by changing existing properties, adding new properties or by deleting properties
console.log(user.age); //32
user.age = 82;
console.log(user.age); //82

// add properties
user.interests = ['programming', 'music'];
console.log(user.interests[0]);

// remove properties from objects
delete user.age;
console.log(user.age); //undefined

// check if a property exists
let prop = 'age';
console.log(prop in user); //Alttaki aynisi
console.log(user.age in user); //false

for (let key in user){
    console.log(`${key} is of type ${typeof key}.`);
}

let surname = 'name';
let author = {
    [surname]: 'Nabokov'
}
console.log(author[surname]);
//console.log(author.name);

// property names can be symbols
let fname = Symbol();
const myObj = {
    [fname]: 'Joe'
}
console.log(myObj[fname]);

let str1 = 'Hello';
let str2 = 'Hello';
console.log(str1 === str2); //true

let num1 = 11;
let num2 = 11;
console.log(num1 === num2); //true

let obj4 = {};
let obj5 = {};
console.log(obj4 === obj5); //false

let arr1 = [];
let arr2 = [];
console.log(arr1 === arr2); //false

let obj6 = {
    address:{
        city:'Rome'
    }
}
let obj7 ={
    address:{
        city:'Rome'
    }
}
console.log(obj6 === obj7);

let ticket = {id: 0};
if(ticket ==={id: 0}){
    console.log('You win');
}else{
    console.log('You lose');
}

console.log(NaN === NaN); //false (actually true)
console.log(0 === -0); //true (actually false)

console.log(Object.is(NaN,NaN)); //true
console.log(Object.is(0,-0)); //false

const myArr = ['a'];
console.log(typeof myArr);
console.log(Array.isArray(myArr));
console.log(Array.isArray(ticket));

let tinyObj = {
    a: 1,
    b: 2
}
console.log('Object keys', Object.keys(tinyObj)); //array of the object keys
console.log('Object values', Object.values(tinyObj)); //array of object values
console.log('Object key/value pairs', Object.entries(tinyObj)); //array of key/value pairs
console.log('Object from entries', Object.fromEntries(Object.entries(tinyObj))); // construct object from entries