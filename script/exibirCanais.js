const categorias = {
    "Abertos": ["boborj", "sbt", "record", "band"],
    "de Noticias": ["globonews", "recordnews", "bandnews", "cnn"],
    "de Documentarios": ["animal", "discovery", "history"],
    "de Entretenimento": ["cinemax", "comedy", "hbo", "megapix", "space", "tntseries", "bbb"],
    "Infantil": ["cartoon", "gloob", "discoverykids", "nick", "disney"],
    "de Esportes": ["combate", "espn", "espn2", "premiere", "premiere2", "sportv", "sportv2", "nossofut", "tnt"]
  };


function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Função para definir o iframe com base no canal
function loadIframe(canal) {
    if (canal) {
        let iframeUrl = `<iframe name=Player "" src="//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=${canal}" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`; 
        document.getElementById('iframe-container').innerHTML = iframeUrl;
    } else {   iframeHtml = `<p>Canal não encontrado.</p>`;}

}

const canal = getParameterByName('canal');
if (canal) {
    loadIframe(canal);
} else {
    document.getElementById('iframe-container').innerText = 'Canal não encontrado.';
}
