let typed = new Typed("#element", {
    strings: ["Sahil Patel", "Developer"],
    typeSpeed: 100,
    showCursor: false,
  });

const body = document.querySelector(".hero");
const icon = document.querySelector("#icon");
const logo = document.querySelector(".logo")


icon.addEventListener("click", function(){
    body.classList.toggle("dark-mode");

    if(body.classList.contains("dark-mode")){
        icon.src= "assests/sun.png";
        logo.src ="assests/sahil-logo2.png"
    }else{
        icon.src = "assests/moon.png";
        logo.src = "assests/sahil-logo.png"
    }
})

