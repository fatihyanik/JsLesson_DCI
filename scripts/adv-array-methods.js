//log each element of an array
let arr = ['Walter', 'Jesse', 'Gus'];

// we could use a for loop
for (let i=0; i<arr.length; i++){
    console.log(arr[i])
}

// or a for ... of loop
for (let elem of arr){
    console.log(elem);
}

// forEach method
arr.forEach(function(elem){
    console.log(elem);
});
console.log("-----Arrow Function forEach-----------------")
// with arrow function
arr.forEach(elem => console.log(elem));

// map 
let nums = [1,2,3];
let newArr = nums.map(function(elem, index, arr){
    // do something
})

let doubles = nums.map(function(num){
    return num * 2;
});
console.log(doubles);
console.log(nums);

// with arrow function
let triples = nums.map(num => 3 * num);
console.log(triples);
console.log(nums);

// reduce method
let sum = nums.reduce(function(acc, curr){
    return acc + curr;
});
console.log(sum);

// with arrow function
let product = nums.reduce((acc,curr) => acc * curr);
console.log(product);

//filter method
let numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNums = numsArr.filter(function(num){
    return num % 2 === 0;
});
console.log(evenNums);

// with arrow function
let oddNums = numsArr.filter(num => num %2 !==0);
console.log(oddNums);

// sort method (destructive! sort sorts "in place")
let numbers = [4,2,5,1,3];
numbers.sort(function(a, b){
    return a - b;
});
console.log(numbers);

nums = [1, 2, 3, 4];
let squares = nums.map(num => num * num);
console.log(squares);
console.log(nums);

// the optional second and third parameters of forEach allow you too modify (mutate) the original array
nums.forEach((num, index, arr) => arr[index] = num * num); // immutable.js
console.log(nums);

// for-loops vs forEach
nums = [1,2,3,4,5];
for (let i = 0; i <nums.length; i++){
    console.log(nums[i]);
    if(nums[i] > 2){
        break;
        //return;
    }
}
console.log('after for-lop');

nums.forEach(num =>{
    console.log(num);
    if(num>2){
        //break; //illegal break
        return;
    }
})
console.log('after forEach');

let myArr = nums.map(num => {
    console.log(num);
    if(num>2){
       // break; //illegal break statement 
        return;
    }
});
console.log('my arr is', myArr);

// some() method
const some = nums.some(num => num > 3);
console.log(some);

// every() method
const every = nums.every(num => num > 3);
console.log(every);

const some1 = nums.some(function(num){
    console.log(num);
    return num < 3;
});
console.log('some1 is ', some1);

const every2 = nums.every(function(num){
    console.log(num);
    return num < 3;
});
console.log('every2 is ', every2)


const even = nums.some(num => num % 2 === 0);
console.log(even);