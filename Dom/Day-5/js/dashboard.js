document.getElementById('deposit-button').addEventListener('click', function(){
    const depositAmount = getInputFieldById('deposit-input');
    console.log(depositAmount);
    if(depositAmount > 0){
        updateTotalField('Deposit-balance', depositAmount);
        updateBalance(depositAmount, true);
    }
});

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawAmount = getInputFieldById('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount < currentBalance){
        updateTotalField('Withdraw-balance', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if(withdrawAmount > currentBalance){
        console.log('You can not withdraw more than what you have in your account');
    }
});