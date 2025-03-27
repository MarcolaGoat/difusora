fetch('../jsons/filmes.json')
  .then(response => response.json())  
  .then(data => {
    const containerGeral = document.querySelector('.container-geral');

    const filmesPorCategoria = data.reduce((acc, filme) => {
      if (!acc[filme.categoria]) {
        acc[filme.categoria] = [];
      }
      acc[filme.categoria].push(filme);
      return acc;
    }, {});

    Object.keys(filmesPorCategoria).forEach(categoria => {
      const h2Geral = document.createElement('h2');
      h2Geral.textContent = 'Filmes de ' + categoria;

      const containerGeralCategoria = document.createElement('div');
      containerGeralCategoria.classList.add('container');

      filmesPorCategoria[categoria].forEach(filme => {
        const div = document.createElement('div');
        div.innerHTML = `<a href="exibicao-filmes.html?filme=${filme.nome}"> <img src="${filme.url_capa}" alt="${filme.nome}" loading="lazy" /> </a>`;
        containerGeralCategoria.appendChild(div);
      });

      containerGeral.appendChild(h2Geral);
      containerGeral.appendChild(containerGeralCategoria);

    });
  })
  .catch(error => {
    console.error('Erro ao carregar o arquivo JSON:', error);
  });

