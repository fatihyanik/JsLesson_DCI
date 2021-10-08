//map => returns an array with exact items in original array
//filter => returns an array but less items than original array
//reduce => returns an array, string, number, object

let numbers = [1,2,3,4,5,6]; /* =>type of number */

//Array.reduce((accumulator, currentItem)=>{},initialValue)
// acc is just like a container

let sum = numbers.reduce((acc, num) => {
    acc = acc+num;
    return acc;
}, 0) // callback is depending on each iteration
console.log(sum);

let squareNumbers = numbers.reduce((acc,num)=>{
    acc.push(num*num);
    return acc;
}, []);
console.log(squareNumbers);

let objectReduce = numbers.reduce((acc,num)=>{
    acc[num]=num*2;
    return acc;
},{})
console.log(objectReduce);

let nestedArray = [["item1", "item2"],["item3", "item4"]];
//result = { firstItem : ["item 1", "item 2"], secondItem: ["item 3", "item 4"] }
let result = nestedArray.reduce((acc, each)=>{
    if(acc["firstItem"]){
        acc.secondItem = each.map(num=>num.slice(0,4)+ " "+num.slice(-1))     
    }else{
        acc.firstItem = each.map(num=>num.slice(0,4)+ " "+num.slice(-1))
    }
    return acc;
},{})
console.log(result);