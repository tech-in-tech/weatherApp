const apiKey = "14e49914b6e5d21ac85b23955177b971";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={city%20name}&appid={API%20key}&units=metric";
let btn = document.querySelector(".btn");
let input = document.querySelector(".input");
let temp = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".Wind");
let city = document.querySelector(".city");

function getWeather() {
  btn.addEventListener("click", async (avt) => {
    let cityName = input.value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
    let data = await response.json();
    let tempVal = data.main.temp;
    let humidityVal = data.main.humidity;
    let windVal = data.wind.speed;
    // let cityDispla = data.wind.speed;
    city.innerText = cityName
    console.log(windVal);
    temp.innerText = `${tempVal}°C`;
    // humidity.innerText = humidityVal;
    console.log(data);
    humidity.innerText = humidityVal+'%';
    wind.innerText = `${windVal} Km/h`;
  })
}

getWeather();




