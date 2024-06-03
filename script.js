let text = document.lastModified; document.getElementById("lastupdate").innerHTML = text;

function message1(){
    alert('You Will Be Redirected To Email Sender Software')
}

function message2(){
    alert('The Form Had Been Successfully Reset')
}

function message3(){
    alert('The Score Mark Will Be Submitted Momentarily')
}

let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
    });
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
}

function moveSlides(n) {
    slideIndex += n;
    const slides = document.querySelectorAll('.slide');
    if (slideIndex > slides.length) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
    });
    slides[slideIndex - 1].style.display = 'block';
}

function autoSlide() {
    moveSlides(1);
    setTimeout(autoSlide, 5000); // Change image every 5 seconds
}

// Initialize the slider
showSlides();
setTimeout(autoSlide, 5000); // Start automatic sliding after 5 seconds
