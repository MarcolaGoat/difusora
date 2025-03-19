// Abrir e fechar menu no mobile
const cel = document.getElementById("cel");
const menuLateral = document.querySelector(".menu-lateral");
const fecharMenu = document.getElementById('fechar-menu');
const lupa = document.getElementById('pesquisa');
const input = document.getElementById('input-pesq');

cel.addEventListener("click", function() {
    menuLateral.style.display = "flex";
});

fecharMenu.addEventListener("click", function() {
    menuLateral.style.display = "none";
});

lupa.addEventListener("click", function(){
realizarPesquisa();
});

// ALGORITMO PARA PESQUISAS

const pesqText = document.getElementById('input-pesq');

function realizarPesquisa() {
    localStorage.setItem('pesquisaTexto', pesqText.value);
    
    window.location.href = 'pesquisa.html';
}

document.addEventListener('DOMContentLoaded', function() {
    const pesq = localStorage.getItem('pesquisaTexto'); // Recupera o termo de pesquisa do localStorage
    const resultsDiv = document.getElementById('results'); // Onde os resultados serão exibidos

    if (!pesq) {
        resultsDiv.innerText = 'Nenhum termo de pesquisa encontrado.';
        return;
    }

    // Limpa os resultados anteriores
    resultsDiv.innerHTML = '';

    // Buscar e exibir resultados de séries
    fetch('../json/series-info.json') 
        .then(response => response.json())
        .then(data => loadResultSerie(pesq, data)) 
        .catch(error => {
            console.error('Erro ao carregar o arquivo JSON de séries:', error);
            resultsDiv.innerText = 'Erro ao carregar os dados das séries.';
        });

    // Buscar e exibir resultados de filmes
    fetch('../json/filmes.json') 
        .then(response => response.json())
        .then(data => loadResultFilme(pesq, data)) 
        .catch(error => {
            console.error('Erro ao carregar o arquivo JSON de filmes:', error);
            resultsDiv.innerText = 'Erro ao carregar os dados dos filmes.';
        });
});

// Função para exibir as séries encontradas
function loadResultSerie(serieNome, data) {
    const seriesEncontradas = data.filter(serie => serie.nome.toLowerCase().includes(serieNome.toLowerCase()));
    const resultsDiv = document.getElementById('results');

    if (seriesEncontradas.length > 0) {
        seriesEncontradas.forEach(serie => {
            const serieElement = document.createElement('div');
            serieElement.classList.add('serie-item');
            
            serieElement.innerHTML = `
                <a href="series-exibicao.html?serie=${encodeURIComponent(serie.nome)}" style="text-decoration: none;">
                    <img src="${serie.url_capa}" alt="${serie.nome}" loading="lazy" />
                    <h3>${serie.nome}</h3>
                </a>
            `;
            resultsDiv.appendChild(serieElement);
        });
    } else {
        resultsDiv.innerText = 'Sem resultados encontrados em filmes ou séries.';
    }
}

// Função para exibir os filmes encontrados
function loadResultFilme(filmeNome, data) {
    const filmesEncontrados = data.filter(filme => filme.nome.toLowerCase().includes(filmeNome.toLowerCase()));
    const resultsDiv = document.getElementById('results');

    if (filmesEncontrados.length > 0) {
        filmesEncontrados.forEach(filme => {
            const filmeElement = document.createElement('div');
            filmeElement.classList.add('filme-item');
            
            filmeElement.innerHTML = `
                <a href="filmes-exibicao.html?filme=${encodeURIComponent(filme.nome)}" style="text-decoration: none;">
                    <img src="${filme.url_capa}" alt="${filme.nome}" loading="lazy" />
                    <h3>${filme.nome}</h3>
                </a>
            `;
            resultsDiv.appendChild(filmeElement);
        });
    } 
}
