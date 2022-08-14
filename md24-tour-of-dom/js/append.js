//1. where to add
const placesList = document.getElementById('places-list');

//2. what to be added 
const li = document.createElement('li');
li.innerText = 'pahartoli';

// 3. add child
placesList.appendChild(li)


// ==========added section==============

// 1. where to add
const mainContainer = document.getElementById('main-container');

//2. what to be added
const section = document.createElement('section');

const h1 = document.createElement('h1');
h1.innerText = 'Favourite fast food';
section.appendChild(h1)

const li1 = document.createElement('li');
li1.innerText = 'biriyani';
section.appendChild(li1)

const li2 = document.createElement('li');
li2.innerText = 'borhanii';
section.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'salad';
section.appendChild(li3)
// 3. added child
mainContainer.appendChild(section)






