// Função para obter o valor de um parâmetro da URL
function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

// EXIBIÇÃO DAS CAPAS DOS FILMES
fetch('../json/filmes.json')
  .then(response => response.json())  // Converte o conteúdo para JSON
  .then(data => {
    const container = document.getElementById('filmes-container');
    // Para cada filme no JSON, cria o HTML dinamicamente
    data.forEach(filme => {
      const div = document.createElement('div');
      div.classList.add('serie');
      div.innerHTML = `<a href="filmes-exibicao.html?filme=${filme.nome}"><img src="${filme.url_capa}" alt="${filme.nome}" loading="lazy" /></a>`;
      container.appendChild(div);
    });
  })
  .catch(error => {
    console.error('Erro ao carregar o arquivo JSON:', error);
  });



// CARREGANDO O IFRAME DO FILME

// Função para carregar o filme no iframe
function loadFilme(data) {
  const filmeNome = getParameterByName('filme');  // Pega o nome do filme da URL

  const filme = data.find(filme => filme.nome == filmeNome);


  if (filme) {
    const titulo = document.getElementById('filme-titulo');
    titulo.textContent = filme.nome;

    // Criando o identificador de vídeo (vid), com base no código do filme
    const vid = `${filme.codigo}`;

    const server = filme.server;
    const sb = filme.subfolder;

    // Montando a URL do iframe
    const iframeSrc = `//%72%65%64%65%63%61%6E%61%69%73%2E%70%73/player3/server.php?server=RCFServer${server}&subfolder=${sb}&vid=${vid}`;

    // Montando o HTML do iframe com a URL gerada
    const iframeURL = `<iframe name=Player "" src="${iframeSrc}" frameborder="0" height=400 width=640 scrolling="no" allow="encrypted-media" allowfullscreen></iframe>`;

    // Inserindo o HTML do iframe dentro da div com id "iframe-container"
    const iframeContainer = document.getElementById('iframe-container');
    iframeContainer.innerHTML = iframeURL;

  } 
}

// Carregar o arquivo JSON e chamar a função loadFilme
fetch('../json/filmes.json')
  .then(response => response.json())
  .then(data => loadFilme(data))  
  .catch(error => {
    console.error('Erro ao carregar o arquivo JSON:', error);
    document.getElementById('info-filme').textContent = 'Erro ao carregar dados. Pois ' + error;
  });
