function tileChangeP() {
  var tile1 = document.getElementById("tile1");
  var tile2 = document.getElementById("tile2");
  var x = window.matchMedia("(min-width: 700px)");
  var y = window.matchMedia("(max-width: 700px)");
  if (x.matches) {
    // If media query matches
    tile1.style.display = "flex";
    tile2.style.display = "none";
  }
  if (y.matches) {
    // If media query matches
    tile1.style.display = "block";
    tile2.style.display = "none";
  }
}
function tileChangeN() {
  var tile1 = document.getElementById("tile1");
  var tile2 = document.getElementById("tile2");
  var x = window.matchMedia("(min-width: 700px)");
  var y = window.matchMedia("(max-width: 700px)");
  if (x.matches) {
    // If media query matches
    tile1.style.display = "none";
    tile2.style.display = "flex";
  }
  if (y.matches) {
    // If media query matches
    tile1.style.display = "none";
    tile2.style.display = "block";
  }
}

/*var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}*/
