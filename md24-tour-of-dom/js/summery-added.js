// added a full section
const mainContainer = document.getElementById('main-container');

const bazarSection = document.createElement('section');
mainContainer.appendChild(bazarSection)


const heading = document.createElement('h1')
heading.innerText = 'Bazar section';
bazarSection.appendChild(heading)

const ul = document.createElement('ul');
bazarSection.appendChild(ul)

const li1 = document.createElement('li');
li1.innerText = 'caaal';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'daaal';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'fish & beef';
ul.appendChild(li3)