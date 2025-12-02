//-------------------------------------------------------------------Helper Functions
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function getWeatherInfo() {
  
  const apiKey = 'cee21d7bcdb1e3973d14849c3cda02b4'; 
  const city = 'Portland'; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(`Cloud Percentage in ${city}: ${data.clouds.all}%`);
    })
    .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
    });
}
//---End Helper Functions

//--------------------------------------------------------Event Handlers
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const currentYear = document.getElementById("currentYear");
    if(currentYear)
      {
        const thisYear = new Date().getFullYear();
        currentYear.textContent = thisYear;
      }

      getWeatherInfo();
});
//---End Event Handlers 

