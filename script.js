const btnEl = document.querySelector(".btn");
const closeEL = document.querySelector(".close");
const trailerContainer = document.querySelector(".trailer-conatiner"); 
const video = document.querySelector("video");

btnEl.addEventListener("click", () => {
    trailerContainer.classList.remove("active"); r
});

closeEL.addEventListener("click", () => {
    trailerContainer.classList.add("active"); 
    video.pause();
    video.currentTime = 0;
});