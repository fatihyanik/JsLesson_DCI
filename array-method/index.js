//Array Methods

//Map => array of 10 items and you want to back 10 items from that array
//Map => returns an Array
/*
let numbers = [1,2,3,4,5,6,7,8,9,10]

let MappedNumbers = numbers.map(num=>{
    if(num<=5){
        return num;
    }else{
        return num*2;
    }
})
console.log(MappedNumbers)
*/

//Filter => you can reduce length of your array
//Filter => returns an Array
/*
let numbers = [1,2,3,4,5,6,7,8,9,10]

let FilteredNumbers = numbers.filter(num=>num<=5)
console.log(FilteredNumbers);
*/  

//Reduce
//returns Array, Object, String, Number
/*
let numArray =[4,7,2,9,7,6,5] 
let sum = numArray.reduce((acc,number)=>{
    acc = acc+number; // 0+4
    return acc;
}, 0) // reduce(callback, initialvalue)
console.log(sum)
*/

/*
let numArray =[4,7,2,9,7,6,5] 
let squareArray = numArray.reduce((acc,number)=>{
    acc.push(number*number); // 0+4
    return acc;
}, []) // reduce(callback, initialvalue)
console.log(squareArray);
*/

/*
let randomNumbers = [2,2,3,4,5,3,2,4,5,3,2,4,5,6,2,4,5];
//we have to occurance of each number inside an array
// we result => {"2" : 5, "3": 3, "4": 4}
let result = randomNumbers.reduce((acc,number)=>{
    if(!acc[number]){
        acc[number]=1   // {"2":1} =>{"2":2, "3":1}
    }else{
        acc[number]++;  // {"2": 2}
    }
    return acc;
},{})

console.log(result);
*/

/*
let string = ["Berlin", "Frankfurt", "Hamburg"];
let longString = string.reduce((acc,city)=>{
    acc=acc+" "+city
    return acc
},"")
console.log(longString);
*/

/*
let users=[
    {name:"john", salary:2000},
    {name:"Robert", salary:3000},
    {name:"Ibrahim", salary:1500}
]

let totalSalary = users.reduce((acc,user)=>{
    acc = acc+user.salary //{name:"john", salary:2000} + 3000 + 1500
    return acc
},0)
console.log(totalSalary);
*/

/*
let array = [2,3,5,6,7,8];
let mappingArray= array.map((number, index)=>{
   if(index===2 && number ===5){
       console.log("5 is on 3rd place inside this array");
   }
})
*/

/*
let cities =["Berlin", "Frankfurt", "Hamburg", "Bonn"];
//delete cities[2] //this method will change original array
//delete hamburg city from this array
let updatedCities = cities.filter(city=> city!=="Hamburg");
console.log(updatedCities); //[ 'Berlin', 'Frankfurt', 'Bonn' ]
console.log(cities)
*/

let student = {
    name:"Robert",
    age:23,
    classname:"fbw32",
    capitalizeName: function(){
        this.name= this.name.toUpperCase()
        return this;
    },
    printStudentProfile: function(){
        console.log(`hi, ${this.name}, you are welcome`)
        return this
    }
}
function cutClassName(a,b,c){
    this.classname= this.classname.slice(1,3)
    return this.classname
}
//bind, apply, call
cutClassName.call(student,1,2,3) //invoking //call
cutClassName.apply(student,[1,2,3]) //invoking //call

let bindedMethod= cutClassName.bind(student,1,2,3) //return you binded method, you have to call it byself

bindedMethod();
console.log(student);

student.capitalizeName() //=> student
student.capitalizeName().printStudentProfile()
student.printStudentProfile();