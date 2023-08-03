//function to calculate sum of numbers
function sumOfNumbers(arr) {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

//declare an int array
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(sumOfNumbers(arr));


//function to multiply arry
function multiplyArray(arr) {
    let product = 1;
    for (var i = 0; i < arr.length; i++) {
        product *= arr[i];
    }
    return product;
}

//declare an int array
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(multiplyArray(arr));
