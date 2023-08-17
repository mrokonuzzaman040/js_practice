const jim = 69;
const dela = 97;
const chinku = 77;

// if(jim > dela){
//     console.log("Jim will get the cake");
// }else{
//     console.log("Dela will get the cake");
// }

const max = Math.max(jim, dela, chinku);
console.log(max);

//homework 
//write a function that will take 3 numbers will return the max number
function maxNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}

const maxNum = maxNumber(10, 20, 30);
console.log(maxNum);

//write a function that will take 3 paremeters and will return the min number
function minNumber(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    } else if (num2 < num1 && num2 < num3) {
        return num2;
    } else {
        return num3;
    }
}

const minNum = minNumber(10, 20, 30);
console.log(minNum);

//first time do it using if else

if (jim > dela && jim > chinku) {
    console.log("Jim will get the cake");
}
else if (dela > jim && dela > chinku) {
    console.log("Dela will get the cake");
} else {
    console.log("Chinku will get the cake");
}

//second time do it using Math.min()
console.log(Math.min(jim, dela, chinku));
