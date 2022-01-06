
      let city = document.getElementById('city').value;
      let key = 'a33b47c3058109d2a290e7b9d0c345ca';
      let lang = 'en';
      let url = `http://api.openweathermap.org/data/2.5/weather?city=${city}&appid=${key}=&lang${lang}`;

      var city_names = ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", "Fitchburg", "Flint", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Smith", "Fort Walton Beach", "Fort Wayne", "Fort Worth", "Frederick", "Fremont", "Fresno", "Fullerton", "Gainesville", "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Grand Rapids", "Grayslake", "Green Bay", "GreenBay", "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", "Hampton", "Harlingen", "Harrisburg", "Hartford", "Havre de Grace", "Hayward", "Hemet", "Henderson", "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma", "Houston", "Howell", "Huntington", "Huntington Beach", "Huntsville", "Independence", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", "Joliet", "Kailua", "Kalamazoo", "Kaneohe", "Kansas City", "Kennewick", "Kenosha", "Killeen", "Kissimmee", "Knoxville", "Lacey", "Lafayette", "Lake Charles", "Lakeland", "Lakewood", "Lancaster", "Lansing", "Laredo", "Las Cruces", "Las Vegas", "Layton", "Leominster", "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach", "Lorain", "Los Angeles", "Louisville", "Lowell", "Lubbock", "Macon", "Madison", "Manchester", "Marina", "Marysville", "McAllen", "McHenry", "Medford", "Melbourne", "Memphis", "Merced", "Mesa", "Mesquite", "Miami", "Milwaukee", "Minneapolis", "Miramar", "Mission Viejo", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Moreno Valley", "Murfreesboro", "Murrieta", "Muskegon", "Myrtle Beach", "Naperville", "Naples", "Nashua", "Nashville", "New Bedford", "New Haven", "New London", "New Orleans", "New York", "New York City", "Newark", "Newburgh", "Newport News", "Norfolk", "Normal", "Norman", "North Charleston", "North Las Vegas", "North Port", "Norwalk", "Norwich", "Oakland", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orlando", "Overland Park", "Oxnard", "Palm Bay", "Palm Springs", "Palmdale", "Panama City", "Pasadena", "Paterson", "Pembroke Pines", "Pensacola", "Peoria", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Pomona", "Pompano Beach", "Port Arthur", "Port Orange", "Port Saint Lucie", "Port St. Lucie", "Portland", "Portsmouth", "Poughkeepsie", "Providence", "Provo", "Pueblo", "Punta Gorda", "Racine", "Raleigh", "Rancho Cucamonga", "Reading", "Redding", "Reno", "Richland", "Richmond", "Richmond County", "Riverside", "Roanoke", "Rochester", "Rockford", "Roseville", "Round Lake Beach", "Sacramento", "Saginaw", "Saint Louis", "Saint Paul", "Saint Petersburg", "Salem", "Salinas", "Salt Lake City", "San Antonio", "San Bernardino", "San Buenaventura", "San Diego", "San Francisco", "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seaside", "Seattle", "Sebastian", "Shreveport", "Simi Valley", "Sioux City", "Sioux Falls", "South Bend", "South Lyon", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "St. Petersburg", "Stamford", "Sterling Heights", "Stockton", "Sunnyvale", "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Temecula", "Tempe", "Thornton", "Thousand Oaks", "Toledo", "Topeka", "Torrance", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Tyler", "Utica", "Vallejo", "Vancouver", "Vero Beach", "Victorville", "Virginia Beach", "Visalia", "Waco", "Warren", "Washington", "Waterbury", "Waterloo", "West Covina", "West Valley City", "Westminster", "Wichita", "Wilmington", "Winston", "Winter Haven", "Worcester", "Yakima", "Yonkers", "York", "Youngstown"];



class Fetch {
    async getCurrent(input) {
      const Key = "39a9a737b07b4b703e3d1cd1e231eedc";
  
      //make request to url
  
      const response = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}=&lang${lang}`;
      );
  
      const data = await response.json();
  
      console.log(data);
  
      return data;
    }

    let city = document.getElementById('city').value;
      let key = 'a33b47c3058109d2a290e7b9d0c345ca';
      let lang = 'en';


      const app = {
        init: () => {
          document
            .getElementById('btnGet')
            .addEventListener('click', app.fetchWeather);
          document
            .getElementById('btnCurrent')
            .addEventListener('click', app.getLocation);
        },
        fetchWeather: (ev) => {
          //use the values from latitude and longitude to fetch the weather
          let lat = document.getElementById('latitude').value;
          let lon = document.getElementById('longitude').value;
          let key = '06cc7efd0e5386068ec3c390bcfd0183';
          let lang = 'en';
          let units = 'metric';
          let url = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=${units}&lang=${lang}`;
          //fetch the weather
          fetch(url)
            .then((resp) => {
              if (!resp.ok) throw new Error(resp.statusText);
              return resp.json();
            })
            .then((data) => {
              app.showWeather(data);
            })
            .catch(console.err);
        },
        getLocation: (ev) => {
          let opts = {
            enableHighAccuracy: true,
            timeout: 1000 * 10, //10 seconds
            maximumAge: 1000 * 60 * 5, //5 minutes
          };
          navigator.geolocation.getCurrentPosition(app.ftw, app.wtf, opts);
        },
        ftw: (position) => {
          //got position
          document.getElementById('latitude').value =
            position.coords.latitude.toFixed(2);
          document.getElementById('longitude').value =
            position.coords.longitude.toFixed(2);
        },
        wtf: (err) => {
          //geolocation failed
          console.error(err);
        },
        showWeather: (resp) => {
          console.log(resp);
          let row = document.querySelector('.weather.row');
          //clear out the old weather and add the new
          // row.innerHTML = '';
          row.innerHTML = resp.daily
            .map((day, idx) => {
              if (idx <= 2) {
                let dt = new Date(day.dt * 1000); //timestamp * 1000
                let sr = new Date(day.sunrise * 1000).toTimeString();
                let ss = new Date(day.sunset * 1000).toTimeString();
                return `<div class="col">
                    <div class="card">
                    <h5 class="card-title p-2">${dt.toDateString()}</h5>
                      <img
                        src="http://openweathermap.org/img/wn/${
                          day.weather[0].icon
                        }@4x.png"
                        class="card-img-top"
                        alt="${day.weather[0].description}"
                      />
                      <div class="card-body">
                        <h3 class="card-title">${day.weather[0].main}</h3>
                        <p class="card-text">High ${day.temp.max}&deg;C Low ${
                  day.temp.min
                }&deg;C</p>
                        <p class="card-text">High Feels like ${
                          day.feels_like.day
                        }&deg;C</p>
                        <p class="card-text">Pressure ${day.pressure}mb</p>
                        <p class="card-text">Humidity ${day.humidity}%</p>
                        <p class="card-text">UV Index ${day.uvi}</p>
                        <p class="card-text">Precipitation ${day.pop * 100}%</p>
                        <p class="card-text">Dewpoint ${day.dew_point}</p>
                        <p class="card-text">Wind ${day.wind_speed}m/s, ${
                  day.wind_deg
                }&deg;</p>
                        <p class="card-text">Sunrise ${sr}</p>
                        <p class="card-text">Sunset ${ss}</p>
                      </div>
                    </div>
                  </div>
                </div>`;
              }
            })
            .join(' ');
        },
      };
      
      app.init();