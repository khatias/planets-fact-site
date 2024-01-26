let openIcon = document.querySelector(".open-icon");
let closeIcon =document.querySelector(".close-icon")
function fetchJSONData() {
    return fetch("./data.json")
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


function openNav() {
    var sideNav = document.getElementById("sideNav");
        sideNav.style.width = "100%";
   
    openIcon.style.display ="none"

    closeIcon.style.display="block"
  }
  function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    openIcon.style.display ="block"
    closeIcon.style.display="none"

  }  
 