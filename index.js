const selectBox = document.getElementById('select-box');
const imageContainer = document.querySelector('.image-container');

const characters = ['garfield', 'jon', 'nermal', 'odie', 'pooky','scooby','shaggy','velma'];

characters.forEach((character) => {
    const optionEl = document.createElement('option');
    optionEl.value = character.toLowerCase();
    optionEl.textContent = character;

    selectBox.appendChild(optionEl);
});

selectBox.addEventListener('change', (e) => {
    (imageContainer.childElementCount > 0) &&  imageContainer.childNodes[0].remove()
        
    const imageEl = document.createElement('img');
    imageEl.src = `assets/${e.target.value}.jpg`;
    imageEl.width="300";

    imageContainer.appendChild(imageEl);
});