const input = document.querySelector("input");
const button = document.querySelectorAll("button");
const clickSound = new Audio("click.mp3");

// console.log(button);

button.forEach(function (btn) {
  btn.addEventListener("click", function () {
    //     console.log("triggered")
    //    console.log(btn.value);
    clickSound.play();

    if (btn.innerText == "AC") {
      input.value = "";
    } else if (btn.innerText == "DEL") {
      input.value = input.value.slice(0, -1);
    } else if (btn.innerText == "=") {
      if (input.value) {
        input.value = eval(input.value);
      } else {
        document.querySelector("#message").style.display = "block";
      }
    } else {
      input.value += btn.innerText;
      document.querySelector("#message").style.display = "none";
    }
  });
});

