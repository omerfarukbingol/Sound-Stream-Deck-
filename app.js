const soundsArray = document.querySelectorAll(".sound")
const body = document.querySelector("body");

soundsArray.forEach((sound) => {
    sound.addEventListener("mouseover", () => {
        let renk1 = Math.floor(Math.random() * 255);
        let renk2 = Math.floor(Math.random() * 255);
        let renk3 = Math.floor(Math.random() * 255);

        body.style.backgroundColor = "rgb(" + renk1 + "," + renk2 + "," + renk3 + ")";
    })
})

soundsArray.forEach((sound) => {
    sound.addEventListener("click", () => {
        let audio = document.getElementById(sound.textContent);
        audio.play();
    })
})
