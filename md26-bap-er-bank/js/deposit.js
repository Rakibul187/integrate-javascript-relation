/*
step 1 : add event listener to the deposit button 
step 2 : get the input text from deposit field
step 3 : get deposit current 
step 4: add numbers to set the total deposit
step 5: get ballance ecurrent total
step 6: calculate current total balance
step 7 : set the current ballance total
step 8: clear the deposit field
*/

// step 1 
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step 2

    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step 3 
    const depositTotalElement = document.getElementById('deposit-total');
    const PreviousDepositTotalString = depositTotalElement.innerText;
    const PreviousDepositTotal = parseFloat(PreviousDepositTotalString);

    // step 4 
    const currentDepositTotal = PreviousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    // step 5 
    const balanceTotalElement = document.getElementById('balance-total');
    const PreviousBalanceTotalString = balanceTotalElement.innerText;
    const PreviousBalanceTotal = parseFloat(PreviousBalanceTotalString);

    // step 6 
    const currentBalanceTotal = PreviousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
    // step 7 
    depositField.value = '';
})