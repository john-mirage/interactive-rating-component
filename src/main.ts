import "./assets/styles/index.css";

const ratingSubmitInput = document.getElementById("rating-submit") as HTMLInputElement;
const ratingInputs = document.getElementsByClassName("rating-inputs") as HTMLCollectionOf<HTMLInputElement>;

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

ratingSubmitInput?.addEventListener("keyup", (event: KeyboardEvent) => {
    event.preventDefault();
    if (event.code === "Enter") {
        const input = event.target as HTMLInputElement;
        input.checked = true;
        disableInputs();
    }
});

ratingSubmitInput?.addEventListener("change", disableInputs);