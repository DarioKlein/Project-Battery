const playSound = (sound) => {
  const audioElement = document.querySelector("#s_key" + sound)
  if (audioElement) {
    audioElement.currentTime = 0
    audioElement.play()
    document
      .querySelector(`div[data-key="key${sound}"]`)
      .classList.add("active")
    setTimeout(() => {
      document
        .querySelector(`div[data-key="key${sound}"]`)
        .classList.remove("active")
    }, 250)
  }
}

const playMusic = (songArray) => {
  let wait = 0
  songArray.forEach((element) => {
    setTimeout(() => {
      playSound(element)
    }, wait)
    wait += 250
  })
}

window.addEventListener("keydown", (event) => {
  playSound(event.key)
})

document.querySelector("button").addEventListener("click", () => {
  const composer = document.querySelector("#input").value
  const keysComposer = composer.split("")
  if (keysComposer !== "") {
    playMusic(keysComposer)
  }
  document.querySelector("#input").value = ""
})
