/*
Write a function that returns the length of a string. Make your function recursive.

Examples
length("apple") ➞ 5
length("make") ➞ 4
length("a") ➞ 1
length("") ➞ 0
*/

function length(str) {
    if(str === "") {
        return 0;
    }
    console.log(str)
   return 1 + length(str.substring(1));
};

console.log(length("murat fatih"));
console.log(length("apple"));
console.log(length("make"));
console.log(length("a"));
console.log(length(""));


function getLength(string, length = 0) {
    if (string[length] === undefined) {
      return length;
    }
    length++;
    return getLength(string, length);
  }
  console.log(getLength("Ammar"));

/*
Write a function that reverses a string. Make your function recursive.
Examples
reverse("hello") ➞ "olleh"
reverse("world") ➞ "dlrow"
reverse("a") ➞ "a"
reverse("") ➞ ""
*/

  function reverse(str) {
    if (str.length === 0){
        return str;
    }else{
        return str.substring(str.length, str.length-1) + reverse(str.substring(0, str.length-1));
    } 
}

console.log(reverse("Murat Fatih"));

/*
Write a function that calculates the factorial of a number recursively.
Examples
factorial(5) ➞ 120
factorial(3) ➞ 6
factorial(1) ➞ 1
factorial(0) ➞ 1
*/

function factorial(num){
    if(num<=0){
        return 1;
    }else{
        return num * factorial(num-1);
    }
}
console.log(factorial(4));

function fibonacci(num){
    if(num<2){
        return num;
    }else{
        return fibonacci(num-1) + fibonacci(num-2);
    }
}
console.log(fibonacci(5));
 