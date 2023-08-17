var bottle = 'water'; //string type variable
var bottleColor = 'blue'; 
var sunglassPrice = 120; //number type variable
var painColor = 'yellow'; 
var isExpansive = true; //boolean type variable



var items = ['bottle', 'mug', 'paper', 'pen']; //array type variable
var itemsPrice = [120, 130, 100, 90]; //array type variable

var mugPrice = itemsPrice[1]; //accessing array element
itemsPrice[3] = 95; //changing array element

var numberOfItems = items.length; //array length

var penIndex = items.indexOf('pen'); //finding array element index

items.push('envelope'); //adding element to array

items.pop(); //removing element from array

// conditionals
if (items.length == 4) {
    console.log('You have 4 items in your bag');
}
