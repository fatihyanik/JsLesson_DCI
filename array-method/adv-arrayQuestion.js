console.clear();
console.log('-------Get total orders---------');
const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
  ];
  // console.log(orders[0]);
//   console.log(orders[0].amount);
// simple for loop
  let sum = 0;
  for(i=0;i<orders.length;i+=1) {
   sum = sum + orders[i].amount;
  }
  console.log('here is the first solution result using only for loop :' + ' ' + sum);
// standard function with for loop
  function giveTotal (arr) {
    let sum = 0;
    for(i=0;i<arr.length;i+=1) {
     sum = sum + arr[i].amount;
    }
    return sum;
  }
//   giveTotal(orders);
console.log('here is the second solution result using standard function with for loop:' + ' ' + giveTotal(orders));
// arrow function with for loop
const giveTotalArrowFunc = arr => {
    let sum = 0;
    for(i=0;i<arr.length;i+=1) {
        sum = sum + arr[i].amount;
       }
       return sum;
}
// giveTotalArrowFunc(orders);
console.log('here is the third solution result using arraow function with for loop:' + ' ' + giveTotalArrowFunc(orders));
// function with forEach
function giveTotalusingForEach (arr) {
    let sum = 0;
arr.forEach(element => sum = sum + element.amount)
    return sum;
  }
console.log('here is the fourth solution result using forEach:' + ' ' + giveTotalusingForEach (orders));
//function with for of loop
function giveTotalusingForOf (arr) {
    let sum = 0;
for (element of arr){
    sum = sum + element.amount;
}
    return sum;
  }
console.log('here is the fifth solution result using for of:' + ' ' + giveTotalusingForOf (orders));
// using reduce
function giveTotalusingReduce (arr) {
    return arr.reduce ((prev,curr) => prev+ curr.amount,0)
   }
 console.log('here is the sixth solution result using freduce:' + ' ' + giveTotalusingReduce(orders));