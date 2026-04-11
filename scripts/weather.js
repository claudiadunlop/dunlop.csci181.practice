console.log("Weather script loaded.");


// variables
let is_loading = false;
let error_message = "";
let weather_data = null;

const output_element = document.getElementById("weather-output");

// functions

//render weather function
function render_weather(loading, error, data){
    // loading
    if (loading) {
        output_element.className = "loading";
        output_element.innerHTML = "Loading...";
        return;
    }
    //error
    if (error) {
        output_element.className = "error";
        output_element.innerHTML = error_message;
        return;
    }
    // if there is weather data
    if (weather_data) {
        const periods = weather_data.properties.periods;
        const current_period = periods[0];

        const temperature = current_period.temperature;
        const forecast = current_period.shortForecast;

        output_element.className = "degree-number";
        output_element.innerHTML = `
        <div class="temp">${temperature}&deg;</div>
        <div class="forecast">${forecast}</div>
        `;
        return;
    }else{
        output_element.className = "no-data";
        output_element.innerHTML = "Weather Data Unavailable";
        return;
    }
}

// get weather data function

async function getWeatherData(){
    is_loading = true;
    error_message = "";
    render_weather(is_loading, error_message, weather_data);

    try {
    const response = await fetch(
      "https://api.weather.gov/gridpoints/MSO/105,131/forecast"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch weather data.");
    }

    const data = await response.json();
    console.log(data);

    weather_data = data;

    } catch (error) {
    error_message = "Error loading weather data.";
    weather_data = null;
    } finally {
    is_loading = false;

    render_weather(is_loading, error_message, weather_data);
    }

}

getWeatherData();