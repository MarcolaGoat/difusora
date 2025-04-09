const lupa = document.getElementById('lupa');
const inputPesq = document.getElementById('input-pesq');

lupa.addEventListener('click', () => {

    if (inputPesq.style.display != "block") {
        inputPesq.style.display = "block";
    } else if (inputPesq.value.trim() != '')  {
        localStorage.setItem('pesquisaTexto', inputPesq.value);
        window.location.href = 'pesquisa.html';
    } else {
        inputPesq.style.display = "none";
    }
});

inputPesq.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        realizarPesquisa();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const paginaAtual = window.location.pathname;

    if (paginaAtual.includes('pesquisa')) {

        const pesq = localStorage.getItem('pesquisaTexto');
        const resultsDiv = document.getElementById('pesquisa-container');
    
        if (!pesq) {
            resultsDiv.innerText = 'Nenhum termo de pesquisa encontrado.';
            return;
        }
    
        resultsDiv.innerHTML = '';
    
        // Buscar e exibir resultados de séries
        fetch('../jsons/series.json') 
            .then(response => response.json())
            .then(data => loadResultSerie(pesq, data)) 
            .catch(error => {
                console.error('Erro ao carregar o arquivo JSON de séries:', error);
                resultsDiv.innerText = 'Erro ao carregar os dados das séries.';
            });
    
        // Buscar e exibir resultados de filmes
        fetch('../jsons/filmes.json') 
            .then(response => response.json())
            .then(data => loadResultFilme(pesq, data)) 
            .catch(error => {
                console.error('Erro ao carregar o arquivo JSON de filmes:', error);
                resultsDiv.innerText = 'Erro ao carregar os dados dos filmes.';
            });
       }
    });

    
    function loadResultSerie(serieNome, data) {
        const seriesEncontradas = data.filter(serie => serie.nome.toLowerCase().includes(serieNome.toLowerCase()));
        const resultsDiv = document.getElementById('pesquisa-container');
    
        if (seriesEncontradas.length > 0) {
            seriesEncontradas.forEach(serie => {
                const serieElement = document.createElement('div');
                
                serieElement.innerHTML = `
                    <a href="exibicao-series.html?serie=${encodeURIComponent(serie.nome)}" style="text-decoration: none;">
                        <img src="${serie.url_capa}" alt="${serie.nome}" loading="lazy" />
                        <h3>${serie.nome}</h3>
                    </a>`;
                resultsDiv.appendChild(serieElement);
            });
        } else {
            resultsDiv.innerText = 'Sem séries encontradas.';
        }
    }
    
    function loadResultFilme(filmeNome, data) {
        const filmesEncontrados = data.filter(filme => filme.nome.toLowerCase().includes(filmeNome.toLowerCase()));
        const resultsDiv = document.getElementById('pesquisa-container');
    
        if (filmesEncontrados.length > 0) {
            filmesEncontrados.forEach(filme => {
                const filmeElement = document.createElement('div');
                
                filmeElement.innerHTML = `
                    <a href="exibicao-filmes.html?filme=${encodeURIComponent(filme.nome)}" style="text-decoration: none;">
                        <img src="${filme.url_capa}" alt="${filme.nome}" loading="lazy" />
                        <h3>${filme.nome}</h3>
                    </a>`;
                resultsDiv.appendChild(filmeElement);
            });
        }
    
    }