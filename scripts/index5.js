//Programming Basics: Basic String Methods
//These exercises are aimed at making you more familiar with string methods as well as string interpolation. 
//Print your results of each exercise to the console. Use the terminal to view your results.
//NB: declare each variable with a unique name so that you can run the exercises below in a single script without SyntaxErrors.
//If you are not sure what we mean by that, try first running your script with multiple variables of the same name and see what happens. We’ll wait.

//Declare a variable with the value of “I can walk in the park all day!“. Print the word “park” to the console.
let str1 = "I can walk in the park all day!";
let park = str1.substring(18,23);
console.log(`${park}`);
console.log(str1.substring(18,23));

//Declare a variable with the value of “Hello World”. Covert the value to upper case and print the converted value to the console.
let str2 ="Hello World";
let str2Upper = str2.toUpperCase();
console.log(`${str2Upper}`);
console.log(str2.toUpperCase());

//Declare another variable with the value of “Hello Earthling”. Convert the value to lower case and print the converted value to the console.
let str3 = "Hello Earthling";
let str3Lower = str3.toLowerCase();
console.log(`${str3Lower}`);
console.log(str3.toLowerCase());

//Declare a variable with the value “JavaScript”. Use string methods to print the the characters “aSc” from your declared variable.
let str4="JavaScript";
let charAsc = str4.substring(3,6);
console.log(`${charAsc}`);
console.log(str4.substring(3,6));

//Check if the sentence “nice shoes” contains the letter l or n.
let str5="nice shoes";
console.log(str5.includes("l") || str5.includes("n"));

//Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB
let str6="Bananas";
let str7 = str6[0];
console.log(`${str7}${str6}${str7}`);
console.log(str7+str6+str7);

//Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. 
//The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch
let str8="Scritch";
let str9 = str8.substring(4,8);
console.log(`${str9}${str8}${str9}`);
console.log(str9+str8+str9);

//2.Way
let word="Scritch";
let last3=word.substring(word.length-3);
console.log(`${last3}${word}${last3}`);
console.log(last3+word+last3);

//Create a new string from a given string by changing the position of first and last characters. 
//The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB
let str10="BoogieWoogie";
str11=str10.substring(0,1);//B
str12=str10[str10.length-1];//e
console.log(str12+str10.substring(1,12)+str11);

//2.Way
let str25="BoogieWoogie";
let firstLetter=str25.substring(0,1);
let middle=str25.substring(1,12);
let lastLetter=str25[str25.length-1];
console.log(`${lastLetter}${middle}${firstLetter}`);

//Create 3 different variables about yourself, using strings as values, i.e, let firstName = “Maria”; let city = “Berlin”, etc. 
//Print a sentence to the console using the variables and string interpolation, i.e., “My name is Maria. I live in Berlin and I am a teacher”.
let firstName="Fatih";
let city="Leipzig";
let job="teacher";
console.log(`My name is ${firstName}. I live in ${city} and I am a ${job} .`);
console.log("My name is " + firstName + ". I live in " +  city + " and I am a " + job +".");

//Declare a variable and assign the value “the quick brown fox” (all in lower case). 
//Capitalize the first letter of that string. Print the result to the console.
let value= "the quick brown fox";
console.log(value.substring(0,1).toUpperCase()+value.substring(1));
console.log(value[0].toUpperCase()+value.substring(1));

let str20 ='the quick brown fox';
let firstChar =str20[0].toUpperCase();
let rest = str20.slice(1);
console.log(`${firstChar}${rest}`);