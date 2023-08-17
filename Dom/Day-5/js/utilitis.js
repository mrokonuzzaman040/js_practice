function getInputFieldById(inputfild){
    const inputField = document.getElementById(inputfild);
    const inputFieldText = inputField.value;
    const inputFieldAmount = parseFloat(inputFieldText);
    inputField.value = '';
    return inputFieldAmount;
}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const elementAmount = parseFloat(elementText);
    return elementAmount;
}

function updateTotalField(totalFieldId, amount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}

