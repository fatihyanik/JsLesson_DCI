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

let num2 =0;
do {
    console.log(num2);
    num2 +=1;
}while(11<10);

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
let j=1;
let sum =0;
while(j<=20){
    sum = sum +j;
    j++;  
}
console.log("sum: "+sum);

//3. Do this while i...

let i =1;
do{
    console.log(`The number is ${i}`);
    i++;
}while (i<20);
//Use a do, while loop to print The number is [i] while i is less than 20.