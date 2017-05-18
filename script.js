$(document).ready(function() {

   if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {

 $.getJSON("https://api.darksky.net/forecast/ba71549f97e07b21bb1614407e38ffd5/"+  position.coords.latitude+","+ position.coords.longitude + "?callback=?", function(json) {
     console.log(json)
     var tempf= json.currently.apparentTemperature;
     measurementSystem="fahrenheit";

     var tempc= ((tempf-32)*5)/9;

    htmlTempF= tempf.toFixed(0)+ "&#8457<br><br><a style=\"font-size: 24px\">" + json.minutely.summary + "</a>"
    htmlTempC= tempc.toFixed(0)+ "&#8451<br><br><a style=\"font-size: 24px\">" + json.minutely.summary + "</a>"

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
