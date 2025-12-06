//-------------------------------------------------------------------Helper Functions
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
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
});
//---End Event Handlers 

