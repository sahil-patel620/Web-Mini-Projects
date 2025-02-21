const form = document.querySelector("form");
const resetButton = document.querySelector("#resetButton");
const p = document.createElement("p");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // to stop default action after submit

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector(".results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Enter Valid Height`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Enter Valid Weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>BMI is: ${bmi}</span>`;
    p.classList.add("message");
    if (bmi < 18.6) {
      p.style.color = "#3427e6";
      p.style.fontWeight = "bold";
      p.innerHTML = "You are Under Weight 😔";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      p.style.color = "#116308";
      p.style.fontWeight = "bold";
      p.innerHTML = "You are Normal 🙂";
    } else {
      p.style.color = "red";
      p.style.fontWeight = "bold";
      p.innerHTML = "You are Over Weight 😔";
    }
    document.querySelector("h3").insertAdjacentElement("beforebegin", p);
  }
});

resetButton.addEventListener("click", function () {
  document.querySelector("#height").value = "";
  document.querySelector("#weight").value = "";
  document.querySelector(".results").innerHTML = "";
  document.querySelector(".message").innerHTML = "";
});
