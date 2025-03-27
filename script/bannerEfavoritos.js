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

    const paginaAtual = window.location.pathname;

    if (paginaAtual.includes('filmes.html')) {
        numero = Math.floor(Math.random() * 10); 
    } else if (paginaAtual.includes('series.html')) {
        numero = Math.floor(Math.random() * (19 - 10 + 1)) + 10;
    } else {
        numero = Math.floor(Math.random() * bannersJson.length);
    }

    const banner = document.getElementById('banner-main');
    const titulo = document.getElementById('titulo');
    const descricao = document.getElementById('descricao');
    const but = document.getElementById('assistir');
    const adc = document.getElementById('adc');
    const filmeSerie = bannersJson[numero];

    banner.src = filmeSerie.src;
    titulo.innerText = filmeSerie.nome.replace(/-/g, ' ');
    descricao.textContent = filmeSerie.descricao;

    if (filmeSerie.tipo === 'filme') {
        but.href = `exibicao-filmes.html?filme=${filmeSerie.nome}`;
    } else {
        but.href = `exibicao-series.html?serie=${filmeSerie.nome}`;
    }

    const itemExiste = verifiarFavorito(filmeSerie);
    if (itemExiste) {
        adc.textContent = "X";
        adc.title = 'Remover da Minha lista';
    } else {
        adc.textContent = "+";
        adc.title = 'Adicionar na Minha lista';
    }

    adc.addEventListener('click', function() {
        gerirFavorito(filmeSerie, adc);
    });
}

function gerirFavorito(filmeSerie, adc) {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const itemExiste = verifiarFavorito(filmeSerie);
    const index = favoritos.findIndex(item => item.nome === filmeSerie.nome);

    if (itemExiste) {
        favoritos.splice(index, 1); 
        adc.textContent = "+";
        adc.title = 'Adicionar na Minha lista';
    } else {
        favoritos.push(filmeSerie); 
        adc.textContent = 'X';
        adc.title = 'Remover da Minha lista';
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

function verifiarFavorito(filmeSerie) {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const index = favoritos.findIndex(item => item.nome === filmeSerie.nome);
    return index !== -1; 
}
