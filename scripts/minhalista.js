document.addEventListener('DOMContentLoaded', function() {
    carregarMinhalista();
});

function carregarMinhalista() {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    const container = document.querySelector('.container');

    container.innerHTML = "";

    favoritos.forEach(item => {
        const div = document.createElement('div');
        
        if (item.tipo === 'filme') {
            div.innerHTML = `<a href="exibicao-filmes.html?filme=${item.nome}"><img src="${item.url_capa}" alt="${item.nome}" loading="lazy" /></a>`; 
        } else {
            div.innerHTML = `<a href="exibicao-series.html?serie=${item.nome}"><img src="${item.url_capa}" alt="${item.nome}" loading="lazy" /></a>`;
        }

        container.appendChild(div);
    });

}
