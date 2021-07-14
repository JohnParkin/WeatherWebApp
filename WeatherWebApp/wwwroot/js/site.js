$(document).ready(function () {

    alert("javascript is running.")

    var weatherForecast = {};

    const updateTimePeriod = 16000;
    const weatherIntervalPeriod = 1000 * 60 * 60;
    const scheduleOnCarousel = 0;
    const doNotShow = 1;
    const showOverride = 2;
    const tempPanel = 2;
    const seaweedPanel = 3;
    const waterQualityPanel = 4;
    const weatherPanel = 5;

    var carouselElements;
    var carouselIndex = 0;

    var location = "The Lake District";
    console.log("The Location is: ", location);
    var orientation = "Landscape";

    var dateTitle = [
        "th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th",
        "th", "th", "th", "th", "th", "th", "th", "th", "th", "th",
        "th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th",
        "th", "st"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var tempText = " °C";

    updateTime();
    setInterval(processIntervalTick, updateTimePeriod);
    //determineNextCaroselElement();
    //updateTemperature();

    function processIntervalTick() {
        updateTime();
        /// TBD
    }

    function updateTime() {

        var footer = document.getElementById("screen-footer");

        if (footer != null) {

            var now = new Date();
            var hr = now.getHours();
            var min = now.getMinutes();
            if (min < 10) {
                min = "0" + min;
            }
            var day = days[now.getDay()];

            var month = months[now.getMonth()];
            var year = now.getFullYear();

        //    document.getElementById("current-time").innerHTML = hr + ":" + min;
        //    document.getElementById("current-day").innerHTML = day;
        //    document.getElementById("current-date").innerHTML = now.getDate() + dateTitle[now.getDate()] + " " + month + " " + year;
        }
    }

    function search(nameKey, myArray) {
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i].control === nameKey) {
                return myArray[i];
            }
        }
    }


    function processWeatherIntervalTick() {
        getWetherUpdate();
    }

    setInterval(processWeatherIntervalTick, weatherIntervalPeriod);

    function getWetherUpdate() {

        console.log("Weather Location Code: ", weatherLocationCode);

        //$.ajax({
        //    type: 'GET',
        //    url: '/api/metweather',
        //    data: {
        //        weatherLocationCode,
        //    },
        //    success: function (data) {

        //        weatherForecast = data;
        //        console.log("Weather updated on: " + weatherForecast.dataDate);
        //    }
        //});

        //weatherForecast = {
        //    weatherTypeStr = "Sunny day"
        //};
        return true;
    }

    function updateWeather() {

        if (jQuery.isEmptyObject(weatherForecast)) {
            return;
        }

        //updating header
        var headerText = "Forecast for " + weatherForecast.forecastTime + ": " + weatherForecast.weatherTypeStr;
        document.getElementById("MetHeader").innerHTML = headerText;
        document.getElementById("MetTemp").innerHTML = weatherForecast.temperature + " °C";
        var rainProbability = weatherForecast.precipitationProbability + "%";
        document.getElementById("MetRainProb").innerHTML = rainProbability;
        document.getElementById("windSpeed").innerHTML = weatherForecast.windSpeed + " (mph) " + weatherForecast.windDirection;
        document.getElementById("feelsLikeTemperature").innerHTML = weatherForecast.feelsLikeTemperature + " °C";
        document.getElementById("screenRelativeHumidity").innerHTML = weatherForecast.screenRelativeHumidity + "%";
        document.getElementById("windGust").innerHTML = weatherForecast.windGust + " (mph)";
        document.getElementById("visabilityStr").innerHTML = weatherForecast.visabilityStr;
        document.getElementById("dataDate").innerHTML = weatherForecast.dataDate.substring(11, 16);
    }
});