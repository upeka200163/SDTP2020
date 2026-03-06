const selectBox = document.getElementById('select-box')
const imageContainer = document.querySelector('.image-container')
const characters = ['Garfield', 'Odie', 'Nermal', 'Pooky', 'Jon', 'Scooby', 'Shaggy', 'Velma']

for (let character of characters) {
    const optionEl = document.createElement("option")
    optionEl.value = character.toLowerCase()
    optionEl.textContent = character

    selectBox.appendChild(optionEl)
}

const initialImage = document.createElement('img')

initialImage.src = `/assets/images/${selectBox.childNodes[0].value}.png`
initialImage.width = '300'
imageContainer.append(initialImage)

selectBox.addEventListener('change', (e) => {
    (imageContainer.childElementCount > 0) && imageContainer.childNodes[0].remove()

    const imageEl = document.createElement('img')
    imageEl.src = `/assets/images/${e.target.value}.png`
    imageEl.width = '300'

    imageContainer.appendChild(imageEl)
})
