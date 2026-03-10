async function ch() {
    let CityName = document.getElementById("city").value;
    const key = '053e2c461581f28552ebdb4c1b5a54e6';
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=${key}&units=metric`;

    const res = await fetch(api);
    const data = await res.json();
    console.log(data);

    let temp = data.main.temp;
    let city = data.name;
    let windSpeed = data.wind.speed;
    let humidity = data.main.humidity;

    document.getElementById('cn').innerHTML = `${city} City`;
    document.getElementById('temp').innerHTML = `${temp} °C`;
    document.getElementById('windspeed').innerHTML = `${windSpeed} k/h`;
    document.getElementById('humidity').innerHTML = `${humidity} %`;

    if(data.weather[0].main == 'Haze'){
        let a = document.querySelector('#img-data');
        a.src = './images/snow.png';
    }
    else if(data.weather[0].main == 'Clear'){
        let a = document.querySelector('#img-data');
        a.src = './images/clear.png';
    }
     else if(data.weather[0].main == 'Clouds'){
        let a = document.querySelector('#img-data');
        a.src = './images/snow.png';
    }
     else if(data.weather[0].main == 'Rain'){
        let a = document.querySelector('#img-data');
        a.src = './images/rain.png';
    }
     else if(data.weather[0].main == 'Snow'){
        let a = document.querySelector('#img-data');
        a.src = './images/snow.png';
    }
} 