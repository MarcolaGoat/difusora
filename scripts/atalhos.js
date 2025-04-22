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



// Abrir e fechar menu lateral, div relatar erros e div fazer pedidos

const menu = document.querySelector('.menu-icone');
const fundomenu = document.querySelector('.fundo-menu');
const sidebar = document.querySelector('.sidebar');
const relatErros = document.querySelector('#relat-erros');
const fazPedidos = document.querySelector('#faz-pedidos');
const fecharIcone = document.querySelector('#fechar-icone');
const fecharErros = document.querySelector('#fechar-div-erros');
const fecharPedidos = document.querySelector('#fechar-div-pedidos');
const janela = document.body;
const divErros = document.querySelector('#div-erros');
const divPedidos = document.querySelector('#div-pedidos');

menu.addEventListener('click', () => {
        sidebar.style.display = 'block';
        fundomenu.style.display = 'block';
        janela.style.overflow = 'hidden';
        sidebar.classList.remove('fechar');
        sidebar.classList.add('abrir');
})

fundomenu.addEventListener('click', () => {fecharTudo()})
fecharIcone.addEventListener('click', () => {fecharTudo()})

relatErros.addEventListener('click', () => {abrirDiv(divErros)})
fazPedidos.addEventListener('click', () => {abrirDiv(divPedidos)})

fecharErros.addEventListener('click', () => {fecharDiv(divErros)})
fecharPedidos.addEventListener('click', () => {fecharDiv(divPedidos)})

function fecharTudo() {
    sidebar.classList.remove('abrir');
    sidebar.classList.add('fechar');
      setTimeout(() => {
      sidebar.style.display = 'none';
      }, 600);

    fundomenu.style.display = 'none';
    divErros.style.display = 'none';
    divPedidos.style.display = 'none';
    janela.style.overflow = 'auto';
}

function abrirDiv(div) {
    div.style.display = 'block';
    sidebar.style.display = 'none';
    fundomenu.style.display = 'block';
}

function fecharDiv(div) {
    div.style.display = 'none';
    fundomenu.style.display = 'none';
    janela.style.overflow = 'auto';
}

// Relatar Erros
const btnErros = document.querySelector('#relatar');
btnErros.addEventListener('click', () => {abrirDiv(divErros)})