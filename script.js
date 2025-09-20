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
    var offset = portfolioSection.offsetTop - 100; 
    window.scrollTo({ top: offset, behavior: 'smooth' });
  }, 100);
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


///////////////////////////////////////////////// FOR MOBILE TARGET ////////////////////////////////////////////////////////

// back for edu
  window.addEventListener('load', () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('scroll') === 'edu' && window.matchMedia('(max-width: 375px) and (orientation: portrait)').matches) {
    window.scrollBy({ top: 650, behavior: 'smooth' });
  }
});

// back for bpo
window.addEventListener('load', () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('scroll') === 'bpo' && window.matchMedia('(max-width: 375px) and (orientation: portrait)').matches) {
    window.scrollBy({ top: 1265, behavior: 'smooth' }); // adjust the top value as needed
  }
});

// back for remotask
window.addEventListener('load', () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('scroll') === 'oj' && window.matchMedia('(max-width: 375px) and (orientation: portrait)').matches) {
    window.scrollBy({ top: 1900, behavior: 'smooth' }); // adjust the top value as needed
  }
});

// back for ingenuiti
window.addEventListener('load', () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('scroll') === 'ing' && window.matchMedia('(max-width: 375px) and (orientation: portrait)').matches) {
    window.scrollBy({ top: 2500, behavior: 'smooth' }); // adjust the top value as needed
  }
});

// back for piggery
window.addEventListener('load', () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('scroll') === 'pig' && window.matchMedia('(max-width: 375px) and (orientation: portrait)').matches) {
    window.scrollBy({ top: 3100, behavior: 'smooth' }); // adjust the top value as needed
  }
});


///////////////////////////////////////////////// FOR TABLET TARGET ////////////////////////////////////////////////////////

// back for edu
  window.addEventListener('load', () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('scroll') === 'edu' && window.matchMedia('(min-width: 376px) and (max-width: 768px) and (orientation: portrait)').matches) {
    window.scrollBy({ top: 450, behavior: 'smooth' });
  }
});

// back for bpo
window.addEventListener('load', () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('scroll') === 'bpo' && window.matchMedia('(min-width: 376px) and (max-width: 768px) and (orientation: portrait)').matches) {
    window.scrollBy({ top: 980, behavior: 'smooth' }); // adjust the top value as needed
  }
});

// back for remotask
window.addEventListener('load', () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('scroll') === 'oj' && window.matchMedia('(min-width: 376px) and (max-width: 768px) and (orientation: portrait)').matches) {
    window.scrollBy({ top: 1450, behavior: 'smooth' }); // adjust the top value as needed
  }
});

// back for ingenuiti
window.addEventListener('load', () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('scroll') === 'ing' && window.matchMedia('(min-width: 376px) and (max-width: 768px) and (orientation: portrait)').matches) {
    window.scrollBy({ top: 2050, behavior: 'smooth' }); // adjust the top value as needed
  }
});

// back for piggery
window.addEventListener('load', () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('scroll') === 'pig' && window.matchMedia('(min-width: 376px) and (max-width: 768px) and (orientation: portrait)').matches) {
    window.scrollBy({ top: 2600, behavior: 'smooth' }); // adjust the top value as needed
  }
});