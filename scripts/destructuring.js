// destructuring assignments
// array destructuring
let [a,b,c] = [10, 20, 30, 40, 50];
console.log(a);
console.log(b);
console.log(c);

// array destructuring with gaps
let [firstName2,  , title] = ['julius', "Caesar", 'Consul', 'of the Roman Empire'];
console.log(firstName2);
console.log(title);

// array destructuring with rest parameter
[a,b, ...rest] = [10,20,30,40,50];
console.log(a);
console.log(b);
console.log(rest);

// string destructuring (strings, like arrays, are iterables)
let[char1, char2, char3] ='abc';
console.log(char1);
console.log(char2);
console.log(char3);

// object destructuring
({a, b} = {a:10, b:20});  // let obj = ({a, b} = obj); console.log(a); initialize yaparken kullanmak icin let obj = ({a : first, b : second} = obj); console.log(first);
console.log(a);
console.log(b);

// object destructuring with rest parameter
({a,b, ...rest} = {a: 10, b:20, c:30, d:40});
console.log(a);
console.log(rest);

// function parameter destructuring (destructuring binding)
function swap([a, b]){
    return [b, a];
}
console.log(swap([1, 2]));

function sumQuadruple([num1, num2, num3, num4]){
    return (num1 + num2 + num3 +num4);
}
console.log(sumQuadruple([1, 2, 3, 4]));

const user = {
    id : 46,
    name : "Joe" 
};
function userId({id}){
    return id;
}
console.log(userId(user));