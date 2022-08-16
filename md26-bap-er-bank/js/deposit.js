// step 1 : add event listener to the deposit button 
document.getElementById('deposit-btn').addEventListener('click', function () {
    //  step 2 : get the input text from deposit field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step 3 : get deposit current 
    const depositTotalElement = document.getElementById('total-deposit');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString)

    // step 4: add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    // step 5: get ballance ecurrent total
    const previousTotalBalanceString = document.getElementById('total-balance').innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    // step 6: calculate current total balance
    const currentTotalbalance = previousTotalBalance + currentDepositTotal;

    // step 7 : set the current ballance total
    document.getElementById('total-balance').innerText = currentTotalbalance;

    // step 8: clear the deposit field
    depositField.value = '';
})