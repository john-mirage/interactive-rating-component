import "./assets/styles/index.css";

const ratingSubmitInput = document.getElementById("rating-submit");
const ratingInputs = document.getElementsByClassName("rating-inputs");

let inputsAreDisabled = false;

function disableInputs() {
    if (!inputsAreDisabled) {
        for (let index = 0; index < ratingInputs.length; index++) {
            ratingInputs[index].disabled = true;
        }
        ratingSubmitInput.disabled = true;
        inputsAreDisabled = true;
    }
}

ratingSubmitInput?.addEventListener("keyup", (event) => {
    event.preventDefault();
    if (event.code === "Enter") {
        event.target.checked = true;
        disableInputs();
    }
});

ratingSubmitInput?.addEventListener("change", disableInputs);