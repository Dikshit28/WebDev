//Get the button:
const mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };
console.log(document.getElementById("home").clientHeight);
function scrollFunction() {
    if (document.body.scrollTop > (document.getElementById("home").clientHeight) / 2 || document.documentElement.scrollTop > (document.getElementById("home").clientHeight) / 2) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}