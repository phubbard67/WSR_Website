const CToFHeight = function(Cels)
{
    return Cels * (9/5) + 32;
} 

async function UseRandomPowerToUpdateImages() {
    const apiKey = 'cee21d7bcdb1e3973d14849c3cda02b4'; 
    const city = 'Portland'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const grayScaleMin = 10;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      
      const result = await response.json();

      newGrayScale = 0;
      if(result.clouds.all > grayScaleMin)
      {
        newGrayScale = result.clouds.all;
      }
      else if(result.clouds.all == 100)
      {
        newGrayScale = result.clouds.all;
        console.log("Wow. another day of 100% cloud coverage in Portland.");
      }
      else if(result.clouds.all == 0)
      {
        newGrayScale = result.clouds.all;
        console.log("WHAT THE FUCK?!?!??!?!?!?! ZERO CLOUDS IN PORTLAND TODAY?!?!?! PARTY!!!!");
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