console.log('Tesing Click Event')

function makeRed(){
    document.body.style.backgroundColor = 'red';
}

const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue(){
    console.log('Make Blue Button Clicked');
    document.body.style.backgroundColor = 'blue';
}


document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
    });