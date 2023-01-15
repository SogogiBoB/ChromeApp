function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:nth-child(2)");
        weather.innerText = `${data.weather[0].main} / ${Math.floor(data.main.temp)}°C`;
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        const icon = document.querySelector("#weather-icon");        
        const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        icon.src = iconUrl;
        icon.alt = "icon";
    });
    
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);