// lets make coffee
//function declaration
/* function firstTask(task2, task3){
    setTimeout(()=>{
        console.log("boiled water");
        task2(task3)
    },5000)
}

function secondTask(task3){
    setTimeout(()=>{
        console.log("added coffee into boiled water");
        task3()
    },2000)
}

function thirdTask(){
    setTimeout(()=>{
        console.log("added sugar in our coffee")
        console.log("your coffee is ready!")
    },1000)    
}
firstTask(secondTask,thirdTask) */


/* function printUser(user){
    console.log(user.first_name);
    console.log(user.email);
    console.log(user.id);
}

function fetchUser(anyFuncDependingOnUser){
    fetch("https://reqres.in/api/users?page=2")
    .then(res=>res.json())
    .then(result => anyFuncDependingOnUser(result.data[0]))
}

fetchUser(printUser);//browser'da sonuc goruluyor */

/* let student1 = {
    name: "naqvi",
    age:23,
    classname:"fbw44",
    printDetails(){
        console.log(`student name is ${this.name}`);
    }
}

let student2 = {
    name: "fatih",
    age:23,
    classname:"fbw46",
    printDetails(){
        console.log(`student name is ${this.name}`);
    }
} */

/* function CreateStudent(name,age,classname){
    this.name=name
    this.age=age
    this.classname=classname
}
CreateStudent.prototype.printUser=function(){
    console.log(CreateStudent.prototype)
}


let student1 = new CreateStudent("naqvi", 23, "fbw44");
let student2 = new CreateStudent("fatih", 28, "fbw44");
console.log(student1); */

class CreateStudent{
    constructor(name,age,classname){
        this.name = name;
        this.age=age;
        this.classname=classname;
    }
}

CreateStudent.prototype.printUser=function(){
    console.log(`student name is ${this.name}`);
}

let student3 = new CreateStudent("ali", 23, "fbw44");
let student4 = new CreateStudent("ammar", 26, "fbw44");
console.log(student3);
