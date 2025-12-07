const CToFHeight = function(Cels)
{
    return Cels * (9/5) + 32;
} 

const options = {
  latitude: 45.5233729,
  longitude: -122.6885142,
  PortlandOrWeatherOptionsUrl: 'https://api.weather.gov/points/45.5233729,-122.6885142',
  PortlandforcastUrl: 'https://api.weather.gov/gridpoints/PQR/112,104/forecast',
  PortlandForecast: 'https://api.weather.gov/gridpoints/PQR/112,104/forecast',
  PortlandForecastHourly: 'https://api.weather.gov/gridpoints/PQR/112,104/forecast/hourly',
  PortlandForecastGridData: 'https://api.weather.gov/gridpoints/PQR/112,104',
  PortlandObservationStations: 'https://api.weather.gov/gridpoints/PQR/112,104/stations',
}

async function UseRandomPowerToUpdateImages() {
    const grayScaleMin = 10;

    try {
      const response = await fetch(options.PortlandForecastGridData, {
        method: "POST", 
        headers: {
          "User-Agent" : "(https://walkingstalkingrobots.com, walkingstalkingrobots@gmail.com)"
        }
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      
      const result = await response.json();
      const CurrentCloudPercentInPortland = result.properties.skyCover.values[0].value;

      console.log(CurrentCloudPercentInPortland);

      newGrayScale = 0;
      if(CurrentCloudPercentInPortland == 100)
      {
        newGrayScale = CurrentCloudPercentInPortland;
        console.log("Wow.\nAnother day of 100% cloud coverage in Portland.\n");
      }
      else if(CurrentCloudPercentInPortland == 0)
      {
        newGrayScale = CurrentCloudPercentInPortland;
        console.log("WHAT THE FUCK?!?!??!?!?!?!\n    ZERO CLOUDS IN PORTLAND TODAY?!?!?!\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!PARTY!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n");
      }
      else if(CurrentCloudPercentInPortland > grayScaleMin)
      {
        newGrayScale = CurrentCloudPercentInPortland;
      }
      else
      {
        newGrayScale = grayScaleMin;
      }

      images = document.getElementsByClassName("image");

      for(i = 0; i < images.length; ++i)
      {
        images[i].style.filter = `grayscale(${newGrayScale}%)`;
      }
      
    } catch (error) {
      console.error(error.message);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    //This function uses a "real" random number produced by the 
    //  weather to update the grayscale of the images. when it is cloudy, 
    //  the images are more gray, and less clouds, less gray, but it will change
    //  randomly, truley randomly. no more Srand for this guy! R-Rand has begun! :)
    UseRandomPowerToUpdateImages();
});