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

    // Ensure audio plays after user gesture
    music.muted = false;
    music.play().catch((error) => {
      console.warn("Audio play prevented:", error);
      alert("Tap the screen again to hear the music 🎵");
    });
  }, 2500);
});
