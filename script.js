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

    // Play audio and catch any errors (most browsers require user interaction)
    music.play().catch((error) => {
      console.warn("Audio play prevented:", error);
    });
  }, 2500);
});



