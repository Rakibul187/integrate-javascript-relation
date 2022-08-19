/* 
1. add withdraw btn event handler 
2. get withdraw amount by get InputFieldValueById function 
3. get previous withdraw amount by using getTextElementValueById function
4.calculate withdraw total & set the value
5. get previous balance total
6. calculate balance total
7. set balance total by using setTextElementTotalValue function
*/


document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputFieldValueById('withdraw-field')
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    setTextElementValueById('withdraw-total', newWithdrawTotal);

    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    setTextElementValueById('balance-total', newBalanceTotal)
})