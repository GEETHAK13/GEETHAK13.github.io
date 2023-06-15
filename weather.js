
const weatherApi = {
    key: "5f09c49b1daaa88e954c4915c04f4577",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",
  };
  
  const searchInputBox = document.getElementById("input");
  

  searchInputBox.addEventListener("keypress", (event) => {
    if (event.keyCode == 13) {
      console.log(searchInputBox.value);
      getWeatherReport(searchInputBox.value);
      document.querySelector(".weather-body").style.display = "block";
    }
  });
  
  function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
      .then((weather) => {
        return weather.json();
      })
      .then(showWeatherReport);
  }
  
  function showWeatherReport(weather) {
    console.log(weather);
  
    let city = document.getElementById("city");
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    let temperature = document.getElementById("temp");
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;
  
    let minMaxTemp = document.getElementById("min-max");
    minMaxTemp.innerHTML = `${Math.floor(
      weather.main.temp_min
    )}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;
  
    let weatherType = document.getElementById("weather");
    weatherType.innerText = `${weather.weather[0].main}`;
  
    let date = document.getElementById("date");
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);
  
    if (weatherType.textContent == "Clear") {
      document.body.style.backgroundImage = "url('clear.jpg')";
    } else if (weatherType.textContent == "Clouds") {
      document.body.style.backgroundImage = "url('cloud.jpg')";
    } else if (
      (weatherType.textContent == "Haze") |
      (weatherType.textContent == "Mist")
    ) {
      document.body.style.backgroundImage = "url('haze.jpg')";
    } else if (weatherType.textContent == "Rain") {
      document.body.style.backgroundImage = "url('rain.jpg')";
    } else if (weatherType.textContent == "Snow") {
      document.body.style.backgroundImage = "url('snow.jpg')";
    } else if (weatherType.textContent == "Thunderstorm") {
      document.body.style.backgroundImage = "url('thunderstorm.jpg')";
    }
  }
  
  
  function dateManage(date) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  
    let year = date.getFullYear();
    let month = months[date.getMonth()];
    let dat = date.getDate();
    let day = days[date.getDay()];
  
    return `${dat} ${month} (${day}), ${year}`;
  }
  