let arr = [1,2,3];
let arrCopy = [...arr];
let arrCopy1 = arr.slice();
let arrCopy2 = [];
for (let i = 0; i <arr.length; i++){
    //arrCopy2[i] = arr[i];
    arrCopy2.push(arr[i]); 
}
console.log(arrCopy);
console.log(arrCopy1);
console.log(arrCopy2);
console.log(arr === arrCopy);
console.log(arr === arrCopy1);
console.log(arr === arrCopy2);