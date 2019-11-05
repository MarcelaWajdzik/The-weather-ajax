//strona załadowana
$(document).ready(function () {

    //zmiana wielkosci inputa
    $('#cityName').click(function () {
        $(this).css('width', '20%').removeAttr('placeholder');
    });

    //nasłuchiwanie na click
    $('#getCityWeather').click(function () {
        var cityName = $('#cityName').val();
        let apiCode = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=7f1737ddada15736a58660a58f9be0a6';
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
            function convertTimeSunrise(x) {
                var newSunrise = new Date(x * 1000)
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
                let timeSunset = ` ${hourSunset}:${minSunset}`;
                if (hourSunset < 10) hourSunset = `0 ${hourSunset}`
                return timeSunset;
            };


            $('.name__city--weather').html(` <p> City: ${nameCity } </p>`);
            $('.name__country--weather').html(`<p> Country: ${nameCountry}</p>`);
            $('.temp').html(`<p> Temperature: ${temp}&#x2103 </p>`);
            $('.temp--min').html(`<p> Temp-min: ${minTemp}&#x2103 </p>`);
            $('.temp--max').html(`<p> Temp-max: ${maxTemp}&#x2103 </p>`);
            $('.sunrise').html(`<p> Sunrise: ${sunrise } </p>`);
            $('.sunset').html(`<p> Sunset: ${sunset} </p>`);


        });

    });
});