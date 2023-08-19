document.getElementById('btn-triangle').addEventListener('click', function(){
    // get value from input
    const baseValue = document.getElementById('triangle-base').value;
    const heightValue = document.getElementById('triangle-height').value;
    // calculate triangle area
    const triangleArea = baseValue*heightValue/2;
    // show result
    document.getElementById('result-triangle').innerHTML = triangleArea;
});

//call utilitis function for calculate the triangle area
triangleArea = triangleArea(baseValue, heightValue);
// show result
document.getElementById('result-triangle').innerHTML = triangleArea;


document.getElementById('btn-triangle').addEventListener('click', function(){
    const baseValue = document.getElementById('triangle-base');
    const heightValue = document.getElementById('triangle-height');
    triangleArea = triangleArea(baseValue, heightValue);
    document.getElementById('result-triangle').innerHTML = triangleArea;
});