const key  = "d5a033c05eab8154480d8631c44a49f9"
let result = $("#result");
let searchBtn = $("#search-btn");
let cityRef = $("#city");

let getWeather = () => {
    let cityValue = cityRef.val();
    if (cityValue.length == 0) {
        result.html(`<h3 class="msg">Please enter a city name</h3>`) ;
    }
    else {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
        cityRef.val("");
        $.ajax({
            url: url,
                method: 'GET',
                success: (data) => {
                result.html( `
        <h2>${data.name}</h2>
        <h4 class="weather">${data.weather[0].main}</h4>
        <h4 class="desc">${data.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1>${data.main.temp} &#176;</h1>
        <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${data.main.temp_min}&#176;</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${data.main.temp_max}&#176;</h4>
            </div>
        </div>
        `);
            },
                error: (error) => {
                result.html(`<h3 class="msg">City was not found</h3>`)
            }
        });
    }}

searchBtn.on("click", getWeather);
$(window).on("load", getWeather);
