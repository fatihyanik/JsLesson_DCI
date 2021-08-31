// while-loops
// while (condition){
    //statement;
// }
// Example: print the numbers from 0 to 9

/*
let num = 0;
while (num < 10) {
    console.log(num);
    num += 1;
}
*/

/*
let num2 =0;
do {
    console.log(num2);
    num2 +=1;
}while(11<10);
*/

//1. Run Along
//Create a while loop that runs as long as the variable i is less than 15. Print i.
/*
let i = 0;
while(i<15){
    console.log(i);
    i+=1;
}
*/

//2. Add it up
//Create a function which sums up numbers from 1-20 using a while loop.
/*
let j=1;
let sum =0;
while(j<=20){
    sum = sum +j;
    j++;  
}
console.log("sum: "+sum);
*/

//3. Do this while i...

/*
let i =1;
do{
    console.log(`The number is ${i}`);
    i++;
}while (i<20);
*/
//Use a do, while loop to print The number is [i] while i is less than 20.

for (let i = 0; i < 10; i++){
    console.log(i);
}

//These exercises are designed for practising “for” loops. Print all your results to the console.
//1-Addition. Write a program to add up the numbers 1 to 20.
let sum = 0;
let j=0;
for(let j=1; j<=20; j++){
    sum = sum +j;
}
console.log(`Sum: ${sum}`);

//2-There are i bottles of beer on the wall. Write a program that will output, 
//“There is one bottle of beer on the wall.” “There are two bottles of beer on the wall” up until there are five bottles.

for(let i=1; i<=5; i++){
    if(i===1){
        console.log(`There is ${i} bottle of beer on the wall.`);
    }else if(i<=5){
        console.log(`There are ${i} bottle of beer on the wall.`);
    }else{
        console.log("You are too drunk!");
    }
}

//3-The odd/even reporter. Write a program that will iterate from 0 to 20. 
//For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. “2 is even”).
for(let i=0; i<=20; i++){
    if(i%2===0){
        console.log(`The number ${i} is even`);
    }else{
        console.log(`The number ${i} is odd`);
    }
}

//Multiplication Tables.
// Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. “2 * 9 = 18”). 
for(let i=0; i<=10; i++){
    console.log(`${i} * 9 = ${i*9}`);
}

//Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
for(let i=0; i<=10; i++){
    console.log(`${i} * 9 = ${i*9}`);
    for(let j =0; j<=10; j++){
        let product =1;
        product =product*j;
        console.log(`${i} * ${product} = ${i*product}`);
    }    
}

//5-Fizz Buzz Write a program which iterates the integers from 1 to 100. But for multiples of three print “Fizz” 
//instead of the number and for the multiples of five print “Buzz”. 
//For numbers which are multiples of both three and five print “FizzBuzz”.
for(let i = 0; i < 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(`FizzBuzz`);
    }else if(i % 3 === 0){
        console.log(`Fizz`);
    }else if(i % 5 === 0){
        console.log(`Buzz`);
    }else{
        console.log(i);
    }
}

//6-Sum of Multiples Write a program to add the multiples of 3 and 5 under 1000.
let sum1 = 0;
for (let i = 0; i <= 1000; i++){
    if(i % 15 === 0){
        sum1 += i;
    }
}
console.log("sum1: " + sum1);
//Bonus: Print the indexes of each item in the array. Expected output example: Mike is at index 1 of my friends array.
const friends = ["friend1", "friend2", "friend3", "friend4","friend5"];
for(let i = 0; i<friends.length; i++){
    console.log(`${friends[i]} is at index ${i}`);
}

/*
let s = [];
for(let i =100; i<=1000; i+=100){
    s.push(i);
}
console.log(s);
console.log(s.join("...."));
*/

for(let i = 1; i<11; i++){
    console.log(`${i}00`);
}

let a ="";
for(let i =0; i<=10; i+=2){
    a += i + " ";
}
console.log(a);

let b = "";
for(let i =3; i<=15; i+=3){
    b+=i +" ";
}
console.log(b);

for(let h=9; h>=0; h--){
    console.log(h);
}

let e="";
for(let i=1; i<=4; i++){
    for(let j=1; j<=3; j++){
        e+=i+ " ";
    }
    console.log(e);
}

var c = "madam";
var k = c.split("").reverse().join("");
if(k===c){
    console.log("Its palindrome");
}else{
    console.log("not palindrome");
}