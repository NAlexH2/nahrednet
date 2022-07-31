const greeting = document.querySelector("#greeting");
const weatherconditions = document.querySelector("#currentcons");
const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=45.511383&lon=-122.685347&appid=45acaf3707d2524d96b4d869a0e2425d";

const GiveThemAHello = () => {
  let element = document.createElement("div");
  let currentTime = new Date(Date.now());
  let tod = currentTime.getHours();
  if (tod < 12) element = "Good morning!";
  else if (tod < 16) element = "Good afternoon!";
  else element.textContent = "Good evening!";
  greeting.append(element);
  return;
};

const HeresTheWeatherToo = (url) => {
  $.get({
    type: "GET",
    url: url,
    success: (temps) => {
      currentTemps = parseInt((temps.main.temp - 273.15) * 1.8 + 32);
      currentClouds = temps.weather[0].description;
      $("#currentTemp").text(currentTemps);
      $("#currentClouds").text(currentClouds + ".");
    },
    error: (err) => {
      console.log(err);
    },
    finally: () => {},
  });
};

GiveThemAHello();
HeresTheWeatherToo(url);