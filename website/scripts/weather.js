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
      
      document.getElementById("image").style.filter = "grayscale(0%)";
      
    } catch (error) {
      console.error(error.message);
    }
}