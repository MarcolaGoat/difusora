fetch('../jsons/filmes.json') 
    .then(response => response.json())
    .then(filmes => gerarCapasSeries(filmes)) 
    .catch(error => {
        console.error('Erro em carregar o arquivo JSON de filmes:', error);
    });

function gerarCapasSeries(filmes) {

    filmes.map( (filme) => {
        const div = document.createElement('div');
    
        div.innerHTML = `
            <a href="exibicao-filmes.html?filme=${encodeURIComponent(filme.nome)}" style="text-decoration: none;">
            <img src="${filme.url_capa}" alt="${filme.nome}" loading="lazy" />
            </a>`;
            
        let container = document.querySelector(`#filmes-${filme.categoria.replace(' ', '')}`)
        container.appendChild(div);
        
        })
}

