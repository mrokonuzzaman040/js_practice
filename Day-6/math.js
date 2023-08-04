//power
const result = Math.pow(2, 3);
// console.log(result);

// <----------------------->

//abs
const absolute = Math.abs(-5);
// console.log(absolute);

//abs with example
function absoluteNumber(number) {
    if (number < 0) {
        return Math.abs(number);
    }
    return number;
}
const myNumber = -5;
const output = absoluteNumber(myNumber);
// console.log(output);

// <----------------------->

//round
const round = Math.round(5.49999);
// console.log(round);

//ceil
const ceil = Math.ceil(5.00);
// console.log(ceil);

//floor
const floor = Math.floor(5.99999);
// console.log(floor);

//random
const random = Math.random() * 10;
// console.log(random);

//random with example with ludo game
for (let i = 0; i < 20; i++){
    const randomNumber = Math.random() * 6;
    const output = Math.round(randomNumber);
    // console.log(output);
}