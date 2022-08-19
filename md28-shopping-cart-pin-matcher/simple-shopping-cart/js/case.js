/* 
1. add event listener to the case plus button 
2. get the value inside the case number field (input field)
3. convert the number to an integer
4. calculate the new case number
5. set the value to the case number field
 */

//===================== method 1 to increase & decrease input value =================
/*
 document.getElementById('btn-case-plus').addEventListener('click', function () {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const PreviousCaseNumber = parseFloat(caseNumberString);

    const newCaseNumber = PreviousCaseNumber + 1;
    caseNumberField.value = newCaseNumber;
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const PreviousCaseNumber = parseFloat(caseNumberString);

    const newCaseNumber = PreviousCaseNumber - 1;
    caseNumberField.value = newCaseNumber;
}) 
*/


function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const PreviousCaseNumber = parseFloat(caseNumberString);

    let newCaseNumber;
    if (isIncrease === true) {
        newCaseNumber = PreviousCaseNumber + 1;
    }
    else {
        newCaseNumber = PreviousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber) {
    const totalCasePrice = newCaseNumber * 59;
    document.getElementById('case-total').innerText = totalCasePrice;

}
document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber);

    calculateSubtotal()
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);

    calculateSubtotal()
})


// ====================method 1 to calculate total case price =====================
/*
 document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);
    const totalCasePrice = newCaseNumber * 59;
    document.getElementById('case-total').innerText = totalCasePrice;
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false);
    const totalCasePrice = newCaseNumber * 59;
    document.getElementById('case-total').innerText = totalCasePrice;
}) 
*/