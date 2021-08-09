// Grab button
let myButton = document.getElementById("scroll-top");

// Show button on scroll, 20px from top
window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    }
    else {
        myButton.style.display = "none";
    }
}

// On click send to top
myButton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}