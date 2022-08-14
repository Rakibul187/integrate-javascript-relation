const allLi = document.getElementsByTagName('li')
console.log(allLi);


const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.border = '2px solid blue';
    section.style.marginBottom = '10px';
    section.style.padding = '10px';
    section.style.borderRadius = '20px'
}

const allTitle = document.getElementsByClassName('section-title');
console.log(allTitle)

const secondSection = document.getElementById('second-section')
console.log(secondSection)
secondSection.style.color = 'red';
secondSection.style.backgroundColor = 'blue';

const firsListItem = document.getElementById('first-list');


const li1 = document.createElement('li');
li1.innerText = 'my dynamic item hehehe';

firsListItem.appendChild(li1)


