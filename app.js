const api = "c2ffbb7c7e7f6f413d28cde70e8da8e2";
let city = document.getElementById("cityName");
let check = document.getElementById("checkWeather")
let temp = document.getElementById("temp")
let pressure = document.getElementById("pressure")
let humidity = document.getElementById("humidity")

city.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        check.click();
    }
});
check.addEventListener("click", () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${api}&units=metric`)
        .then(response => response.json())
        .then(data => {
          var html =  `
                <center>        <input type="text" id="cityName" placeholder="Enter The Name Of The City You Want To Get The Weather Of...."><button id="checkWeather">Get</button>
                </center>
                <hr>
                <div id="City"><b><h2>City</h2></b><br><br>
                ${city.value}
                <br>
                </div><br>
                <div id="temp"><b><h2>Temperature</h2></b>
                <img src=" http://openweathermap.org/img/wn/${data['weather'][0]['icon']}@2x.png" alt="icon"><br>
                ${data['main']['temp']}&deg C With<br>
                ${data['weather'][0]['description']}<br>

                </div>
                <div id="pressure"><b><h2>Pressure</h2></b><br><br>
                ${data['main']['pressure']}</div>
                <div id="humidity"><b><h2>Humidity</h2></b><br><br>
                ${data['main']['humidity']}</div>
            `;
            
console.log(data)
            document.getElementById("weather").innerHTML = html
        })
        
    })
    /*fetch(`http://worldtimeapi.org/api/timezone/Asia/${city.value}`)
        .then(response=>response.json())
        .then(data=>{console.log(data)
        
            document.getElementById("City").innerHTML += data['datetime']
        })*/