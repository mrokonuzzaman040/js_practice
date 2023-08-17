//function for factorial
function factorial(n) {
    if (n == 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}

//declare an int array
// var n = 5;
// console.log(factorial(n));

//factorial reverse

function factorialReverse(n) {
    if (n == 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}

//declare an int array
// var n = 9;
// console.log(factorialReverse(n));

// function for loop reverse
function loopReverse(n) {
    let result = 1;
    for (let i = n; i >= 1; i--) {
        result *= i;
        console.log(i);
    }
    return result;
}

const fact = loopReverse(9);
console.log(fact);

loopReverse(9);

//declare an int array
var n = 9;
console.log(loopReverse(n));

