const apiKey = "14e49914b6e5d21ac85b23955177b971";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={city%20name}&appid={API%20key}&units=metric";
let btn = document.querySelector(".btn");
let input = document.querySelector(".input");
let temp = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".Wind");
let city = document.querySelector(".city");
let weatherIcon = document.querySelector(".weather-icon");
let weather = document.querySelector(".weather");
let newWeather = document.querySelector("#new-weather");
let col = document.querySelector(".details");

btn.addEventListener("click", async (avt) => {
  let cityName = input.value;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
  
  let data = await response.json();

  let tempVal = data.main.temp;
  let humidityVal = data.main.humidity;
  let windVal = data.wind.speed;
  let realCity = data.name;


  city.innerText = cityName
  // console.log(cityName)
  // console.log(windVal);


  temp.innerText = `${tempVal}°C`;
  console.log(data);
  humidity.innerText = humidityVal + '%';
  wind.innerText = `${windVal} Km/h`;
  console.log(data.weather[0].main);



  // !Weather conditions
  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "clouds.png";
  }
  else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "clear.png";
  }
  else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "rain.png";
  }
  else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "drizzle.png";
  }
  else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "mist.png";
  }
  else if (data.weather[0].main == "Haze") {
    weatherIcon.src = "mist.png";
  }
  else if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "clouds.png";
  }
  else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "snow.png";
  }
  // console.log(realCity);
})





