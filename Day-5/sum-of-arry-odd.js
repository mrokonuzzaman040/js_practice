//function to find sum of odd numbers
function sumOfOdd(arr) {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) sum += arr[i];
    }
    return sum;
}

//declare an int array
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(sumOfOdd(arr));