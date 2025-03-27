let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

const containerGeral = document.querySelector('.container-geral');

favoritos.forEach(item => {
    const container = document.getElementById('minhalista-container');
    container.classList.add('container');

    const div = document.createElement('div');

    if (item.tipo == 'serie') {
        div.innerHTML = `<a href="exibicao-series.html?serie=${item.nome}"><img src="${item.url_capa}" alt="${item.nome}" loading="lazy" /></a>`;
        container.appendChild(div);
    } else{
        div.innerHTML = `<a href="exibicao-filmes.html?filme=${item.nome}"><img src="${item.url_capa}" alt="${item.nome}" loading="lazy" /></a>`;
        container.appendChild(div);
    }

    containerGeral.appendChild(container);
});