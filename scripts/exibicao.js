function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Função para definir o iframe com base no canal
function loadIframe(canal) {
    let iframeUrl = '';

    switch (canal) {
        case 'globo':
            iframeUrl = `<iframe name=Player "" src="//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=boborj" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`; 
            break;

        case 'sbt':
            iframeUrl = `<iframe name=Player "" src="//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=sbt" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`
            break;

        case 'record':
            iframeUrl = `<iframe name=Player "" src="//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=record" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`;
            break;

        case 'band':
            iframeUrl = `<iframe name=Player "" src="//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=band" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>` ; 
            break;

        case 'globonews':
            iframeUrl = `<iframe name=Player "" src="//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=globonews" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`;
            break;

        case 'recordnews':
            iframeUrl = `<iframe name=Player "" src="//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=recordnews" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`
            break;

        case 'bandnews':
            iframeUrl = `<iframe name=Player "" src="//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=bandnews" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>` ; 
            break;

        case 'cnn':
            iframeUrl = `<iframe name=Player "" src="//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=cnnbrasil" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`;
            break;

        case 'animal':
            iframeUrl = `<iframe name=Player "" src="//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=animalplanet" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`; 
            break;

        case 'discovery':
            iframeUrl = `<iframe name=Player "" src="//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=discovery" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`;
            break;

        case 'history':
            iframeUrl = `<iframe name=Player "" src="//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=history" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`; 
            break;

        case 'cinemax':
            iframeUrl = `<iframe name=Player "" src="//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=cinemax" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`;
            break;

        case 'comedy':
            iframeUrl = `<iframe name=Player "" src="//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=comedycentral" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`; 
            break;

        case 'hbo':
            iframeUrl = `<iframe name=Player "" src="//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=hbo" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`;
            break;

        case 'megapix':
            iframeUrl = `<iframe name=Player "" src="//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=megapix" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`; 
            break;

        case 'space':
            iframeUrl = `<iframe name=Player "" src="//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=space" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`;
            break;

        case 'tntseries':
            iframeUrl = `<iframe name=Player "" src="//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=tntseries" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`; 
            break;

        case 'cartoon':
            iframeUrl = `<iframe name=Player "" src="//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=cartoon" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`;
            break;

        case 'discoverykids':
            iframeUrl = `<iframe name=Player "" src="//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=discoverykids" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>` ; 
            break;

        case 'disney':
            iframeUrl = `<iframe name=Player "" src="//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=disney" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`;
            break;

        case 'gloob':
            iframeUrl = `<iframe name=Player "" src="//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=gloob" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`; 
            break;

        case 'nick':
            iframeUrl = `<iframe name=Player "" src="//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=nick" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`;
            break;

            case 'combate':
            iframeUrl = `<iframe name=Player "" src="//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=combate" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`; 
            break;

        case 'espn':
            iframeUrl = `<iframe name=Player "" src="//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=espn" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`;
            break;

        case 'espn2':
            iframeUrl = `<iframe name=Player "" src="//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=espn2" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`; 
            break;

        case 'premiere':
            iframeUrl = `<iframe name=Player "" src="//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=premiereclubes" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`;
            break;

        case 'premiere2':
            iframeUrl = `<iframe name=Player "" src="//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=premiere2" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`; 
            break;

        case 'sportv':
            iframeUrl = `<iframe name=Player "" src="//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=sportv1" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`;
            break;

        case 'sportv2':
            iframeUrl = `<iframe name=Player "" src="//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=sportv2" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`; 
            break;

        case 'nossofut':
            iframeUrl = `<iframe name=Player "" src="//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=nossofutebol" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`;
            break;

        case 'tnt':
            iframeUrl = `<iframe name=Player "" src="//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=tnt" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`;
            break;

        case 'bbb':
            iframeUrl = `<iframe name=Player "" src="//%72%65%64%65%63%61%6E%61%69%73%74%76%2E%70%73/player3/ch.php?canal=bbb25a" frameborder=0 height=400 scrolling=no width=640 allow="encrypted-media" allowFullScreen> </iframe>`;
            break;

        case 'bbb20':
            iframeUrl = ``;
            break;

        default:
            iframeHtml = `<p>Canal não encontrado.</p>`; // Caso o canal não seja encontrado
            break;
    }

    // Adiciona o iframe gerado no contêiner
    document.getElementById('iframe-container').innerHTML = iframeUrl;
}

// Pega o canal da URL e carrega o iframe
const canal = getParameterByName('canal');
if (canal) {
    loadIframe(canal);
} else {
    document.getElementById('iframe-container').innerText = 'Canal não encontrado.';
}
