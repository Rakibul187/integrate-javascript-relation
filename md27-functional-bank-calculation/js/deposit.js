/* 
1. add event listener to the deposit btn 
2.get deposit amount from the deposit input field 
2.5 . convert string deposit amount to a number type
3. clear deposit input field after getting the input value
4. get the previous deposit total
5. calculate new deposit total and set the valu to the deposit total
6. get previous balance total
7.calculate the bew balance and set it to the balance total element
*/

// step 1:
document.getElementById('deposit-btn').addEventListener('click', function () {
    // step 2 :
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step 3 
    depositField.value = '';

    // step 4 : 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step 5 : 
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    // step 6 : 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step 7 : 
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})