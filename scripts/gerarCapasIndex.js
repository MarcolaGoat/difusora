fetch('../jsons/filmes.json') 
    .then(response => response.json())
    .then(dado => gerarCapas(dado)) 
    .catch(error => {
        console.error('Erro ao carregar o arquivo JSON de filmes:', error);
    });
    
fetch('../jsons/series.json') 
    .then(response => response.json())
    .then(dado => gerarCapas(dado)) 
    .catch(error => {
        console.error('Erro em carregar o arquivo JSON de séries:', error);
    });

function gerarCapas(item) {
    const containerSeries = document.querySelector('#series');
    const containerFilmes = document.querySelector('#filmes');
    for (let i = 0 ; i <= 7; i++) {
        let div = document.createElement('div');

        if ( item[i].temporadas ) {
            div.innerHTML = `
            <a href="exibicao-series.html?serie=${encodeURIComponent(item[i].nome)}" style="text-decoration: none;">
            <img src="${item[i].url_capa}" alt="${item[i].nome}" loading="lazy" />
            </a>`;

            containerSeries.appendChild(div);

        } else {
            div.innerHTML = `
            <a href="exibicao-filmes.html?filme=${encodeURIComponent(item[i].nome)}" style="text-decoration: none;">
            <img src="${item[i].url_capa}" alt="${item[i].nome}" loading="lazy" />
            </a>`;

            containerFilmes.appendChild(div);
        }

    }
}