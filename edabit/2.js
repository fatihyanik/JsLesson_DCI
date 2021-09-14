/*Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.
Examples
volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10
volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16
volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30
Notes
Don't forget to return the result.
Remember that the values are in an object.
Volume is length * width * height.
*/
//1.Way
function volumeOfBox(sizes){
    return sizes.width*sizes.height*sizes.length;
}
console.log(volumeOfBox({ width: 2, length: 5, height: 1 }));
console.log(volumeOfBox({ width: 4, length: 2, height: 2 }));
console.log(volumeOfBox({ width: 2, length: 3, height: 5 }));

//2.WAY
const volumeOfBox1 =(sizes) => sizes.width * sizes.length *sizes.height;
console.log(volumeOfBox1({ width: 2, length: 3, height: 5 }));


//
function volumeOfBox2(sizes){
    let width = sizes.width;
    let length = sizes.length;
    let height = sizes.height;
    return width*height*length;
}
console.log(volumeOfBox2({ width: 2, length: 3, height: 5 }));
/*
Create a function that takes an object as an argument and returns a string with facts about the city. 
The city facts will need to be extracted from the object's three properties:

1-name
2-population
3-continent
The string should have the following format: 
X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).

Examples
cityFacts({
  name: "Paris",
  population: "2,140,526",
  continent: "Europe"
}) ➞ "Paris has a population of 2,140,526 and is situated in Europe"

cityFacts({
  name: "Tokyo",
  population: "13,929,286",
  continent: "Asia"
}) ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"
*/
// 1.WAY
function cityFacts(city) {
  return `${city.name} has a population of ${city.population} and is situated in ${city.continent}`;
}
console.log(cityFacts({
  name: "Tokyo",
  population: "13,929,286",
  continent: "Asia"
}));

console.log(cityFacts({
  name: "Paris",
  population: "2,140,526",
  continent: "Europe"
}));


//2.WAY (arrow function)
const cityFacts1 = (city) => {
  return city.name + " has a population of " + city.population + " and is situated in " + city.continent;
}
console.log(cityFacts1({
  name: "Tokyo",
  population: "13,929,286",
  continent: "Asia"
}));

console.log(cityFacts1({
  name: "Paris",
  population: "2,140,526",
  continent: "Europe"
}));

//3.Way
  function cityFacts2(city){
    let name = city.name;
    let population =city.population;
    let continent = city.continent;
    return `${name} has a population ${population} and is situated in ${continent}`;
}

console.log(cityFacts2({
    name: "Tokyo",
    population: "13,929,286",
    continent: "Asia"
  }));

console.log(cityFacts2({
    name: "Paris",
    population: "2,140,526",
    continent: "Europe"
  }));
 
/*
Write a function that returns true if a hash contains the specified key, and false otherwise.
Examples
hasKey({ a: 44, b: 45, c: 46 }, "d") ➞ false
hasKey({ craves: true, midnight: true, snack: true }, "morning") ➞ false
hasKey({ pot: 1, tot: 2, not: 3 }, "not") ➞ true
*/

//1.Way
function hasKey(obj, key){
    return key in obj;
}
console.log(hasKey({ a: 44, b: 45, c: 46 }, "d"));
console.log(hasKey({ craves: true, midnight: true, snack: true }, "morning"));
console.log(hasKey({ pot: 1, tot: 2, not: 3 }, "not"));

//2.WAY
const hasKey1 = (obj, key) => obj[key]? true : false;
console.log(hasKey1({ a: 44, b: 45, c: 46 }, "d"));
console.log(hasKey1({ craves: true, midnight: true, snack: true }, "morning"));
console.log(hasKey1({ pot: 1, tot: 2, not: 3 }, "not"));
/*
You work for a manufacturer, and have been asked to calculate the total profit made on the sales of a product. 
You are given an object containing the cost price per unit (in dollars), sell price per unit (in dollars), and the starting inventory. 
Return the total profit made, rounded to the nearest dollar.
Examples
profit({
  costPrice: 32.67,
  sellPrice: 45.00,
  inventory: 1200
}) ➞ 14796

profit({
  costPrice: 225.89,
  sellPrice: 550.00,
  inventory: 100
}) ➞ 32411

profit({
  costPrice: 2.77,
  sellPrice: 7.95,
  inventory: 8500
}) ➞ 44030
Notes
Assume all inventory has been sold.
Profit = Total Sales - Total Cost
*/

function profit(manufacturer){
    let unitProfit = manufacturer.sellPrice - manufacturer.costPrice;
    let totalProfit = unitProfit * manufacturer.inventory;
    return totalProfit.toFixed(0);
}

  console.log(profit({
    costPrice: 32.67,
    sellPrice: 45.00,
    inventory: 1200
 }));

 console.log(profit({
    costPrice: 225.89,
    sellPrice: 550.00,
    inventory: 100
  }));

 console.log(profit({
    costPrice: 2.77,
    sellPrice: 7.95,
    inventory: 8500
  }));

 
/*
In this challenge, you have to convert a weight weighed on a planet of the Solar System to the corresponding weight on another planet.
To convert the weight, you have to divide it by the gravitational force of the planet on which is weighed and
multiply the result (the mass) for the gravitational force of the other planet. 
See the table below for a list of gravitational forces:

weight on planetA / gravitational force of planetA * gravitational force of planetB

Planet	m/s²
Mercury	3.7
Venus	8.87
Earth	9.81
Mars	3.711
Jupiter	24.79
Saturn	10.44
Uranus	8.69
Neptune	11.15
Given a weight weighed on planetA, return the converted value for planetB rounded to the nearest hundredth.

Examples
spaceWeights("Earth", 1, "Mars") ➞ 0.38
spaceWeights("Earth", 1, "Jupiter") ➞ 2.53
spaceWeights("Earth", 1, "Neptune") ➞ 1.14
*/

function spaceWeights(planetA, weight, planetB){
    let planets = {
        Mercury: 3.7,
        Venus:	8.87,
        Earth:	9.81,
        Mars:	3.711,
        Jupiter:24.79,
        Saturn:	10.44,
        Uranus:	8.69,
        Neptune:11.15
    }
    return (weight/planets[planetA] * planets[planetB]).toFixed(2);
}
console.log(spaceWeights("Earth", 1, "Mars"));
console.log(spaceWeights("Earth", 80, "Jupiter"));
console.log(spaceWeights("Earth", 100, "Neptune"));

/*
Suppose you have a guest list of students and the country they are from, stored as key-value pairs in an object.

const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina"
}
Write a function that takes in a name and returns a name tag, that should read:

"Hi! I'm [name], and I'm from [country]."
If the name is not in the object, return:

"Hi! I'm a guest."
Examples
greeting("Randy") ➞ "Hi! I'm Randy, and I'm from Germany."

greeting("Sam") ➞ "Hi! I'm Sam, and I'm from Argentina."

greeting("Monti") ➞ "Hi! I'm a guest."
*/

const GUEST_LIST = {
	Randy: "Germany",
	Karla: "France",
	Wendy: "Japan",
	Norman: "England",
	Sam: "Argentina"
}

function greeting(name) {
	if(GUEST_LIST[name]){
        return `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.`;
    }else {
        return `Hi! I'm a quest`;
    }
}
console.log(greeting("Randy"));
console.log(greeting("Sam"));
console.log(greeting("Monti"));
console.log(greeting("Fatih"));