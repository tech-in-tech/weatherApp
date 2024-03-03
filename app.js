const apiKey = "14e49914b6e5d21ac85b23955177b971";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={city%20name}&appid={API%20key}&units=metric"


async function checkWeather(){
  const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=${apiKey}&units=metric`)
  let data = await response.json();
  return data;
}
checkWeather()