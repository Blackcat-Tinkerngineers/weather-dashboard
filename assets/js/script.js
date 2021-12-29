var getUserRepos = function() {
  fetch("https://api.weather.gov/openapi.json");
};

var response = fetch("https://api.weather.gov/openapi.json");
console.log(response);

fetch("https://api.weather.gov/openapi.json").then(function(response) {
  response.json().then(function(data) {
    console.log(data);
  });
});

