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

const faders = document.querySelectorAll(".fader");
const appearOptions = {
    threshold: 0,
    rootMargin: '0px -50px 0px 0px',
};

const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            entry.target.classList.remove("appear");
        } else {
            entry.target.classList.add("appear");
        }
    });
},
    appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});