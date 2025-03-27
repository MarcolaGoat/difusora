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
      const h2Geral = document.createElement('h2');
      h2Geral.textContent = categoria;

      const containerGeralCategoria = document.createElement('div');
      containerGeralCategoria.classList.add('container');

      seriesPorCategoria[categoria].forEach(serie => {
        const div = document.createElement('div');
        div.innerHTML = `<a href="exibicao-series.html?serie=${serie.nome}"> <img src="${serie.url_capa}" alt="${serie.nome}" loading="lazy" /> </a>`;
        containerGeralCategoria.appendChild(div);
      });

      containerGeral.appendChild(h2Geral);
      containerGeral.appendChild(containerGeralCategoria);
      
    });
  })
  .catch(error => {
    console.error('Erro ao carregar o arquivo JSON:', error);
  });
