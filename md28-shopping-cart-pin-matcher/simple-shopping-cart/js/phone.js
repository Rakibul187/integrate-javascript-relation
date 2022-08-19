function updatePhoneNumber(isIncrease) {
    const PhoneNumberField = document.getElementById('phone-number-field');
    const PhoneNumberString = PhoneNumberField.value;
    const PreviousPhoneNumber = parseFloat(PhoneNumberString);

    let newPhoneNumber;
    if (isIncrease === true) {
        newPhoneNumber = PreviousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = PreviousPhoneNumber - 1;
    }
    PhoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber) {
    const totalPhonePrice = newPhoneNumber * 1219;
    document.getElementById('phone-total').innerText = totalPhonePrice;

}


document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber)

    calculateSubtotal()

})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);

    calculateSubtotal();
})