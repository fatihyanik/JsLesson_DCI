/*
Create a Vehicle constructor function of 2 arguments: type and speed, Call the constructor function, passing it “car” for type and 80 for speed, and store the return value in a variable “car”. 
Log car to the console.
Create a move method on the constructor’s prototype, such that when you call move on car, “I am a car, and I am moving at 80 miles per hour” is printed to the console.
Create a bus (type: bus, speed: 120) and a truck (type: truck, speed: 200), using the same procedure.
*/

const Vehicle = function(type, speed){
    this.type = type;
    this.speed = speed;
  /*   this.move = function(){
        console.log(`I am a ${this.type} and i am moving at ${this.speed} miles per hours`);
    } */
};
const car = new Vehicle("Car", 80);
console.log(car);

Vehicle.prototype.move = function(){
    console.log(`I am a ${this.type} and i am moving at ${this.speed} miles per hours`);
};
car.move();

const bus = new Vehicle("Bus", 120);
bus.move();
const truck = new Vehicle("Truck", 200);
truck.move();