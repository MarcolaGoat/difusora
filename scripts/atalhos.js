document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
        (e.ctrlKey && e.key === 'u') ||
        (e.key === 'F12') ||
        (e.ctrlKey && e.shiftKey && e.key === 'C')) {
        e.preventDefault();
    }
});

function enterFullScreen() {
    const el = document.documentElement;
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    else if (el.mozRequestFullScreen) el.mozRequestFullScreen();
    else if (el.msRequestFullscreen) el.msRequestFullscreen();
}

function exitFullScreen() {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
    else if (document.msExitFullscreen) document.msExitFullscreen();
}

document.addEventListener("keydown", (e) => {
    // Ctrl + F para entrar em tela cheia
    if (e.ctrlKey && e.key.toLowerCase() === 'f') {
        e.preventDefault();
        enterFullScreen();
    }

    if (e.key === "Escape") {
        exitFullScreen();
    }
});
