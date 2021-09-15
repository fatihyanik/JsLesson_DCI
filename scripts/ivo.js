// 1.**1. Object Person.**
// Create an object named person. Loop through the object and print both the property and value of the object.
const person = {
    firstName: 'Richard',
    lastName:'Serra',
    profession:'Artist in Sculpture',
    nationality:'North-American',
    work: ['To lift, 1967',' Tilted Arc, 1981'],
}
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }
  // or the next one but rather gives an array with multiple arrays inside.
// const getBoth = (obj) => Object.entries(person);
// console.log(getBoth(person));
// 2. Get Values.**
// Create a function that returns an array of all **values** of an object's properties.
// outcome [ 'tea', 'coffee', 'milk' ]
  const getObjectValues = (obj) => Object.values(obj)
  console.log(getObjectValues({
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
  }));
// 3. Add A Method.**
// Create an object and add a method to that object which prints the values of the objects in a string.
// outcome Michael Smith is a 20 old driver from Paris
const persona = {
    firstName: "Michael",
    lastName: "Smith",
    job: "driver",
    age: 20,
    city: 'Paris',
    getPrint: function () {
      console.log (`${this.firstName} ${this.lastName} is a ${this.age} old ${this.job} from ${this.city}`)
    },
  }
persona.getPrint()
// BONUS QUESTIONS ////////////////////////////////////////////////////
// 1. convert keys and values into an array
// Create a function that converts an object into an array of keys and values.
// outcome [ [ 'A', 1 ], [ 'B', 2 ], [ 'C', 3 ] ]
// outcome  [ [ 'cats', 1 ], [ 'dogs', 2 ], [ 'turtles', 4 ] ]
  const objectToArray = (obj) => Object.entries(obj);
  console.log(objectToArray({
    A: 1,
    B: 2,
    C: 3
  }));
  console.log(objectToArray({
    cats: 1,
    dogs: 2,
    turtles: 4
  }))
// 2. List Properties.**
// Create a function that returns an array of **properties** of a javascript object.
// outcome [ 'name', 'class', 'course' ]
let student = {
    name: "Mike",
    class: "4A",
    course: "English",
  }
const returnArray = (obj) => Object.keys(obj)
console.log('--------------------')
console.log(returnArray(student));
// 3. Merge
// Create a function that takes two objects as its parameters and merges them together into a new object.
// outcome { firstName: 'John', lastName: 'Smith' }
// outcome with 2 objects with same properties {firstName;'John'}
let first = {firstName: "John"};
let last = {lastName: "Smith"};
let middle ={firstName:"John"};  // merged together with first and console one object with the same argument but not repeated.
const mTogether = (obj1,obj2) => Object.assign(obj1,obj2)
console.log(mTogether(first, last));
// Last two could not understand how to make them
// **4. Switch Keys and Values.**
// Create a function to get a copy of an object. The copy must switch the keys and values.
// outcome { John: 'name', teacher: 'job' }
const person1 = {
    name: "John",
    job: "teacher"
  }
  // found the next code on the internet, dont understand it but find it interesting
  const copySwitch = (obj) => Object.assign({},...Object.entries(obj).map(([a,b]) => ({ [b]: a })))
                          // Object.entries(person1) - makes an array of two arrays.
                          // Object.entries.map(([a,b]) => ({ [b]: a }))) map - goes trough the array and make changes, takes an array as argument, in every element  he takes
                          // ...Object.entries.map(([a,b]) => ({ [b]: a }))) takes the arrays outside
                          //  Object.assign({}, ...Object.entries(person1).map(([a,b]) => ({ [b]: a })))
                          // const emptyObj = {}
                          // const newObj = ...Object.entries(person1)
                          // const newObj1 = newObj.map(([a,b]) => ({[b]:a}))
// james example
                        //   let swapKeysAndValues = x => {
                        //     let a = Object.entries(x);
                        //     const map = a.map ( s => s.reverse());
                        //     return Object.fromEntries(map);
                        // }
console.log('-------------------')
console.log(copySwitch(person1));
 // **5. Return Keys and Values.**
 // Write a program that takes an object and returns an array which contains two arrays:
 // one for the keys of the object and the other for the values of the object.
 // Outcome [ [ 'a', 'b', 'c' ], [ 1, 2, 3 ] ]
 const returnKey = (obj) =>[Object.keys(obj),Object.values(obj)]
  //  const keyArray=Object.keys(obj)
  //  const valueArray=Object.values(obj)
  //  return [keyArray, valueArray]
console.log(returnKey({ a: 1, b: 2, c: 3 } ))
console.log(returnKey({key: true}))