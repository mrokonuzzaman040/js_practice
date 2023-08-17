const color = 'black';

if(color === 'red'){
    console.log('Color is red');
}
else if(color === 'blue'){
    console.log('Color is blue');
}
else if(color === 'green'){
    console.log('Color is green');
}
else if(color === 'yellow'){
    console.log('Color is yellow');
}
else if(color === 'black'){
    console.log('Color is black');
}
else{
    console.log('Color is not red, blue, green, yellow, black');
}

switch(color){
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    case 'green':
        console.log('Color is green');
        break;
    case 'yellow':
        console.log('Color is yellow');
        break;
    case 'black':
        console.log('Color is black');
        break;
    default:
        console.log('Color is not red, blue, green, yellow, black');
        break;
}