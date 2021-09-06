function char(str1, str2){
    if(str1.length == str2.length){
        return true;
    }else return false;
}
console.log(char("hello", "edabit"));

function isEmpty(character){
    if(character.length==0){
        return true;
    }else return false;
}
console.log(isEmpty(" "));