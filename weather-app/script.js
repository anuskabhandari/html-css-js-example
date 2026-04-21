// Wait until DOM is loaded (safe method)
document.addEventListener("DOMContentLoaded", function() {

    let city = document.getElementById("input");
    let button = document.getElementById("btn");
    let result = document.getElementById("result");

    button.addEventListener("click", function() {
        console.log("Button clicked"); // check first

        let cityName = city.value.trim();
        if(cityName === ""){
            result.textContent = "❌ Please enter a city";
            return;
        }

        let url = "https://api.openweathermap.org/data/2.5/weather?q=" 
                  + cityName 
                  + "&appid=a058d58a8021f7f0f6c8285b483601e3&units=metric";

        fetch(url)
        .then(response => response.json())
        .then(data => {
            if(data.cod === "404"){
                result.textContent = "❌ City not found";
                return;
            }
            let temp = data.main.temp;
            let desc = data.weather[0].description;
            result.innerHTML = "🌡️ Temp: " + temp + "°C <br> 🌥️ Weather: " + desc;
        })
        .catch(error => {
            console.log(error);
            result.textContent = "❌ Error fetching data";
        });

    });
    // Clear button functionality
clearBtn.addEventListener("click", function() {
    city.value = "";
    result.textContent = "";
});

});
