document.getElementById('trustBtn').addEventListener('click', function () {
    const music = document.getElementById('music');
    document.getElementById('surprise').classList.remove('hidden');
    this.style.display = 'none';

    // Try playing music after user gesture
    music.play().catch(function(error) {
        console.log("Audio failed to play:", error);
    });
});

