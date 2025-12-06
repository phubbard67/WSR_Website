const CToFHeight = function(Cels)
{
    return Cels * (9/5) + 32;
} 

async function UseRandomPowerToUpdateImages() {
    const apiKey = 'cee21d7bcdb1e3973d14849c3cda02b4'; 
    const city = 'Portland'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      
      const result = await response.json();
      console.log(result);
      console.log(result.clouds.all)

      newGrayScale = 0;
      if(result.clouds.all > 10)
      {
        newGrayScale = result.clouds.all;
      }
      else
      {
        newGrayScale = 10;
      }

      images = document.getElementsByClassName("image");

      for(i = 0; i < images.length; ++i)
      {
        console.log(newGrayScale);
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