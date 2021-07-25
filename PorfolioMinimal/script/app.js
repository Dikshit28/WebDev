//Get the button:
const mybutton = document.getElementById("myBtn");
const home = document.querySelector(".home");
const nav = document.querySelector(".nav");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > home.clientHeight || document.documentElement.scrollTop > home.clientHeight) {
        mybutton.style.display = "block";
        nav.style.position = "absolute";
        console.log("button show");
    } else {
        mybutton.style.display = "none";
        nav.style.position = "fixed";
        console.log("button gone");
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// SLIDER
const cards = document.querySelectorAll(".card");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
let i = 1;
console.log(cards, next, prev);
function slider(button) {
    if (button === "next") {
        if (i === 1) {
            cards[2].classList.remove("viewer-r");
            cards[3].classList.remove("viewer-l");
            cards[0].classList.add("viewer-r");
            cards[1].classList.add("viewer-l");
            i = 3;
        }
        else {
            cards[2].classList.add("viewer-r");
            cards[3].classList.add("viewer-l");
            cards[0].classList.remove("viewer-r");
            cards[1].classList.remove("viewer-l");
            i = 1;
        }
    }
    else if (button === "prev") {
        if (i === 3) {
            cards[2].classList.add("viewer-r");
            cards[3].classList.add("viewer-l");
            cards[0].classList.remove("viewer-r");
            cards[1].classList.remove("viewer-l");
            i = 1;
        }
        else {
            cards[2].classList.remove("viewer-r");
            cards[3].classList.remove("viewer-l");
            cards[0].classList.add("viewer-r");
            cards[1].classList.add("viewer-l");
            i = 3;
        }
    }
}