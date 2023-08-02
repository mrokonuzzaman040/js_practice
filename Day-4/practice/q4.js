//write a function called odd_even() which takes an integer value and tells whether this value is even or odd? You need to do it in 4 ways.
/**
 * Has return + Has parameter
 * No return + Has parameter
 */

// 1. Has return + Has parameter
function odd_even(num) {
    if (num % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
// console.log(odd_even(5));
 

// 2. No return + Has parameter
// function odd_even(num) {
//     if (num % 2 == 0) {
//         console.log("Even");
//     } else {
//         console.log("Odd");
//     }
// }

// odd_even(5);


// 3. Has return + No parameter
// function odd_even() {
//     var num = 5;
//     if (num % 2 == 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }

// console.log(odd_even());
 