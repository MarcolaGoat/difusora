function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }
  
  // Função para carregar as informações da série
  function loadSerie(serieNome, data) {
    const serie = data.find(serie => serie.nome == serieNome);
  
    if (serie) {
      const temporadasContainer = document.querySelector('.lista-de-episodios'); 
      const divIfram = document.querySelector('.containar-do-iframe');
  
      divIfram.style.backgroundImage = `url('${serie.url_capa}')`;
  
      // Exibe as temporadas e episódios
      serie.temporadas.forEach(temporada => {
  
        const tituloTemporada = document.createElement('h4');
        tituloTemporada.textContent = `Temporada ${temporada.temporada}`;
        temporadasContainer.appendChild(tituloTemporada);
  
        const listaEpisodios = document.createElement('ul');
        listaEpisodios.classList.add('lista-de-links');
        listaEpisodios.style.marginTop = '5px';
  
        for (let i = 1; i <= temporada.episodios; i++) {
          const itemEpisodio = document.createElement('li');
  
          // Criando o link para o episódio
          const linkEpisodio = document.createElement('a'); 
           linkEpisodio.href = `exibicao-series.html?serie=${serie.nome}&temp=${temporada.temporada}&ep=${i}`;  // Link com parâmetros
          linkEpisodio.textContent = `Episódio ${i}`;  // Texto do episódio
  
          itemEpisodio.appendChild(linkEpisodio);
          listaEpisodios.appendChild(itemEpisodio);
        }
  
        temporadasContainer.appendChild(listaEpisodios);
      });
    } else {
      document.getElementById('info-ep').innerText = 'Série não encontrada.';
    }
  }
  
  // Pega o nome da série da URL e carrega as informações
  const serieNome = getParameterByName('serie');
  if (serieNome) {
    fetch('../jsons/series.json')
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
      let vid;
      if (serie.categoria !== "Novelas" && serie.categoria !== "series") {
        vid = `${serie.codigo}T${temporada.padStart(2, '0')}EP${episodio.padStart(2, '0')}`;
      } else if (serie.categoria === "Novelas") {
        vid = `${serie.codigo}CP${episodio.toString().padStart(3, '0')}`;
      } else if (serie.categoria === "series") {
        const quantidadeEpisodios = serie.temporadas[0].episodios; // Pega o número de episódios da temporada 1
        if (quantidadeEpisodios > 99) {
          vid = `${serie.codigo}EP${episodio.toString().padStart(3, '0')}`;
        } else {
          vid = `${serie.codigo}EP${episodio.toString().padStart(2, '0')}`;
    }
  }
  
  
      const server = serie.temporadas[parseInt(temporada)-1].server;
      const sb = serie.temporadas[parseInt(temporada)-1].subfolder; 

  
      const iframeSrc = `//%72%65%64%65%63%61%6E%61%69%73%2E%67%73/player3/server.php?server=RCServer${server}&subfolder=${sb}&vid=${vid}`;
  
      const iframeURL = `<iframe name=Player "" src="${iframeSrc}" frameborder="0" height=400 width=640 scrolling="no" allow="encrypted-media" allowfullscreen></iframe>`;
  
      const iframeContainer = document.querySelector('.containar-do-iframe');
      iframeContainer.innerHTML = iframeURL;
  
      // Exibe as informações do episódio
      const infoContainer = document.getElementById('info-ep');
      infoContainer.textContent = `Temp: ${temporada} Ep: ${episodio}`;
    } else {
      const infoContainer = document.getElementById('info-ep');
      infoContainer.textContent = 'Escolha um episódio.';
    }

    loadRecomendados(data, serie);
  }
  
  
  fetch('../jsons/series.json')
    .then(response => response.json())
    .then(data => loadEpisodio(data))  
    .catch(error => {
      console.error('Erro ao carregar o arquivo JSON:', error);
      document.getElementById('info-ep').textContent = 'Erro ao carregar dados.';
    });

function loadRecomendados(data, serie) {
  let seriesRec = data.filter(item => item.categoria === serie.categoria && item.nome !== serie.nome);
  
  for (let i = seriesRec.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [seriesRec[i], seriesRec[j]] = [seriesRec[j], seriesRec[i]];
  }

  seriesRec = seriesRec.slice(0, 4);

  seriesRec.map( (serie) => {
    const div = document.createElement('div');

    div.innerHTML = `
        <a href="exibicao-series.html?serie=${encodeURIComponent(serie.nome)}" style="text-decoration: none;">
        <img src="${serie.url_capa}" alt="${serie.nome}" loading="lazy" />
        </a>`;
        
    let container = document.querySelector(`#recomendados`)
    container.appendChild(div);
    
    })

}