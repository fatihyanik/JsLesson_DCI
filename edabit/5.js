/*
Use a constructor function to create a user with name “Jack” and an isAdmin property of false.
Create two more users using the same procedure.
What happens if your constructor function returns { name: 'Godzilla' }?  What if it returns a number?  And what if it has a return statement without an explicit return value?
Create a getUserInfo method that, when called on user Jack, prints “Jack is not an admin”.  Store this method on the constructor’s prototype object.
*/


function User(name, isAdmin) {
    this.name = name;
    this.isAdmin = isAdmin;
    this.getUserInfo = function(){
        console.log(`${this.name} is ${this.isAdmin === true ? "an admin" : "not an admin"}`);
    };
    /* return {
        name: "Godzilla"
    } */
}
  
const user = new User("Jack", false);
const user1 = new User("Fatih", false);  
const user2 = new User("Scharif", false);
//Jack.getUserInfo();
console.log(user,user1,user2)

User.prototype.getUserInfo1 = function(){
    if(this.isAdmin === false){
        return `the user ${this.name} is not an admin`; 
    }else{
        return `the user ${this.name} is a admin`;
    }
    //return (`${this.name} is ${this.isAdmin === true ? "an admin" : "not an admin"}`) ternary operator
}
/* console.log(user1.getUserInfo1())
console.log(user2.getUserInfo1()) */
