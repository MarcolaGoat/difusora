fetch('../jsons/series.json') 
    .then(response => response.json())
    .then(series => gerarCapasSeries(series)) 
    .catch(error => {
        console.error('Erro em carregar o arquivo JSON de séries:', error);
    });

function gerarCapasSeries(series) {

    series.map( (serie) => {
        const div = document.createElement('div');

        div.innerHTML = `
            <a href="exibicao-series.html?serie=${encodeURIComponent(serie.nome)}" style="text-decoration: none;">
            <img src="${serie.url_capa}" alt="${serie.nome}" loading="lazy" />
            </a>`;

        const container = document.querySelector(`#${serie.categoria.replace(/ /g, "-")}`)
        container.appendChild(div);

    })
}