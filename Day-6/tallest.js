function maxInArry(numbers){
    let max = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        // const element = numbers[i];
        // console.log(element);
        if(numbers[i] > max){
            max = numbers[i];
        }
    }
    return max;
}

const numbers = [165, 125, 325, 254];
const max = maxInArry(numbers);
console.log('Largest number is: ',max);