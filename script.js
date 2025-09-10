function collapseNavbar() {
  var navbarCollapse = document.getElementById('navbarSupportedContent');
  navbarCollapse.classList.remove('show');
}

function showBio() {
  document.getElementById("bio-section").style.display = "block";
  document.getElementById("hobbies-section").style.display = "none";
  document.getElementById("portfolio-section").style.display = "none";
  document.getElementById("photos-section").style.display = "none";
  document.getElementById("videos-section").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.querySelector("footer").style.display = "none";
}

function showHobbies() {
  document.getElementById("bio-section").style.display = "none";
  document.getElementById("hobbies-section").style.display = "block";
  document.getElementById("portfolio-section").style.display = "none";
  document.getElementById("photos-section").style.display = "none";
  document.getElementById("videos-section").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.querySelector("footer").style.display = "none";
}

function showPhotos() {
  document.getElementById("bio-section").style.display = "none";
  document.getElementById("hobbies-section").style.display = "none";
  document.getElementById("portfolio-section").style.display = "none";
  document.getElementById("photos-section").style.display = "block";
  document.getElementById("videos-section").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.querySelector("footer").style.display = "none";
}

function showVideos() {
  document.getElementById("bio-section").style.display = "none";
  document.getElementById("hobbies-section").style.display = "none";
  document.getElementById("portfolio-section").style.display = "none";
  document.getElementById("photos-section").style.display = "none";
  document.getElementById("videos-section").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.querySelector("footer").style.display = "none";
}

function showHome() {
  document.getElementById("bio-section").style.display = "none";
  document.getElementById("hobbies-section").style.display = "none";
  document.getElementById("portfolio-section").style.display = "none";
  document.getElementById("photos-section").style.display = "none";
  document.getElementById("videos-section").style.display = "none";
  document.getElementById("home").style.display = "block";
  document.querySelector("footer").style.display = "block";
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


function showPort() {
  document.getElementById("bio-section").style.display = "none";
  document.getElementById("hobbies-section").style.display = "none";
  document.getElementById("photos-section").style.display = "none";
  document.getElementById("videos-section").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.querySelector("footer").style.display = "none";
  
  setTimeout(function() {
    document.getElementById("portfolio-section").style.display = "block";
    var portfolioSection = document.getElementById("portfolio-section");
    var offset = portfolioSection.offsetTop - 200; 
    window.scrollTo({ top: offset, behavior: 'smooth' });
  }, 200);
}


// back functions in Gallery Sections 
if (localStorage.getItem('showpfolder') === 'true') {
  showPhotos();
  localStorage.removeItem('showpfolder');
}

if (localStorage.getItem('showvfolder') === 'true') {
  showVideos();
  localStorage.removeItem('showvfolder');
}


// back functions in Portfolio Sections 
if (localStorage.getItem('showport') === 'true') {
  showPort();
  localStorage.removeItem('showport');
}