// EXIBIÇÃO DAS CAPAS DAS SÉRIES
fetch('../json/series-info.json')
  .then(response => response.json())  // Converte o conteúdo para JSON
  .then(data => {
    const container = document.getElementById('series-container');
    // Para cada série no JSON, cria o HTML dinamicamente
    data.forEach(serie => {
      const div = document.createElement('div');
      div.classList.add('serie');
      div.innerHTML = `<a href="series-exibicao.html?serie=${serie.nome}"><img src="${serie.url_capa}" alt="${serie.nome}" loading="lazy" /></a>`;
      container.appendChild(div);
    });
  })
  .catch(error => {
    console.error('Erro ao carregar o arquivo JSON:', error);
  });

  // CARREGAMENTO DA PÁGINA DA SÉRIE

// Função para obter o valor de um parâmetro da URL
function getParameterByName(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Função para carregar as informações da série
function loadSerie(serieNome, data) {
  const serie = data.find(serie => serie.nome === serieNome);

  if (serie) {
    const titulo = document.getElementById('serie-titulo');
    const temporadasContainer = document.getElementById('tempContainer');

    titulo.textContent = serie.nome.replace(/-/g, ' ');

    // Exibe as temporadas e episódios
    serie.temporadas.forEach(temporada => {
      const temporadaDiv = document.createElement('div');
      temporadaDiv.classList.add('temporada');

      const tituloTemporada = document.createElement('p');
      tituloTemporada.textContent = `Temporada ${temporada.temporada}`;
      temporadaDiv.appendChild(tituloTemporada);

      const listaEpisodios = document.createElement('ul');
      listaEpisodios.classList.add('lista-exi');

      for (let i = 1; i <= temporada.episodios; i++) {
        const itemEpisodio = document.createElement('li');

        // Criando o link para o episódio
        const linkEpisodio = document.createElement('a');
        linkEpisodio.href = `series-exibicao.html?serie=${serie.nome}&temp=${temporada.temporada}&ep=${i}`;  // Link com parâmetros
        linkEpisodio.textContent = `Episódio ${i}`;  // Texto do episódio

        itemEpisodio.appendChild(linkEpisodio);
        listaEpisodios.appendChild(itemEpisodio);
      }

      temporadaDiv.appendChild(listaEpisodios);
      temporadasContainer.appendChild(temporadaDiv);
    });
  } else {
    document.getElementById('serie-info').innerText = 'Série não encontrada.';
  }
}

// Pega o nome da série da URL e carrega as informações
const serieNome = getParameterByName('serie');
if (serieNome) {
  fetch('../json/series-info.json')
    .then(response => response.json())
    .then(data => loadSerie(serieNome, data))
    .catch(error => {
      console.error('Erro ao carregar o arquivo JSON:', error);
    });
} else {
  document.getElementById('serie-info').innerText = 'Série não encontrada.';
}

// CARREGANDO O IFRAME DO EPISÓDIO

// Função para carregar o episódio no iframe
function loadEpisodio(data) {
  const serieNome = getParameterByName('serie');  // Pega o nome da série da URL
  const temporada = getParameterByName('temp');  // Pega a temporada da URL
  const episodio = getParameterByName('ep');    // Pega o episódio da URL

  const serie = data.find(serie => serie.nome === serieNome);

  if (serie && temporada && episodio) {
    // Criando o identificador de vídeo (vid), com base no código da série, temporada e episódio
    const vid = `${serie.codigo}T${temporada.padStart(2, '0')}EP${episodio.padStart(2, '0')}`;

    const server = serie.server;
    const sb = serie.subfolder;

    // Montando a URL do iframe
    const iframeSrc = `//%72%65%64%65%63%61%6E%61%69%73%2E%70%73/player3/server.php?server=RCServer${server}&subfolder=${sb}&vid=${vid}`;

    // Montando o HTML do iframe com a URL gerada
    const iframeURL = `<iframe name=Player "" src="${iframeSrc}" frameborder="0" height=400 width=640 scrolling="no" allow="encrypted-media" allowfullscreen></iframe>`;

    // Inserindo o HTML do iframe dentro da div com id "iframe-container"
    const iframeContainer = document.getElementById('iframe-container');
    iframeContainer.innerHTML = iframeURL;

    // Exibe as informações do episódio
    const infoContainer = document.getElementById('info-episodio');
    infoContainer.textContent = `Temp: ${temporada} Ep: ${episodio}`;
  } else {
    const infoContainer = document.getElementById('info-episodio');
    infoContainer.textContent = 'Escolha um episódio.';
  }
}

// Carregar o arquivo JSON e chamar a função loadEpisodio
fetch('../json/series-info.json')
  .then(response => response.json())
  .then(data => loadEpisodio(data))  // Passa o JSON carregado para a função loadEpisodio
  .catch(error => {
    console.error('Erro ao carregar o arquivo JSON:', error);
    document.getElementById('info-episodio').textContent = 'Erro ao carregar dados.';
  });
