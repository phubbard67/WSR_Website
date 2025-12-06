import request from '../../node_modules/request';
var API_KEY = 'cee21d7bcdb1e3973d14849c3cda02b4';
const CToFHeight = function(Cels)
{
    return Cels * (9/5) + 32;
}
const apiKey = 'cee21d7bcdb1e3973d14849c3cda02b4'; 
const city = 'Portland'; 
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 

const CurrentWeatherData = request({url: url, json: true}, function(error, response){
    if(error){
        console.log("OH NO!!!! FART! FART! FART!");
    }
    else{
        WeatherMain = response.body.main;
        WeatherOverview = response.body.weather[0];
        CurrentSpankButtArea = "place where the band lives (Portland):\n   ";


        console.log(`The current weather description for ${CurrentSpankButtArea}${WeatherOverview.description}\n`);
        console.log(`The Temperature of the ${CurrentSpankButtArea}${WeatherMain.temp}C° \ ${CToFHeight(WeatherMain.temp)}F°\n`);
        console.log(`What it feels like in the ${CurrentSpankButtArea}${WeatherMain.feels_like}C° \ ${CToFHeight(WeatherMain.feels_like)}F°\n`);
    }
});