$(document).ready(function() {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {

      $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&APPID=e015ce3a48ba29605503b788374f551a", function(json) {

        var tempf = parseInt(json.main.temp * (9 / 5) - 459.67);
        measurementSystem = "fahrenheit";

        var tempc = parseInt(json.main.temp - 273);

        htmlTempF = "The current temperature is " + tempf + " degrees " + " fahrenheit.";
        htmlTempC = "The current temperature is " + tempc + " degrees " + "celsius.";

        var icon = json.weather[0].main;

        if (icon == "Clouds") {
          iconString = "http://www.clipartbest.com/cliparts/KTj/e9x/KTje9x88c.png";
          htmlIcon = "<img src=" + iconString + " height=" + 100 + "width=" + 100 + "></img>"
        } else if (icon == "Rain") {
          iconString = "http://www.mikeafford.com/store/store-images/ms01b_example_heavy_rain_showers.png";
          htmlIcon = "<img src=" + iconString + " height=" + 100 + "width=" + 100 + "></img>"
        } else {
          iconString = "http://angourieblueseven.com/images/weather_sun.png";
          htmlIcon = "<img src=" + iconString + " height=" + 100 + "width=" + 100 + "></img>"

        }


        $(".cardData").html(htmlTempF);
        $(".cardIcon").html(htmlIcon);
      });
    });
  }

  $("#measure").on("click", function() {

    if (this.checked) {

      inCorF = htmlTempF;

    } else {
      inCorF = htmlTempC;
    }
    $(".cardData").html(inCorF);
  });

});
