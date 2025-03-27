fetch('../jsons/series-info.json')
  .then(response => response.json())  
  .then(data => {
    const containerGeral = document.querySelector('.container-geral');

    const seriesPorCategoria = data.reduce((acc, serie) => {
      if (!acc[serie.categoria]) {
        acc[serie.categoria] = [];
      }
      acc[serie.categoria].push(serie);
      return acc;
    }, {});

    Object.keys(seriesPorCategoria).forEach(categoria => {
      const h2 = document.createElement('h2');
      h2.textContent =  categoria;

      const container = document.createElement('div');
      container.classList.add('container');

      seriesPorCategoria[categoria].forEach(serie => {
        const div = document.createElement('div');
        div.innerHTML = `<a href="exibicao-series.html?serie=${serie.nome}"> <img src="${serie.url_capa}" alt="${serie.nome}" loading="lazy" /> </a>`;
        container.appendChild(div);
      });

      containerGeral.appendChild(h2);
      containerGeral.appendChild(container);
    });
  })
  .catch(error => {
    console.error('Erro ao carregar o arquivo JSON:', error);
  });
