//function to convert hours to minutes
function hourToMinute(hour) {
    return hour * 60;
}

//call function
console.log(hourToMinute(2.5));


//function for find out the leap year form a given array
function leapYear(year) {
    for(let i = 0; i < year.length; i++) {
        if(year[i] % 4 == 0) {
            console.log(year[i]);
        }
    }
}

//call function
const givvenYear = [2015, 2016, 2020, 2021, 2025, 2032, 2066, 2045];
leapYear(givvenYear);
