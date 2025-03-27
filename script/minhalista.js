document.addEventListener('DOMContentLoaded', function() {
    carregarMinhalista();
});

function carregarMinhalista() {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    const containerGeral = document.querySelector('.container-geral');
    const container = document.getElementById('minhalista-container');

    
    // Clear container before appending
    container.innerHTML = "";

    favoritos.forEach(item => {
        const div = document.createElement('div');
        
        if (item.tipo === 'serie') {
            div.innerHTML = `<a href="exibicao-series.html?serie=${item.nome}"><img src="${item.url_capa}" alt="${item.nome}" loading="lazy" /></a>`;
        } else {
            div.innerHTML = `<a href="exibicao-filmes.html?filme=${item.nome}"><img src="${item.url_capa}" alt="${item.nome}" loading="lazy" /></a>`;
        }

        container.appendChild(div);
    });

    // Append the container to the main container once
    containerGeral.appendChild(container);
}
