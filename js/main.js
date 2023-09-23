const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

var mainVideo = document.getElementById("mainVideo");
var source = document.createElement("source");

source.setAttribute("src", "./assets/start.mp4");
source.setAttribute("type", "video/mp4")

mainVideo.appendChild(source);
mainVideo.play();
console.log({
    src: source.getAttribute("src"),
    type: source.getAttribute("type"),
});

button1.addEventListener("click", () => {
    // mainVideo.
})