const clickSound = new Audio("images/click.mp3");
const apiKey = "1e1d0f9b654c28ee52a42bf26d11bf02";

const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBar = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const card = document.querySelector(".card");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".error").style.display = "none";
    let data = await response.json();
    // console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
      card.style.background =
        "linear-gradient(135deg, rgb(129,165,186),rgb(50,52,86)";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
      card.style.background =
        "linear-gradient(135deg,rgb(134,214,216),rgb(32,195,208))";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
      card.style.background =
        "linear-gradient(130deg,rgb(255,150,36),rgb(142,66,0))";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
      card.style.background =
        "linear-gradient(135deg,rgb(26,62,56),rgb(158,171,136))";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
      card.style.background =
        "linear-gradient(190deg,rgb(0,255,4),rgb(255,141,0))";
    } else {
      weatherIcon.src = "images/clear.png";
      card.style.background =
        "linear-gradient(135deg, rgb(198, 228, 101),rgb(145, 99, 54))";
    }

    document.querySelector(".weather").style.display = "block";
  }
}

searchBtn.addEventListener("click", function () {
  if (searchBar.value == "") {
    clickSound.play();
    document.querySelector(".error").style.display = "block";
  } else {
    checkWeather(searchBar.value);
    clickSound.play();
  }
});
