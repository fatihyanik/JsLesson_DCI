// constructor functions
/* const drake = {
    rooms: 227,
    booked: 37,
    bars: 3,
    checkAvailability: function(){
        return this.rooms - this.booked;
    }
}

const langham = {
    rooms: 301,
    booked: 37,
    bars: 2,
    checkAvailability: function(){
        return this.rooms - this.booked;
    }
} */

// constructor functions are regular functions invoked with the "new" keyword
// 2 characteristics:
// 1. their names begin with capital letters(convention
// 2. they are executed with the "new" keyword
function Hotel(rooms, booked, bars){
    // this = {}
    this.rooms = rooms;
    this.booked = booked;
    this.bars = bars;
   /*  this.checkAvailability = function(){
        return this.rooms - this.booked;
    }, */
    this.available = this.rooms - this.booked;
    // return this;
}
const drake = new Hotel(227, 37, 3);
Hotel.prototype.checkAvailability = function(){
    return this.rooms - this.booked;
}
console.log(drake.booked);
drake.city = "Chicago";
console.log(drake);
console.log(drake.checkAvailability());

