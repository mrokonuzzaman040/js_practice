function add(num1, num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Please give a number';
    }
    return num1 + num2
}

const result = add(2, 3);
console.log(result);