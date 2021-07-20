console.log("fun");
//Get the button:
const mybutton = document.getElementById("myBtn");
const home = document.getElementById("home");
const nav = document.querySelector(".nav");
const dist = home.clientHeight - nav.clientHeight;
console.log(dist, home.clientHeight, nav.clientHeight);
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > dist || document.documentElement.scrollTop > dist) {
        mybutton.style.display = "block";
        nav.style.position = "absolute";
        console.log("fun");
    } else {
        mybutton.style.display = "none";
        nav.style.position = "fixed";
        console.log("fun");
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
console.log("fun");