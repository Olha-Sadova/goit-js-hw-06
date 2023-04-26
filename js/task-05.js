const inputName = document.querySelector('input#name-input');

const outputName = document.querySelector('span#name-output');

inputName.addEventListener("input", () => {
    if (inputName.value === '') {
        outputName.textContent = 'Anonymus'
    } else {
        outputName.textContent = inputName.value;
    }
}
 );