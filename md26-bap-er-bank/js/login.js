// step 1 : add click event handler with the submit button
document.getElementById('login-btn').addEventListener('click', function () {
    // step 2 : get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step 3: get the password 
    /* 3.a: set id on html element
    3.b: get the element 
    3.c: get the value from the element
     */
    const passwordField = document.getElementById('user-pass');
    const password = passwordField.value;

    // danger: do not varify email password on the client side 
    // step 4 : verify email && password & check wether valid user or not 
    if (email === 'sontan@baap.com' && password === 'secret') {
        window.location.href = 'bank.html'
    }
    else {
        alert('invalid password')
    }
})