/*
Create objects obj1, obj2, and obj3 in such a way that obj3 inherits properties from obj2, and obj2 inherits properties from obj1. 
Give each object a property of its own.  What happens when you add a property to obj1?  What happens when you add one to obj3? 
What happens when you delete one in obj1, and what if you delete one in obj3? 
Does obj1 inherit properties from some object?  If so, from which one?  How do you know?
Use Object.keys to log the property names of obj3 to the console, then try to do the same with a for … in loop.  Which property names do you see?
*/

const obj1 = {
    name: "Fatih",
    age: 28,
}

const obj2 = Object.create(obj1);
obj2.address = "Leipzig";
console.log(obj2);

const obj3 = Object.create(obj2);
obj3.school= "METU";
console.log(obj3);//{ school: 'METU' }

obj1.surname = "Yanik";
console.log(obj1);
console.log(obj3.surname);

delete obj1.age;
console.log(obj3.age); // undefined
console.log(Object.prototype); // i.e hasOwnProperties

console.log(Object.keys(obj3)); //[ 'school' ]
Object.keys(obj3).forEach(x => {console.log(x)}); // school

const showProps = obj =>{
    for(let prop in obj){
        console.log(`${prop}: ${obj[prop]}`);
    }
}
showProps(obj3);