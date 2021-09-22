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