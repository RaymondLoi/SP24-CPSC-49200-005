// variables
const storageInput = document.querySelector('.storage');
const text = document.querySelector('.text');
const button = document.querySelector('.button');

// event listener that listens to input. Everytime we write, we change the text
storageInput.addEventListener('input', letter => {
    text.textContent = letter.target.value
})

// function: save to our local storage
const saveToLocalStorage = () => {
    localStorage.setItem('.textinput', text.textContent)
}

// when the button is clicked, the function, saveToLocalStorage, runs
button.addEventListener('click', saveToLocalStorage)