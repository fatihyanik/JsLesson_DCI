// "this"
// "this" is a keyword, not a variable, so you cannot assign "this" a value with an assignment statement

// the value of "this" depends on the context of use
// when used in the global scope, the value of "this" is the global object
console.log(this); 

// when used in a function, the value of "this" is the invocation context
// what the invocation context is, depends on the way the function is called
// there are 4 ways in which a function can be called
// 1. as a function
// 2. as a method
// 3. as a constructor function with the "new" keyword
// 4. with "call" or "apply"

// 1. as a function
// in non-strict mode, the invocation context is the global object
function wrapper(){
    "use strict"; // "this" undefined
    console.log(this);
}
wrapper(); // window (in the browser) 

// 2. as a method

// when a regular function is called as a method of an object, the value of "this" is the object
let user = {
    age : 43,
    getAge : function(){
        return this.age;
    }
};
console.log(user.getAge()); // the value of "this" is the object on the left side of the dot

// when an arrow function is called as a method on an object, th value of "this" is the value of "this"
// in the lexical scope in which the function is defined.

// what is the value of "this" in the lexical scope in which the function is defined
user = {
    thisValue: this,
    age : 43,
    getAge: function(){
        return this.age;
    }
}
console.log("The value of 'this' in user is " + user.thisValue);

user = {
    age : 43,
    getAge : () => this.age
}
console.log(user.getAge()); // since "this" is the global object, and since the global object does not have
                            // an age property, we get undefined as return value.

// But inner functions don't inherit the "this" value of outer functions

user = {
    name: "Jim",
    getName: function(){
        //let that = this; 
        console.log(this.name) //Jim
        function inner(){
            //return that.name;
            return this.name;
        }
        return inner();
    }
}
console.log(user.getName()); // undefined

// How can we fix this?
user = {
    name: "Jim",
    getName: function(){
        function inner() {
            return this.name;
        }
        return inner.call(user); // user yerine this kullaninca da ayni sonucu aliyoruz
    }
}
console.log(user.getName()); 

user = {
    name: "Jim",
    getName: function(){
         const inner = () => this.name;
            return inner();
        }
    }
console.log(user.getName()); // if the inner function is an arrow function, the value of "this"
                             // is the value of this in the lexical scope; here
                             // the lexical scope is the function scope of the outer function
                             // in the scope of the outer function "this" refers to user
                             // and so this.name is user.name, which is 'Jim

// 3. as a constructor function with the "new" keyword
function User(name, age){
    this.name = name;
    this.age = age;
}
const jim = new User("Jim", 43); // the value of "this" in the User function is the newly created object
console.log(jim.age);
console.log(jim);
jim.address = "Mannheimer Strasse";


// 4. indirectly, with "call" or "apply"
const getName = function(){
    return this.name;
}
console.log(getName.call(jim));
console.log(jim.name);
console.log(getName.call(jim) === jim.name);
