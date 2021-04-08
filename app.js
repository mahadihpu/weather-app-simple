document.getElementById("search-button").addEventListener("click",function(){
        const cityName = document.getElementById("city-name").value;
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=f071890e91d29a3ad2676fb6d7b65ed5&units=metric')
       .then(response => response.json())
       .then(data => {
        document.getElementById("city").innerText = data.name;
        document.getElementById("temperature").innerText = data.main.temp;
        document.getElementById("weather").innerText = data.weather[0].main;
        document.getElementById("weather-icon").src = 'https://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png';
   })
   })