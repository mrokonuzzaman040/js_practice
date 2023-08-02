var shopingCart = {
    books: 3,
    sunglasses: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
}

var prnCount = shopingCart.pen;

var penCount2 = shopingCart['pen'];

// var propartyName = Object.keys(shopingCart);
var propartyValue = Object.values(shopingCart);

// console.log(propartyName);
// console.log(propartyValue);
// console.log(penCount2);

var propartyName = 'books';
var propartyValue = shopingCart[propartyName];

console.log(propartyValue);