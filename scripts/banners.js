const paginaAtual = window.location.pathname;

fetch('../jsons/banners.json')
  .then(response => response.json())
  .then(data => {
    gerarBanner(data);
  })
  .catch(error => {
    console.error('Erro ao carregar o arquivo JSON:', error);
  }); 

function gerarBanner(bannersJson) {
    let numero;

    if (paginaAtual.includes('filmes')) {
        numero = Math.floor(Math.random() * 10); 
    } else if (paginaAtual.includes('series')) {
        numero = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    } else {
        numero = Math.floor(Math.random() * bannersJson.length);
    }

    const banner = document.querySelector('#banner');
    const titulo = document.querySelector('#titulo');
    const sinopse = document.querySelector('#sinopse');
    const adc = document.querySelector('#adc');
    const but = document.querySelector('#assistir');
    const filmeSerie = bannersJson[numero];

    banner.src = filmeSerie.src;
    titulo.innerText = filmeSerie.nome.replace(/-/g, ' ');
    sinopse.textContent = filmeSerie.descricao;

    if (filmeSerie.tipo === 'filme') {
        but.href = `exibicao-filmes.html?filme=${filmeSerie.nome}`;
    } else {
        but.href = `exibicao-series.html?serie=${filmeSerie.nome}`;
    }

    verifiarFavorito(filmeSerie)

    adc.addEventListener('click', function() {
        gerirFavorito(filmeSerie);
    });
}

function gerirFavorito(filmeSerie) {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const itemExiste = verifiarFavorito(filmeSerie);
    const index = favoritos.findIndex(item => item.nome === filmeSerie.nome);

    if (itemExiste) {
        favoritos.splice(index, 1); 
        adc.textContent = "+";
        adc.title = 'Adicionar na Minha lista';
    } else {
        favoritos.push(filmeSerie); 
        adc.textContent = "×";
        adc.title = 'Remover da Minha lista';
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

function verifiarFavorito(filmeSerie) { 
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    const elem = favoritos.find(item => item.nome == filmeSerie.nome);
    if (elem) {
        adc.textContent = "×";
        adc.title = 'Remover da Minha lista';
        return true;
    } else {
        adc.textContent = "+";
        adc.title = 'Adicionar na Minha lista';
        return false;
    }
}