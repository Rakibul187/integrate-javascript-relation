/*
// by event handler
function yes() {
    document.getElementById('text').innerText = "Yes! let's do right now!";
}

function ofcourse() {
    document.getElementById('text').innerText = "ofcourse! Please mary me!!"
}
 */

// by event listener
document.getElementById('yes').addEventListener('click', function () {
    document.getElementById('text').innerText = "Yeeees! Let's do right now!"
})
document.getElementById('ofcourse').addEventListener('click', function () {
    document.getElementById('text').innerText = "Ofcourse! Please marry me baby"
})