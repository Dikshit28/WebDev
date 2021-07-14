const opener = document.getElementById("open");
const icon = document.getElementById("collapser");
const buttons = document.querySelectorAll(".but");
opener.addEventListener("click", function () {
    console.log("clicked");
    if (icon.classList.contains("fa-times")) {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        opener.classList.add("act");
        buttons.forEach(function (button) {
            button.style.transform = "scaleY(0)";
            button.style.visibility = "hidden"
        });
    }
    else {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");


        buttons.forEach(function (button) {
            button.style.transform = "scaleY(1)";
            button.style.visibility = "visible";
        });
    }
})