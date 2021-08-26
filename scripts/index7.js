//Programming Basics: Arrays and Array Methods
//These exercises are designed for practicing arrays and array methods.
//You may need to look up some methods to complete these tasks. Print each result to the console.
//Declare a variable named “euroCities” and assign an array to the variable e.g. [“Paris”, “London”, “Valletta”, “Prague”, “Rome”].
let euroCities =[ "Paris", "London", "Valletta", "Prague", "Rome"];
console.log(euroCities);
//Declare another variable and assign the second item of the array as a value.
const anotherVariable = euroCities[1];
//Change the first item in the array to “Berlin”.
euroCities[0] = "Berlin";
//Print the length of the array “euroCities”.
console.log(euroCities.length);
//Remove the last item of the array “euroCities”.
euroCities.pop();
console.log(euroCities);
//Use an array method to add “Budapest” to the euroCities array.
euroCities.push("Budapest");
console.log(euroCities);
//Bonus: Remove the second and third items from the euroCities array.
euroCities.splice(1,2);
console.log(euroCities);
//Create another variable named asianCities and assign an array of at least 5 cities to the variable.
let asianCities = ["Istanbul", "Ankara", "Antalya", "Tokyo", "Shanghai"];
//Bonus: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.
let anotherVariable1 = asianCities.slice(1,4);
console.log(anotherVariable1);
//Bonus: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).
const worldCities = euroCities.concat(asianCities);
console.log(worldCities);
//Reverse the order of worldCities.
worldCities.reverse();
console.log(worldCities);
//Bonus: Replace the 3rd item in the array of worldCities with “Toronto”.
worldCities[2] = "Toronto";
console.log(worldCities);
//Bonus: Remove no elements from the array of worldCities, but insert “Washington” at the 2nd position.
worldCities.splice(1,0,"Washington");
console.log(worldCities);
//Bonus Write a program to join all elements of the result (worldCities) into a string
//Example: worldCities = [“Berlin”, “London”, “Bangkok”, “Phnom Penh”]; Expected Outputs: “Berlin , London, Bangkok, Phnom Penh” “Berlin+London+Bangkok+Phnom Penh”
const cities = worldCities.toString();
newCities = cities.replaceAll(",", "+");
console.log(newCities);
//Bonus
//Write a program to reverse the string: “Hello World”.

/*1. way
function reversing(str){
    let splitStr = str.split("");
    let revArray = splitStr.reverse();
    let joinArray = revArray.join("");
    return joinArray;
}
console.log(reversing("Hello World"));
*/

/* 2.Way
let str = "Hello World";
let splitStr = str.split("");
let revArray = splitStr.reverse();
let joinArray = revArray.join("");
console.log(joinArray);
*/

//Extra Practice
//Print the results to the console.
//Make an array of your siblings’ names or your favorite movie characters’ names.
const movieChars = ["Batman", "Spiderman", "Superman", "Coderman", "Hackerman"];
//Make an array of your parents’ names.
//Combine these two arrays.
const parents = ["Father", "Mother"];
const combined =movieChars.concat(parents);
//Add your pets’ names.
combined.push("Mavis", "Fistik");
//Reverse the order of the array.
combined.reverse();
//Access one of your parents’ names.
const myFather = combined.indexOf("Abidin");
console.log(combined[3]);
//Update the name of one of your parents.
combined.splice(3, 1, "newFather");
console.log(combined);

