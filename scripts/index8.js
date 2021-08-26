let user = 'George';
// simple conditional
//if(user === 'Jerry'){
//    console.log('Hi, Jerry!');
//}

// if / else conditional
//if(user === 'Jerry'){
//    console.log('Hi, Jerry!');
//}else{
//    console.log('Hi, user!');
//}

/*
if(user === 'Jerry'){
    console.log('Hi, Jerry!');
} else{
    if (user === 'George'){
        console.log('Hi, George!');
    }else {
        console.log('Hi, User!');
    }
}
*/

/*
if(user === 'Jerry'){
    console.log('Hi, Jerry');
}else if(user === 'George'){
    console.log('Hi, George');
}else if(user === 'Kramer'){
    console.log('Hi, Kramer');
}else{
    console.log('Hi, user!');
}
*/

//These exercises are aimed at making you more comfortable with using conditionals as well as operators. 
//Use “if” statements to complete the following exercises. 
//Print your results to the console.
//Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). 
//Print true if either of them are in the range.
let num1 = 10;
let num2 = 66;
if(num1 >= 50 && num1 <= 99 || num2 >=50 && num2<=99){
    console.log(true);
}else{
    console.log(false);
}

//Check if three given integer values are in the range 50 to 99 (inclusive).
let num3=99;
if(num1 >= 50 && num1 <= 99 || num2 >=50 && num2<=99 || num3>=50 && num3<=99){
    console.log(true);
}else{
    console.log(false);
}

//Random Method
/*
let num1 = Math.floor(Math.random() * 99), num2 = Math.floor(Math.random() * 99);
if(num1 >= 50 && num1 <= 99 || num2 >= 50 && num2 <= 99) {
  console.log(`${num1}, ${num2}: true`);
} else {
  console.log(`${num1}, ${num2}: false`);
};
// 2
let num3 = Math.floor(Math.random() * 99);
if(num1 >= 50 && num1 <= 99 || num2 >= 50 && num2 <= 99 || num3 >= 50 && num3 <= 99) {
  console.log(`${num1}, ${num2}, ${num3}: true`);
} else {
  console.log(`${num1}, ${num2}, ${num3}: false`);
};
*/

// Print true if one or more of them are in the range.
//Declare the variables a, b and c, and give them number values.
//Check which one out of the three variables has the largest value and print it to the console. 
//Then change the values of the variables to see if your conditional still works.
let a=4, b=5, c=6;
if(a>b && a>c){
    console.log(a)
}else if(b>a && b>c){
    console.log(b);
}else{
    console.log(c);
}
//Declare a variable strPrefix and a variable str. If str begins with “Py” then print str. Otherwise print the result of prepending strPrefix to str.
const strPrefix ="hello", str="Pymy";
if(str.indexOf("Py") ===0){
    console.log(str);
}else{
    console.log(strPrefix + str);
}
//Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.
const num4 =10, num5 = 50;
const sum = num4+num5;
if(sum>=50 && sum<=80){
    console.log(65);
}else{
    console.log(80);
}
//Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.
if(sum ===8 || num4-num5===8 || num5-num4===8){
    console.log(true);
}
//Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.
if(num4 === 15 || num5 ===15 || sum===15){
    console.log(true);
}
//Check whether one of two integers is a multiple of 7 or 11. If so, print true.
const num6 = 20, num7=20;
if(num6 % 7===0 || num6 % 11===0 || num7 % 7===0 || num7 % 11===0){
    console.log(true);
}
//Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.
if(num6===num7){
    console.log(3*(num6+num7));
}else{
    console.log(num6+num7);
}
//Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.
const givenNumber = 19, specifiedNumber =24;
if(specifiedNumber > givenNumber){
    console.log((specifiedNumber-givenNumber)*2);
}
//BONUS CHALLENGE: Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person’s age is less than 13.
//If so, print “firstName is a child”. If the age is equal to or more than 13 and less than 20, print “firstName is a teenager”.
// If the person’s age is equal to and more than 20 and less than 30, then print “firstName is a young adult”.
// If none of these conditions apply, print “firstName is a adult”.
const firstName ="Fatih", age=100;
if(age < 13){
    console.log(`${firstName} is a child`);
}else if( age >= 13 && age<20){
    console.log(`${firstName} is a teenager`);
}else if( age >= 20 && age<30){
    console.log(`${firstName} is a young adult`);
}else{
    console.log(`${firstName} is a adult`);
}


//BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc.