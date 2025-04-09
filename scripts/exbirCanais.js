function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Função para definir o iframe com base no canal
function loadIframe(canal) {
    if (canal) {                                      
        let iframeUrl = `<iframe name=Player "" src="//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%67%73/player3/ch.php?canal=${canal}" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`; 
        document.querySelector('.containar-do-iframe').innerHTML = iframeUrl;
    } else {   iframeHtml = `<p>Canal não encontrado.</p>`;}

}

const canal = getParameterByName('canal');
if (canal) {
    loadIframe(canal);
} else {
    document.querySelector('.containar-do-iframe').innerText = 'Canal não encontrado.';
}