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

     if (icon=="Clouds")
       {
        iconString="http://www.clipartbest.com/cliparts/KTj/e9x/KTje9x88c.png";
        htmlIcon= "<img src="+iconString+" height="+100+"width="+100+"></img>"
       }
    else if (icon=="Rain")
      {
        iconString="http://www.mikeafford.com/store/store-images/ms01b_example_heavy_rain_showers.png";
        htmlIcon= "<img src="+iconString+" height="+100+"width="+100+"></img>"
      }
     else
       {
         iconString="http://angourieblueseven.com/images/weather_sun.png";
        htmlIcon= "<img src="+iconString+" height="+100+"width="+100+"></img>"

       }


  $(".cardData").html(htmlTempF);
     $(".cardIcon").html(htmlIcon);
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
