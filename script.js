$(document).ready(function() {

   if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {

 $.getJSON("https://api.darksky.net/forecast/ba71549f97e07b21bb1614407e38ffd5/"+  position.coords.latitude+","+ position.coords.longitude + "?callback=?", function(json) {
     console.log(json)
     var tempf= json.currently.apparentTemperature;
     measurementSystem="fahrenheit";

     var tempc= (tempf-32)*1.8;

    htmlTempF= "Temperature: "+tempf.toFixed(0)+ " degrees "+ " f <br> Humidity: "+json.currently.humidity+"<br> Wind Speed: "+json.currently.windSpeed + " mph <br> Condition: " + json.currently.summary
    htmlTempC= "Temperature: "+tempc.toFixed(0)+ " degrees "+ " c <br> Humidity: "+json.currently.humidity+"<br> Wind Speed: "+json.currently.windSpeed + " mph <br> Condition: " + json.currently.summary

     var icon=json.currently.icon;

     if (icon=="cloudy")
       {
           $(".cardIcon").html("<i class=\"wi wi-day-cloudy-high\"></i>");
       }
    else if (icon=="rain")
      {
        $(".cardIcon").html("<i class=\"wi wi-day-rain\"></i>");
      }
      else if (icon=="snow")
        {
          $(".cardIcon").html("<i class=\"wi wi-snow\"></i>");
        }
     else
       {
         $(".cardIcon").html("<i class=\"wi wi-day-sunny\"></i>");
       }


  $(".cardData").html(htmlTempF);

          });
  });
}

     $("#measure").on("click", function(){

              if (this.checked) {

          inCorF=htmlTempF;

    } else {
          inCorF=htmlTempC;
    }
       $(".cardData").html(inCorF);
     });

      });
