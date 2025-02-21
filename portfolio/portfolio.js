// typing effect
let typed = new Typed("#element", {
  strings: ["Web Developer.", "Graphic Designer."],
  typeSpeed: 50,
});

const clickSound = new Audio("images/click.mp3");
const nav = document.querySelector("nav");
const body = document.querySelector("body");
const footer = document.querySelector("footer");
const icon = document.querySelector("#icon");

icon.addEventListener("click", function () {
  clickSound.play();
  nav.classList.toggle("dark-nav");
  body.classList.toggle("dark-body");
  footer.classList.toggle("dark-footer");
  if(body.classList.contains("dark-body")){
      icon.src ="images/sun.png";
  }else{
    icon.src ="images/moon.png";
  }
});
