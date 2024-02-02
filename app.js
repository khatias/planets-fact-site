var planetTitle = document.getElementById('planet-title')
let planets = document.getElementsByClassName("planet");
let main = document.getElementsByTagName('main')[0];
let aboutPlanet=document.getElementById('about-planet')
let openIcon = document.querySelector(".open-icon");
let closeIcon =document.querySelector(".close-icon")
let planetImage =document.getElementById('planet-image')
let planetImageDiv =document.querySelector(".planet-iamge-div")
let wikipediaSource = document.getElementById('wikipedia-source')
let rotationTime =document.getElementById('rotation-time')
let revolutionTime =document.getElementById('revolution-time')
let radius =document.getElementById('radius')
let averageTemp =document.getElementById('average-temp')
let structure =document.getElementById("structure")
let overview =document.getElementById("overview")
let geology =document.getElementById("geology")
let surfaceImage =document.getElementById("image-surface")
let planateImageDiv = document.querySelector('.planet-image-div')

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

  function fetchJSONData() {
    return fetch('./data.json')
        .then((response) => response.json())
        .then((data) => {
            return data; 
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}


fetchJSONData().then((data) => {
    currentPlanetIndex = 0;
   

    function updateContent(tabType) {
        const currentData = data[currentPlanetIndex];
        aboutPlanet.textContent = currentData[tabType].content;
        planetImage.src =  tabType === 'structure' ? currentData.images.internal :'overview' ? currentData.images.planet : "" ;
  
    function updateImagesSize(){
        const screenWidth = window.innerWidth ;
        var image = new Image();
        image.src = currentData.images.planet;
        image.onload = function () {
            if (screenWidth < 768) {
                planetImage.width = image.naturalWidth * 0.385;
            } else if (screenWidth >= 768 && screenWidth < 1440) {
                planetImage.width = image.naturalWidth * 0.6344;
            } else if (screenWidth >= 1440) {
                planetImage.width = image.naturalWidth;
            }
        };
    
       
        };
        updateImagesSize()
        window.addEventListener('resize',  updateImagesSize);
        // const screenWidth = window.innerWidth;
        // var image = new Image();
        // image.src = currentData.images.planet;
        
        surfaceImage.src = currentData.images.geology;
        surfaceImage.style.display = tabType === 'geology' ? 'block' : 'none';
       
            planetTitle.textContent =currentData.name;
            wikipediaSource.href = currentData[tabType].source;
            rotationTime.textContent = currentData.rotation;
            revolutionTime.textContent = currentData.revolution;
            radius.textContent = currentData.radius;
            averageTemp.textContent = currentData.temperature;

        
          
            function updateButtons() {
                const screenWidth = window.innerWidth ;
                if (screenWidth <= 767) {
                   
                    overview.style.borderBottom = tabType === 'overview' ? "4px solid " + currentData.color : '';
                    structure.style.borderBottom = tabType === 'structure' ? "4px solid " + currentData.color : '';
                    geology.style.borderBottom = tabType === 'geology' ? "4px solid " + currentData.color : '';
                  
                    overview.style.backgroundColor = '';
                    structure.style.backgroundColor = '';
                    geology.style.backgroundColor = '';
                } else if (screenWidth >= 768) {
                    // Code for larger screens
                    overview.style.borderBottom = '';
                    structure.style.borderBottom = '';
                    geology.style.borderBottom = '';
            
                    overview.style.backgroundColor = tabType === 'overview' ? currentData.color : '';
                    structure.style.backgroundColor = tabType === 'structure' ? currentData.color : '';
                    geology.style.backgroundColor = tabType === 'geology' ? currentData.color : '';
                    
                }
            }
            
           
            updateButtons();
            
            window.addEventListener('resize',  updateButtons);
           
            
    }

      updateContent('overview');


     
      const firstPlanet = planets[0];
      firstPlanet.click();

      for (let i = 0; i < planets.length; i++) {
        planets[i].addEventListener('click', () => {
          currentPlanetIndex = i;
          updateContent('overview');
        closeNav()
        });

      }

      overview.addEventListener('click', () => updateContent('overview'));
      structure.addEventListener('click', () => updateContent('structure'));
      geology.addEventListener('click', () => updateContent('geology'));
    });





//
//   overview.style.borderBottom = "none";
// } 


