/*
1. add event handler with the withdraw button
2. get the withdraw amount from the withdraw input field
2.5. also make sure convert the input into number by parssefloat
3.get previous withdraw total
4. calculate total withdraw amount
5. set withdraw total amount 
6.get the previous balance total
7. calculate new balance total
7.5 set the new balance total
8. clear withdraw field value
 */

// step 1:
document.getElementById('btn-withdraw').addEventListener('click', function () {

    // step 2 
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step 3 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step 4 
    const currentWthdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    // step 5 
    withdrawTotalElement.innerText = currentWthdrawTotal;

    // step 6 
    const balanceTotalElement = document.getElementById('balance-total');
    const PreviousBalanceTotalString = balanceTotalElement.innerText;
    const PreviousBalanceTotal = parseFloat(PreviousBalanceTotalString);

    // step 7 & 7.5
    const newBalanceTotal = PreviousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
    // step 8 
    withdrawField.value = '';
})
