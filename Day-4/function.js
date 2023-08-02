//declaration of a fuction
function startFan() {
    console.log('Stand Up')
    console.log('walk to switch')
    console.log('Press the switch')
}


//call the function
startFan();

//declaration of a fuction
function bringShingara(taka){
    console.log('Shingara er jonno dise', taka);
    console.log('Mama shingara den');
    var shingaraPrice = 10;
    var shingaraQuantity = taka / shingaraPrice;
    return shingaraQuantity;
}

//call the function
var money = 250;
var shingara = bringShingara(money);
console.log('Ai nen shingara', shingara);