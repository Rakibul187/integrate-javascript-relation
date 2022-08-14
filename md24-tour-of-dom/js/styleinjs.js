const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.border = '2px solid red';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '10px';
    section.style.padding = '20px';
    section.style.backgroundColor = 'lightGray';
}

const placesContainer = document.getElementById('places-container');
placesContainer.style.backgroundColor = 'black';
placesContainer.style.color = 'red';
placesContainer.style.textAlign = 'center';