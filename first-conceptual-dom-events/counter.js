let count = 0;

// by event handler
function counter() {
    count++;
    document.getElementById('count').innerText = count;
}

function counter2() {
    count--;
    document.getElementById('count').innerText = count;
}

/*
 // by event listener
document.getElementById('plus-btn').addEventListener('click', function () {
    count = count + 1;
    document.getElementById('count').innerText = count;
})

document.getElementById('minus-btn').addEventListener('click', function () {
    count = count - 1;
    document.getElementById('count').innerText = count;
}) 
*/