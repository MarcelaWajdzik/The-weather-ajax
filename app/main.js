//strona załadowana
$(document).ready(function () {
    //nasłuchiwanie na click
    $('#getCityWeather').click(function () {
        var cityName = $('#cityName').val();
        let apiCode = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=7f1737ddada15736a58660a58f9be0a6';
        //pobieranie JSON
        $.getJSON(apiCode, function (data) {

            var nameCity = data.name;
            var nameCountry = data.sys.country;

            var sunrise = data.sys.sunrise;
            var sunset = data.sys.sunset;
            var temp = data.main.temp;
            var minTemp = data.main.temp_min;
            var maxTemp = data.main.temp_max;
            var pressure = data.main.pressure;
            var wind = data.wind.speed;
            var weatherMain = data.weather[0].main;
            var weatherDescription = data.weather[0].description;
            var weatherIcon = data.weather[0].icon;


            $('.weather__icon').html(`<p>${weatherIcon}</p>`);




        });

    });
});