//1)
function char(str1, str2){
    if(str1.length == str2.length){
        return true;
    }else return false;
}
console.log(char("AB", "CD"));
console.log(char("ABC", "DE"));
console.log(char("hello", "edabit"));

//2)
function isEmpty(character){
    if(character.length==0){
        return true;
    }else return false;
}
console.log(isEmpty(" "));
console.log(isEmpty(""));

//3)
const name ="Fatih";
const surname="Yanik";
const concatName= surname + ", " +name;
console.log(concatName);

//4)
const greet = name => {
    let greeting = 'Hello';
    return greeting + ', ' +name + '!';
};
const geraldGreeting = greet('Jane');
console.log(geraldGreeting);

//5)
function hasSpaces(str1){
    if(str1.includes(" ")){
        return true;
    }else return false;
}
console.log(hasSpaces("hello"));
console.log(hasSpaces("hello, world"));
console.log(hasSpaces(" "));
console.log(hasSpaces(""));
console.log(hasSpaces(",./!@#"));
//6)
function ctoa(str){
    return str.charCodeAt(str);
}
console.log(ctoa("A"));
console.log(ctoa("m"));
console.log(ctoa("["));
//console.log(ctoa("\n"));

//7)


//8)
function removeFirstLast(str1){
     str1 = str1.substring(1,str1.length-1);
     return str1;
}
console.log(removeFirstLast("maybe"));
console.log(removeFirstLast("hello"));
console.log(removeFirstLast("benefit"));

//9)
function sameCase(str1){
    if(str1==str1.toLowerCase() || str1.toUpperCase()){
        return true;
    }else return false;
}
console.log(sameCase("hello"));
console.log(sameCase("HELLO"));
console.log(sameCase("ketcHUp"));

// compare strings
const compareStr = (str1, str2) => str1.length === str2.length;
console.log(compareStr("hello", "waaht"));
// empty string
const emptyStr = str => str.length === 0;
console.log(emptyStr(""));
// first & last name
const fName = (firstName, lastName) => `${lastName}, ${firstName}`;
console.log(fName("John", "Doe"));
// greeting
const greet1 = nam => `Hello ${nam}!`;
console.log(greet1("Momo"));
// spaces
const spaces = str => str.includes(" ");
console.log(spaces("hi"));
// ascii
const ascii = char => char.charCodeAt();
console.log(ascii("A"));
// match strings
const match = (str1, str2) => str1.toLowerCase() === str2.toLowerCase();
console.log(match("Hello", "hello"));
// remove letters
const remover = (str) => {
  str = str.slice(0, -1);
  str = str.substring(1);
  return str;
}
console.log(remover("hello"));
// same case
const cases = str => str === str.toLowerCase() || str === str.toUpperCase();
console.log(cases("HELLO"));
// strange pair
const strange = (str1, str2) => str1.charAt(0) === str2.charAt(str2.length - 1) || str1.charAt(str1.length -1) === str2.charAt(0);
console.log(strange("hello", "okay"))

throws
interface
program
short