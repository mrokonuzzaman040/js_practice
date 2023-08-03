//write a function to check is it leap year or not
function leapYear(year) {
    if (year % 4 === 0) {
        return "leap year";
    } else {
        return "not leap year";
    }
}

//call the function
console.log(leapYear(2023));