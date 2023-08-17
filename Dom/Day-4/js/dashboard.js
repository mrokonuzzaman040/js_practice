// Deposit-amount 
// btn-deposit
// withdraw-amount
// btn-withdraw

// Deposit-balance
// Withdraw-balance
// total-balance

// Deposit Function 

document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositFild = document.getElementById('Deposit-amount');
    const newDepositAmmount = depositFild.value;
    const newDepositAmmountNumber = parseFloat(newDepositAmmount);

    const deposittotalelement = document.getElementById('Deposit-balance');
    const previousDepositTotal = deposittotalelement.innerText;
    const previousDepositTotalNumber = parseFloat(previousDepositTotal);

    const currentDepositTotal = previousDepositTotalNumber + newDepositAmmountNumber ;

    deposittotalelement.innerText = currentDepositTotal;


    const balanceElementTotal = document.getElementById('total-balance');
    const previousBalanceTotal = balanceElementTotal.innerText;
    const previousBalanceTotalNumber = parseFloat(previousBalanceTotal);

    const currentBalancetotal = previousBalanceTotalNumber+newDepositAmmountNumber;

    balanceElementTotal.innerText = currentBalancetotal;

    depositFild.value = '';
})



// withdraw funcion 

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawFild = document.getElementById('withdraw-amount');
    const newWithdrawAmmount = withdrawFild.value;
    const newWithdrawAmmountNumber = parseFloat(newWithdrawAmmount);

    const withdrawtotalelement = document.getElementById('Withdraw-balance');

    const previousWithdrawTotal = withdrawtotalelement.innerText;
    const previousWithdrawTotalNumber = parseFloat(previousWithdrawTotal);

    const currentWithdrawTotal = previousWithdrawTotalNumber + newWithdrawAmmountNumber ;

    withdrawtotalelement.innerText = currentWithdrawTotal;
    
    const balanceElementTotal = document.getElementById('total-balance');
    const previousBalanceTotal = balanceElementTotal.innerText;
    const previousBalanceTotalNumber = parseFloat(previousBalanceTotal);

    const currentBalancetotal = previousBalanceTotalNumber-newWithdrawAmmountNumber;

    balanceElementTotal.innerText = currentBalancetotal;

    withdrawFild.value = '';
})