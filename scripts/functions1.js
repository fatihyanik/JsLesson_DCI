//1-Write a function called “filterEvenNums” that takes in an array of numbers and returns a new array containing all and only the even numbers from the input array. 
//Do not use array.prototype.filter().
//1.Way
let myArr = [1, 2, 3, 4, 5, 6, 7, 8];
const filterEvenNums = numbers => {
  let arr = [];
  for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) {
      arr.push(numbers[i])
    }
  }
  return `All: ${myArr}, even: ${arr}`;
}
console.log(filterEvenNums(myArr));

//2. Way
function filterEvenNums1() {
  let arEvNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i < arEvNums.length; i++) {
    if (arEvNums[i] % 2 === 0) {
        console.log(arEvNums[i]);
    }
  }
}
filterEvenNums1();

//2-Write a function called “filterOddNums”. 
//Given an array of numbers, “filterOddNums” returns an array containing all and only the odd numbers of the input array. 
//If the input array contains no odd numbers, the function should return an empty array. Do not use array.prototype.filter().


let myArr1 = [1, 2, 3, 4, 5, 6, 7, 8];
const filterOddNums = numbers => {
  let arr = [];
  for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 1) {
      arr.push(numbers[i])
    }
  }
  return `All: ${myArr1}, even: ${arr}`;
}
console.log(filterOddNums(myArr1));

//2.Way
function filterOddNums1() {
  let arEvNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i < arEvNums.length; i++) {
    if (arEvNums[i] % 2 === 1) {
        console.log(arEvNums[i]);
    }
  }
}
filterOddNums1();



//3-Write a function called “sumAll”.Given an array of numbers, “sumAll” returns the sum of all the elements in the given array. 
//If the input array is empty, your function should return 0.  Do not use array.prototype.reduce().
let myArr2 = [1, 2, 3, 4, 5, 6, 7, 8];

const sumAll = numbers => {
  let sum =0;
  if(numbers.length >0){
    for(let i =0; i<numbers.length; i++){
      sum += numbers[i];
    } 
    }else{
      return 0;
    }
    return sum;
  }
  console.log(sumAll(myArr2));


//4-Write a function called “computeAverage”. Given an array of numbers, “computeAverage” returns their average.
// If the input array is empty, the function should return 0.

let myArr3 = [1, 2, 3, 4, 5, 6, 7, 8];

const computeAverage = numbers => {
  let sum =0;
  if(numbers.length >0){
    for(let i =0; i<numbers.length; i++){
      sum += numbers[i];
    } 
    }else{
      return 0;
    }
    return sum/numbers.length;
  }
  console.log(computeAverage(myArr3));


//5- Debugging 1.  The function below takes in an array of numbers.  
//It should return the number of elements that are greater than 20.  But there is a bug.  Find it, and crush it.
/*
function getNumsGreaterThan20(numbers) {

  for (let i = 0; i < numbers.length; i++) {
    let count = 0;
    if (numbers[i] > 20) {
      count += 1;
    }
  }

  return count;
}
*/
let arrBig = [5,10,20,25,30];
function getNumsGreaterThan20(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
 
    if (numbers[i] > 20) {
      count += 1;
    }
  }

  return count;
}

console.log(getNumsGreaterThan20(arrBig));
//6
//- Debugging 2.  The function below takes in an array of strings, representing words in a sentence. 
//It should iterate over the input array and return a sentence from the words in the array.  
//For example, if the input array is [‘George’, ‘is’, ‘hungry’], the function should return “George is hungry.”
/*
let sentence = "";

function createSentence(words) {

  for (let i = 0; i < words.length; i++) {
    sentence += words[i] + ' ';
    if (i === words.length - 1)
        sentence += '.';
    }
  }

  return sentence;
*/

/*
let arrStrings = ["Hello", "I", "am", "Fatih"];
function createSentence(words) {
  let sentence = "";
  for (let i = 0; i < words.length; i++) {
    sentence += words[i] + ' ';   
    }
    return sentence = sentence.trim() + '.';
  }
console.log(createSentence(arrStrings));
*/


let arrStrings = ["Hello", "there"];
function createSentence(words) {
  let sentence = "";
  for (let i = 0; i < words.length; i++) {
    sentence += words[i] + " ";
    if (i === words.length - 1)
      sentence = sentence.trim() + ".";
    }
    return sentence;
  }
console.log(createSentence(arrStrings))

//Do some research on the dangers of semicolon omission.  Copy any code examples that you think are useful.
