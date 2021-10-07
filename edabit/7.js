let player1 = {
    score: 7
};
let player2 = Object.create(player1);
let player3 = Object.create(player1);

player2.score = 2;
player1.score = player3.score * 2;

console.log(player3.score); // ???

let marty = { location: 'Chicago' };
let wendy = Object.create(marty); //buraya ne yazilmali soruluyordu
console.log(marty === wendy); // false
console.log(wendy.location); // 'Chicago'

marty.location = 'Osage Beach';
console.log(wendy.location); // 'Osage Beach'