// write a function power of two numeric arguments(base, exponent) that return the base raised to
// power of the exponent
// power (2,2) returns 4
// power (2,3) returns 8

// loop
// iterative solution
function power(base,exponent){
    let product = 1;
    for(let i =0; i<exponent; i++){
        product *=base;
    }
    return product;
}
console.log(power(2,2));
console.log(power(2,3));

// recursive solution
//power(2,1) = 2;
//power(2,2) = 2 * 2
//power(2,3) = 2 * (2 * 2)
//           = 2 * power(2,2)
//           = 2 * 2 * power(2,1)
//           = 2 * 2 * 2
function powerRecursive(base,exponent){
    if (exponent === 1){ // termination/ exit condition
        return base;
    }else{
    return base * powerRecursive(base, exponent-1); // infinite loop; stack overflow
    }
}
console.log(powerRecursive(2,2));
constconsole.log(powerRecursive(2,3));
console.log(powerRecursive(2,4));


function recurseExp(base, exp) {
    if(exp === 1) {
      return base;
    }
    return base * recurseExp(base, exp-1);
    // what it does:
    // return 2 * recurseExp(2, 3);
    // return 2 * 2 * recurseExp(2, 2);
    // return 2 * 2 * 2 * recurseExp(2, 1);
    // return 2 * 2 * 2 * 2;
  };
  console.log(recurseExp(2, 4))