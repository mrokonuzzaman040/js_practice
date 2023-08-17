//write a function called make_avg() which will take an arry of integers and return the avarege of those value.

function make_avg(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + parseInt(arr[i]);
    }
    return sum / arr.length;
}

console.log(make_avg([1, 2, 3,5,6,7,8,9,10]));