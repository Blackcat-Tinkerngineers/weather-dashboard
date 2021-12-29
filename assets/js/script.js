var getUserRepos = function() {
  fetch("https://api.openweathermap.org/data/2.5/weather?zip=89502,us&appid=a33b47c3058109d2a290e7b9d0c345ca");
};

var response = fetch("https://api.openweathermap.org/data/2.5/weather?zip=89502,us&appid=a33b47c3058109d2a290e7b9d0c345ca");
console.log(response);

fetch("https://api.openweathermap.org/data/2.5/weather?zip=89502,us&appid=a33b47c3058109d2a290e7b9d0c345ca").then(function(response) {
  response.json().then(function(data) {
    console.log(data);
  });
});

