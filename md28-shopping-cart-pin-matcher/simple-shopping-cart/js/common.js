function getElementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementValueById(elementId, value) {

    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubtotal() {
    // calculate total
    const currentPhoneTotal = getElementValueById('phone-total');
    const currentCaseTotal = getElementValueById('case-total');
    const currentSubtotal = currentPhoneTotal + currentCaseTotal;

    setTextElementValueById('sub-total', currentSubtotal)


    // calculate tax
    const taxAmountString = (currentSubtotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);

    setTextElementValueById('tax-amount', taxAmount);

    const finalAmoun = currentSubtotal + taxAmount;
    setTextElementValueById('final-total', finalAmoun)
}