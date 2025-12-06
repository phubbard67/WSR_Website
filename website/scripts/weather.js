const CToFHeight = function(Cels)
{
    return Cels * (9/5) + 32;
} 

async function getData() {
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
      if(result.clouds.all > 40)
      {
        newGrayScale = result.clouds.all;
      }
      else
      {
        newGrayScale = 40;
      }

      images = document.getElementsByClassName("image");

      for(i = 0; i < images.length; ++i)
      {
        console.log(images[i]);
        images[i].style.filter = `grayscale(${newGrayScale})`;
      }
      
    } catch (error) {
      console.error(error.message);
    }
}