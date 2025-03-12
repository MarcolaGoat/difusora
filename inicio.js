document.getElementById("playSbt").addEventListener("click", function() {
    const iframe = document.getElementById('sbt');

    // Exibir o iframe
    iframe.style.display = 'block';
    iframe.src = iframe.src.replace("&mute=1", "");

    // Colocar o iframe em tela cheia
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) { // Firefox
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari, Opera
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { // IE/Edge
        iframe.msRequestFullscreen();
    }
});

document.getElementById("playRecordnews").addEventListener("click", function() {
    const iframe = document.getElementById('recordnews');

    // Exibir o iframe
    iframe.style.display = 'block';
    iframe.src = iframe.src.replace("&mute=1", "");

    // Colocar o iframe em tela cheia
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) { // Firefox
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari, Opera
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { // IE/Edge
        iframe.msRequestFullscreen();
    }
});

