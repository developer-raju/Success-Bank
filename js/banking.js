// Handle Deposit Button 
document.getElementById('deposit-button').addEventListener('click', function(){
    // console.log('clicked button')

    // Get the amount deposited 
    const depostInput = document.getElementById('deposit-input');
    const newDepositAmountText = depostInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText)
    // console.log(depositAmount);
    
    // Update Deposit total     
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText)
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
    
    // Update Account balance 
    const balanceTotal = document.getElementById('balance-total')

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText)

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    // Clear the deposit input field
    depostInput.value = '';
});

// Handle Withdraw Even Handler
document.getElementById('withdraw-button').addEventListener('click', function(){
    // console.log('Withdraw Clicked');
    const withdrawInput = document.getElementById('withdraw-input')
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText)
    console.log(withdrawAmountText);

    // Set Withdraw Total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // Clear Withdraw Input
    withdrawInput.value = '';

    // Update Balance 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal; 

});

