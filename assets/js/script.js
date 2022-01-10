const app = {
  init: () => {
    document
      .getElementById('searchbtn')
      .addEventListener('click', app.fetchWeather);
  },

  fetchWeather: () => {
    let city = document.getElementById("search-text").value
    let key = '72c9897166701c96e9e57f0a576983ac';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&coord.lat={coord.lat}&coord.lon={coord.lon}&appid=${key}`;
    //let date = document.getElementById('date')
    let temp = document.getElementById('temp')
    let wind = document.getElementById('wind')
    let humid = document.getElementById('humid')
    let lat = document.getElementById('lat')
    let lon = document.getElementById('lon')


    //fetch the weather
    fetch(url)
      .then(resp => resp.json())
      .then((data) => {
        console.log(data);
        temp.innerHTML = 'temp: ' + data.main.temp
        wind.innerHTML = 'wind: ' + data.wind.speed
        humid.innerHTML = 'humidity: ' + data.main.humidity
        //date.innerHTML = 'date: ' + data.dt
        lat.innerHTML = 'latitude: ' + data.coord.lat
        lon.innerHTML = 'longitude: ' + data.coord.lon
        //  temp.innerHTML = data.main.temp
      })
      .catch(console.err);
  },

};

localStorage['getItem'] = function() {
  return 0
} >
localStorage.getItem('getItem')
0

app.init();