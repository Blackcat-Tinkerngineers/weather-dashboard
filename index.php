<!DOCTYPE html>
<html lang="en">

<head>
    <title>It's raining sideways!</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="./assets/css/style.css" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

</head>
<body>
    <div class="header" style="width: 100%">
        <h1>Weather Dashboard ☁️⚡💦</h1>
    </div>



        <div class="card-body">
        <h5 class="card-title">Search for your favorite city </h5>
        <p class="card-text"></p>
        <form id="search-form" class="form" method="POST">
            <label for="search-text"></label>
            <input type="text" name="search-text" id="search-text" />
            <input type="button" id="searchbtn" class="sbutton" value="SEARCH" />
        </form>
    </div>
    <br>
    <!-- End Left Column -->

    <!-- Right Column -->
        <div class="card-body">
                        <h4 class="card-title">Forecast of the today is..</h4>
                        <h2 id="City"></h2>
                        <span id="icon"></span>
                        <p id="date"></p>
                        <p id="temp">Temp</p>
                        <p id="wind">Wind</p>
                        <p id="humid">Humidity</p>
                        <p id="lat">Latitude</p>
                        <p id="lon">Longitude</p>
                    </div>
            


    <script type="text/javascript">
        console.log(localStorage)
    </script>


    <script src="./assets/js/script.js"></script>
    <footer>
        <p>Made with ❤️ by Blackcat-Tinkerngineers</p>
    </footer>
</body>

</html>