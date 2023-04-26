const inputText = document.getElementById("validation-input");

inputText.addEventListener("blur", onTargetTextInputBlur);

const dataLength = inputText.getAttribute('data-length');

function onTargetTextInputBlur(event) {
    const valueLength = event.target.value.trim().length;
    

        if (Number(dataLength) === valueLength) {
            inputText.classList.add("valid");
            inputText.classList.remove("invalid");
        }
        else {
            inputText.classList.add("invalid");
            inputText.classList.remove("valid");
        }
    }