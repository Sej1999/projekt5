console.log('core.js is working!');
//Slide
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

//Overlay
//The code is inspired by w3school; https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_popup_chat
function openFormEnsom() {
    document.getElementById("myFormEnsom").style.display = "block";
    //document.getElementById("background-opacity").style.display = "block";
}

function closeFormEnsom() {
    document.getElementById("myFormEnsom").style.display = "none";
    //document.getElementById("background-opacity").style.display = "none";
}
// **********************************************************************************************************************
function openFormSygdom() {
    document.getElementById("myFormSygdom").style.display = "block";
}

function closeFormSygdom() {
    document.getElementById("myFormSygdom").style.display = "none";
}