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

    // Criar a estrutura para cada categoria
    Object.keys(filmesPorCategoria).forEach(categoria => {
      const h2 = document.createElement('h2');
      h2.textContent = 'Filmes de ' + categoria;

      const container = document.createElement('div');
      container.classList.add('container');

      filmesPorCategoria[categoria].forEach(filme => {
        const div = document.createElement('div');
        div.innerHTML = `<a href="exibicao-filmes.html?filme=${filme.nome}"> <img src="${filme.url_capa}" alt="${filme.nome}" loading="lazy" /> </a>`;
        container.appendChild(div);
      });

      containerGeral.appendChild(h2);
      containerGeral.appendChild(container);
    });
  })
  .catch(error => {
    console.error('Erro ao carregar o arquivo JSON:', error);
  });
