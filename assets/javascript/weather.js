
  function theweather(lat, lon) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=Imperial&appid=4119dfca25e96bf1f10f35a975835f6c");
    xhr.onload = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          let json = JSON.parse(xhr.responseText);
          document.getElementById("temp").innerHTML = json.main.temp.toFixed(0) + "&#176 f";
          document.getElementById("weather-description").innerHTML = json.weather[0].description;
        } else {
        }
      }
    }
    xhr.send();
  }

  window.onload = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      theweather(position.coords.latitude, position.coords.longitude);
    });
    setInterval(theweather, 6000000);
  }
