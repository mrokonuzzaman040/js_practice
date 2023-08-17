//wordreverse function
function wordReverse(str) {
    var splitString = str.split(" ");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join(" ");
    return joinArray;
}
console.log(wordReverse("I am a student"));