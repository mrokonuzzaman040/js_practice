const shopingCart = [
    { name: 'Laptop', price: 1000, quantity: 1 },
    { name: 'Keyboard', price: 150, quantity: 1 },
    { name: 'Mouse', price: 50, quantity: 1 },
    { name: 'Monitor', price: 200, quantity: 1 }
];

function totalCost(cart) {
    let total = 0;
    for (const product of cart) {
        total += product.price * product.quantity;
    }
    return total;
}

const total = totalCost(shopingCart);
console.log(total);