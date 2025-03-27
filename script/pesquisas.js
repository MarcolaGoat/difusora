const pesqText = document.getElementById('input-pesq');

const lupa = document.getElementById('lupa');

lupa.addEventListener("click", function(){
    realizarPesquisa();
    });
    
document.getElementById('input-pesq').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            realizarPesquisa();
        }
    });

function realizarPesquisa() {
    if (pesqText.style.display == 'none') {
        pesqText.style.display = 'inline-block';
      } else if (pesqText.value.trim() == "") {
        pesqText.style.display = 'none';
      } else {
        localStorage.setItem('pesquisaTexto', pesqText.value);
    
        window.location.href = 'pesquisa.html';
      }
      //================================================

    
}

const paginaAtual = window.location.pathname;

    if (paginaAtual.includes('pesquisa.html')) {

        document.addEventListener('DOMContentLoaded', function() {
            const pesq = localStorage.getItem('pesquisaTexto'); // Recupera o termo de pesquisa do localStorage
            const resultsDiv = document.getElementById('pesquisa-container'); // Onde os resultados serão exibidos
        
            if (!pesq) {
                resultsDiv.innerText = 'Nenhum termo de pesquisa encontrado.';
                return;
            }
        
            // Limpa os resultados anteriores
            resultsDiv.innerHTML = '';
        
            // Buscar e exibir resultados de séries
            fetch('../jsons/series-info.json') 
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
        });
        
        // Função para exibir as séries encontradas
        function loadResultSerie(serieNome, data) {
            const seriesEncontradas = data.filter(serie => serie.nome.toLowerCase().includes(serieNome.toLowerCase()));
            const resultsDiv = document.getElementById('pesquisa-container');
        
            if (seriesEncontradas.length > 0) {
                seriesEncontradas.forEach(serie => {
                    const serieElement = document.createElement('div');
                    serieElement.classList.add('serie-item');
                    
                    serieElement.innerHTML = `
                        <a href="exibicao-series.html?serie=${encodeURIComponent(serie.nome)}" style="text-decoration: none;">
                            <img src="${serie.url_capa}" alt="${serie.nome}" loading="lazy" />
                            <h3>${serie.nome}</h3>
                        </a>
                    `;
                    resultsDiv.appendChild(serieElement);
                });
            } else {
                resultsDiv.innerText = 'Sem séries encontradas.';
            }
        }
        
        // Função para exibir os filmes encontrados
        function loadResultFilme(filmeNome, data) {
            const filmesEncontrados = data.filter(filme => filme.nome.toLowerCase().includes(filmeNome.toLowerCase()));
            const resultsDiv = document.getElementById('pesquisa-container');
        
            if (filmesEncontrados.length > 0) {
                filmesEncontrados.forEach(filme => {
                    const filmeElement = document.createElement('div');
                    filmeElement.classList.add('filme-item');
                    
                    filmeElement.innerHTML = `
                        <a href="exibicao-filmes.html?filme=${encodeURIComponent(filme.nome)}" style="text-decoration: none;">
                            <img src="${filme.url_capa}" alt="${filme.nome}" loading="lazy" />
                            <h3>${filme.nome}</h3>
                        </a>
                    `;
                    resultsDiv.appendChild(filmeElement);
                });
            } 
        
        }
        
    }