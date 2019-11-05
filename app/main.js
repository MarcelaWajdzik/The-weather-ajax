//strona załadowana
$(document).ready(function () {

    //zmiana wielkosci inputa
    $('#cityName').click(function () {
        $(this).css('width', '20%').removeAttr('placeholder');
    });

    //nasłuchiwanie na click
    $('#getCityWeather').click(function () {
        var cityName = $('#cityName').val();
        let apiCode = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=7f1737ddada15736a58660a58f9be0a6';


        //pobieranie JSON
        $.getJSON(apiCode, function (data) {
            var nameCity = data.name;
            var nameCountry = data.sys.country;
            var temp = data.main.temp;
            var minTemp = data.main.temp_min;
            var maxTemp = data.main.temp_max;
            var sunrise = convertTimeSunrise(data.sys.sunrise);
            var sunset = convertTimeSunset(data.sys.sunset);
            var pressure = data.main.pressure;
            var wind = data.wind.speed;
            var weatherMain = data.weather[0].main;
            var weatherDescription = data.weather[0].description;

            //covert sunrise
            function convertTimeSunrise(sunTime) {
                var newSunrise = new Date(sunTime * 1000)
                var hourSunrise = newSunrise.getHours()
                let minSunrise = newSunrise.getMinutes()
                let timeSunrise = ` ${hourSunrise}:${minSunrise}`;
                return timeSunrise;
            };
            //covert sunrise
            function convertTimeSunset(x) {
                var newSunset = new Date(x * 1000)
                var hourSunset = newSunset.getHours()
                let minSunset = newSunset.getMinutes()
                let timeSunset = `${hourSunset}:${minSunset}`;
                return timeSunset;
            };

            //create nodes
            $('p.city__name').text(nameCity);
            $('p.country__name').text(nameCountry);
            $('p.city__temp').html(`${temp}&#x2103 `);
            $('p.city__temp--min').html(`${minTemp}&#x2103`);
            $('p.city__temp--max').html(`${maxTemp}&#x2103 `);
            $('p.city__sunrise').text(sunrise);
            $('p.city__sunset').text(sunset);
            $('p.city__pressure').text(`${pressure} hpa`);
            $('p.city__wind').text(`${wind} m/s`);
            $('p.city__weather__main').text(weatherMain);
            $('p.city__weather__description').text(weatherDescription);
        });
    });
});