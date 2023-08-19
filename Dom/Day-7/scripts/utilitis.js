// function for calculate triangle area
function triangleArea(base, height){
    baseInput = document.getElementById('base');
    baseString = baseInput.value;
    baseValue = parseFloat(baseString);

    heightInput = document.getElementById('height');
    heightString = heightInput.value;
    heightValue = parseFloat(heightString);
    return baseValue*heightValue/2;
}