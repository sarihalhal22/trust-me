document.getElementById("trustBtn").addEventListener("click", function () {
  const trustBtn = this;
  const loading = document.getElementById("loading");
  const surprise = document.getElementById("surprise");
  const music = document.getElementById("music");

  trustBtn.style.display = "none";
  loading.classList.remove("hidden");

  setTimeout(() => {
    loading.classList.add("hidden");
    surprise.classList.remove("hidden");

    // Change the source of audio to Rick Astley's Never Gonna Give You Up
    music.src =
      "https://cdn.jsdelivr.net/gh/iqasnimr/music-cdn@master/Rick_Astley_-_Never_Gonna_Give_You_Up.mp3";

    music.play().catch((e) => {
      console.log("Audio play blocked:", e);
    });
  }, 2500); // fake loading delay
});


