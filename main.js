let weather = {
    // apikey : "17265f1e3b1745f470c1f34c7f772642",
    apikey : "44838088-11122b5211bf63fd3b42b1e23",
    fetchWeather : function (city) {
        // fetch ("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid="+ this.apikey)
        fetch ("https://pixabay.com/api/?key= + this.apikey + &q= + city + &image_type=photo")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return this.displayWeather(data);
        });
    },
    displayWeather : function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed );
        document.querySelector(".city").innerText = "Weather in "+ name;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".icon").src ="http://openweathermap.org/img/wn/"+ icon +".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity : "+ humidity+"%";
        document.querySelector(".windspeed").innerText = "Wind Speed : " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url(https://source.unsplash.com/1600x900/?"+ name +",)";
        document.querySelector(".icon2").src ="http://openweathermap.org/img/wn/"+ icon +".png";
    },
    search : function () {
        return this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

// Search button action ---
function myfn () {
    return weather.search();
};
// Enter key(keyCode = 13) action ---
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.keyCode === 13){
        return myfn();
    }
});

//Loading page weather ---
weather.fetchWeather("Kolkata");
