var money = 10;
var danishPrice = 45;
var butterBreadPrice = 35;
var toastBiscuitPrice = 20;
var myBudget = 20;

// check my budget product
if(danishPrice < money){
    console.log('Danish kheye danish jabo');
}
else if(butterBreadPrice < money){
    console.log('Butter bon diye cha khamu');
}
else if(toastBiscuitPrice < money){
    console.log('Toast biscuit khamu');
}
else{
    console.log('Batasha diye cha khamu');
}


// check my budget product 2
if(myBudget > danishPrice){
    console.log('Danish kheye danish jabo');
}
else if(myBudget > butterBreadPrice){
    console.log('Butter bon diye cha khamu');
}
else if(myBudget > toastBiscuitPrice){
    console.log('Toast biscuit khamu');
}
else{
    console.log('Batasha diye cha khamu');
}

