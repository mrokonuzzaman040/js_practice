const phones = [
    { name: 'samsung s5', price: 45000, camera: 10, storage: 32 },
    { name: 'walton m32', price: 15000, camera: 8, storage: 8 },
    { name: 'shaomi m3', price: 12000, camera: 8, storage: 16 },
    { name: 'oppo a2', price: 17000, camera: 8, storage: 32 },
    { name: 'nokia n95', price: 8000, camera: 8, storage: 4 },
    { name: 'htc h81', price: 25000, camera: 8, storage: 8 }
];

function cheepest(phones) {
    let cheepest = phones[0];
    for (const phone of phones) {
        if (phone.price < cheepest.price) {
            cheepest = phone;
        }
    }
    return cheepest;
}

const cheepestPhone = cheepest(phones);
console.log(cheepestPhone);