//function of factorial while
function factorialWhile(n) {
    let number = 1;
    let result = 1;
    while (number <= n) {
        result *= number;
        number++;
    }
    return result;
}

//declare an int array
// var n = 9;
// console.log(factorialWhile(n));


//function of factorial while reverse
function factorialWhileReverse(n) {
    let i = n;
    let result = 1;
    while(i >= 1){
        result *= i;
        i--;
    }
    return result;
}

//declare an int array
var n = 9;
console.log(factorialWhileReverse(n));