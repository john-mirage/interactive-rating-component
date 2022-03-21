import "./assets/styles/index.css";

const ratingInputs = document.getElementsByClassName("rating-input");
const ratingSelected = document.getElementById("rating-selected");
const carousel = document.getElementById("carousel");
const carouselButton = document.getElementById("carousel-button");

let rating = false;
let ratingIsSelected = false;

carouselButton?.addEventListener("click", () => {
    if (typeof rating === "string") {
        ratingSelected.innerText = rating;
        carousel.style.transform = "translateX(-50%)";
    }
});

for (let index = 0; index < ratingInputs.length; index++) {
    ratingInputs[index].addEventListener("change", (event) => {
        rating = event.target.value
        if (!ratingIsSelected) {
            carouselButton?.classList.remove("bg-button", "text-medium-grey", "cursor-not-allowed");
            carouselButton?.classList.add("bg-orange", "text-white", "hover:bg-white", "hover:text-orange", "cursor-pointer");
            ratingIsSelected = true;
        }
    });
}