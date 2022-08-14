// method 2 ========================most use full==================
function makeRed() {
    document.body.style.backgroundColor = 'red';
};

// method 3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
};

// method 4 
const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = makePurple;

function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

// method 5 
const makeOrangeButton = document.getElementById('make-orange');
makeOrangeButton.onclick = function () {
    document.body.style.backgroundColor = 'orange'
}

// method 6 
const makePinkButton = document.getElementById('make-pink');
makePinkButton.addEventListener('click', makePink);
function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// method 7 : u can use function name or not doesn matter
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() { document.body.style.backgroundColor = 'green'; })

// method 8 : most usefull method we will use it 
document.getElementById('make-tomato').addEventListener('click', function () {
    document.body.style.backgroundColor = 'tomato';
})
