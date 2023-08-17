var shopingCart = {
    books: 3,
    sunglasses: 1,
    keyboard: 5,
    mouse: 2,
    pen: 25,
    shoes: 2,
    bottle: 1,
}

const keys = Object.keys(shopingCart);
// console.log(keys);

const values = Object.values(shopingCart);
// console.log(values);

// for(var i = 0; i < keys.length; i++){
//     var key = keys[i];
//     var value = shopingCart[key];
//     console.log(key, value);
// }

for (const key in shopingCart) {
    console.log(key, shopingCart[key]);
}