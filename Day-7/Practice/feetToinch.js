function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;
}
var myInch = 132;
var feet = inchToFeet(myInch);
console.log('myInch in feet', feet);

var dadiInch = 144;
var feet = inchToFeet(dadiInch);
console.log('dadiInch in feet', feet);
