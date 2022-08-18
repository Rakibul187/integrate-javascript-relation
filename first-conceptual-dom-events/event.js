// event handler
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

function makeGreen() {
    document.body.style.backgroundColor = 'green'
}

function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}

// event listener 
document.getElementById('blue-btn').addEventListener('click', function () {
    document.body.style.backgroundColor = 'blue';
})

document.getElementById('sky-blue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'skyBlue'
})