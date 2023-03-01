const btnRatings = document.querySelectorAll(".rating-item");
const cardSubmission = document.getElementById("submission");
const cardThankyou = document.getElementById("thankyou");
const submitBtn = document.getElementById("submit");
const rating = document.getElementById("rating");

let selected;

submitBtn.disabled = true;

btnRatings.forEach((element, idx) => {
  element.addEventListener("click", () => {
    selected = idx;
    submitBtn.disabled = false;
    element.classList.add("selected");
    btnRatings.forEach((el, i) => {
      if (el.classList.contains("selected") && selected !== i) {
        el.classList.remove("selected");
      }
    });
  });
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (selected !== undefined) {
    cardSubmission.classList.add("hide");
    rating.textContent = selected + 1;
    cardThankyou.classList.remove("hide");
  }
});
