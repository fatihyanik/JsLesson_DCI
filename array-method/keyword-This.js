// this keyword always refers to a global object
//this refers to Object invoking function

/* let obj ={
    myMethod: function(){
        console.log(this)
    }
}

obj.myMethod()

function myMethod(){
    console.log(this)
}
window.myMethod() */



//in arrow function this refers to the context where you define parent object:eyes: 


let obj ={
    name:"ali",
    myMethod: ()=>{
        console.log(this.name)
    }
}

/* window.obj.myMethod() */


let object= {
    myarrowfunction:null,
    myMethod: function(){
        console.log(this.property)
        this.myarrowfunction = ()=>{
                                    console.log(this.property)
                                }
    },
    property:"hello world"

}
/* object.myMethod()
object.myarrowfunction() */



let nestedObject={
    name:"ali",
    section:  {
            method:()=>{
            console.log(this.name)
        }
    }
}
nestedObject.section.method()


let innerObject= {
    myMethod:()=>{
        console.log(this)
    }
}


/* nestedObject.section().method() */



/* let nestedObject={
    name:"ali",
    section:function(){ 
        console.log(this)
        return ()=>{
            console.log(this.name)
        }
    }
}
nestedObject.section()() */


let y=0; 
//global 
function sum (){

//lexical scope

let x= 0; 


    function sub(){
            console.log(y)
            //local scope
            // block scope
    }
}