const audrey = document.getElementById("audrey")

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/


document.addEventListener("scroll", function () {
    console.log("SCROLLLING")
    if (window.scrollY > 150) {
        audrey.style.width = window.scrollY/3 + "px";
    }
    if (window.scrollY > 400) {
        audrey.style.height = window.scrollY/4 + "px";
    }
})