//mile to kilometer
function mileToKilometer (mile){
    let myKilometer = mile * 1.60934;
    return myKilometer;
}

let myMile = 10;
let myKilometer = mileToKilometer(myMile);
console.log(myKilometer);
