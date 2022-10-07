function weather() {

    const location = document.getElementById("location");
    const apiKey = '3ef0d46024fd3e034167026dba9a8e63';
    

    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      location.innerHTML = 'Latitude is ' + latitude + '° Longitude is ' + longitude + '°';
      const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units='metric'`;
      fetch(url)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
      });
    }

    function error() {
      location.innerHTML = "Unable to retrieve your location";
    }

    location.innerHTML = "Locating...";
  }

  weather();