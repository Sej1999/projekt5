console.log('core.js is working!');

var slideCount = 0;


//function currentImg(n) {
//    showSlides(slideIndex = 1)
//}

showSlides();
function showSlides() {
    var count;
    var slides = document.getElementsByClassName("slideImg");

    for (count = 0; count < slides.length; count++) {
        slides[count].style.display = "none";
    }

slideCount++;

if (slideCount > slides.length) {slideCount = 1}

slides[slideCount-1].style.display = "block";
setTimeout(showSlides, 12000);
}