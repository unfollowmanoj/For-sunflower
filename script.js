function toggleMusic() {
    const music = document.getElementById('bg-music');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

function reveal(button) {
    const imgContainer = document.getElementById('imageContainer');
    const imgDisplay = document.getElementById('imageDisplay');
    const imgSrc = button.getAttribute('data-img');
    if (imgSrc) {
        imgDisplay.src = imgSrc;
        imgContainer.style.display = 'block';
    }
}
