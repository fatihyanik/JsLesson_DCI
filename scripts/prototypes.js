// prototypal inheritance
const gritti = {
    location: 'Venice',
    stars: 5
}

/* const danieli = {
    location: 'Venice',
    stars: 5,
    restaurant: true
}

const cipriani = {
    location: 'Venice',
    stars: 5,
    gym: true
} */

const danieli = Object.create(gritti);
danieli.restaurant = true; // own property of danieli
console.log(danieli.location); // inherited from its prototype gritti
danieli.location = 'Trieste';
console.log(danieli.location); // Trieste
console.log(gritti.location); // Venice
console.log(danieli.stars); // 5 inherited from its prototype gritti
gritti.location = 'Rome';
console.log(gritti.location); // Rome
console.log(danieli); // { restaurant: true, location: 'Trieste' }