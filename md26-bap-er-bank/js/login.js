/*
step 1 : add click event handler with the submit button
step 2 : get the email address inside the email input field
2.a :always remember to use .value to get text from an input field
step 3: get the password 
3.a: set id on html element
3.b: get the element 
3.c: get the value from the element
 
danger: do not varify email password on the client side 
step 4 : verify email && password & check wether valid user or not 
*/

// step 1 
document.getElementById('submit-btn').addEventListener('click', function () {
    // step 2 
    const emeailField = document.getElementById('email-field');
    const email = emeailField.value;

    // step 3 
    const passField = document.getElementById('pass-field');
    const password = passField.value;

    // step 4 
    if (email === 'sontan@baap.com' && password === 'secret') {
        window.location.href = 'bank.html'
    }
    else {
        alert('Please provide valid email & password !!')
    }

})