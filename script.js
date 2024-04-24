function getWeather(){
const apiKey = 'b09d81d933faa6a774498d1dd4a20c3d';
const city = document.getElementById('search-box').value;

if(!city){
    alert('Please enter a city');
    return;
}
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

fetch(currentWeatherUrl)
     .then(response => response.json())
     .then(data => {
        displayWeather(data);
     })
     .catch(error => {
        console.error('Error fetching current weather data:', error);
        alert('Error fetching current weather data.Make sure you are connected to the internet');
     });

    //  fetch(forecastUrl)
    //  .then(response => response.json())
    //  .then(data => {
    //     displayHourlyForecast(data.list);
    //  })
    //  .catch(error => {
    //     console.error('Error fetching hourly forecast data:', error);
    //     alert('Error fetching hourly forecast data.Try again.');
    //  });

}
function showImage() {
    const weatherIcon = document.getElementById('weather-icon');
   weatherIcon.style.display = 'block';
    
}
function displayWeather(data) {
    const temp = document.getElementById('temperature');
    const weatherInfo = document.getElementById('weather-description');
    const city = document.getElementById('city');
    const weatherIcon = document.getElementById('weather-icon');

   temp.innerHTML= '';
   weatherInfo.innerHTML= '';  
   city.innerHTML= ''  ;
   


   if (data.cod === '404') {
      weatherInfo.innerHTML = `<p>${data.message}</p>`;
   } else {
      const cityName = data.name;
      const temperature = Math.round(data.main.temp - 273.15);
      const description = data.weather[0].description;
      const iconCode = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
   
   const currentTemp = `${temperature}°C`;

   
   temp.innerHTML= currentTemp;
   weatherInfo.innerHTML= description; 
   city.innerHTML = cityName ;
   weatherIcon.src = iconUrl ;
   weatherIcon.alt = description; 

   showImage();
   }
   
}