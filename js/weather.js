const API_KEY = "8451d290dfcbd2e1f0d9f8377c651fc4";

const onGeoOk = function(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const temp = document.querySelector("#weather span:nth-child(2)");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = `${data.weather[0].main}`;
            temp.innerText = `${(data.main.temp).toFixed(1)}ºc`;
            city.innerText = data.name;
    });
    setInterval(onGeoOk, 1000);
}

const onGeoError = function(){
    alert("당신을 찾을 수 없어 날씨 정보를 불러올 수 없습니다.");
}

const weatherInfo = function() {
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
} 

// 2022.08.26 실시간 날씨정보 가져오기
weatherInfo();
