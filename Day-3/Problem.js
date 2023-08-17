//You are givven an arry: 

var fruits = ['Apple', 'Banana', 'Orange'];

// a) Find the index of banana and replace the Banana With Mango
// Answer to the Question (q) Find the index of banana
console.log(fruits.indexOf('Banana'))
// Answer to the Question (q) replace the Banana With Mango
fruits[1] = 'Mango'
console.log(fruits);

// b) Remove 'Orange' 
fruits.pop()
//and add 'Watermelon'
fruits.push('Watermelon')