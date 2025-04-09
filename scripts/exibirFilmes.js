function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

function loadFilme(data) {
  const iframeContainer = document.querySelector('.containar-do-iframe');
  const filmeNome = getParameterByName('filme');  

  const filme = data.find(filme => filme.nome == filmeNome);


  if (filme) {
    const titulo = document.getElementById('titulo-filme');
    titulo.textContent = filme.nome.replace(/-/g, ' ');

    iframeContainer.style.backgroundImage = `url('${filme.url_capa}')`;

    const vid = `${filme.codigo}`;

    const server = filme.server;

    const iframeSrc = `//%72%65%64%65%63%61%6E%61%69%73%2E%67%73/player3/server.php?server=RCFServer${server}&subfolder=ondemand&vid=${vid}`;

    const iframeURL = `<iframe name=Player "" src="${iframeSrc}" frameborder="0" height=400 width=640 scrolling="no" allow="encrypted-media" allowfullscreen></iframe>`;

    iframeContainer.innerHTML = iframeURL;

  } 
  loadRecomendados(data, filme);
}

function loadRecomendados(data, filme) {
  let filmesRec = data.filter(item => item.categoria === filme.categoria && item.nome !== filme.nome);
  
  for (let i = filmesRec.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filmesRec[i], filmesRec[j]] = [filmesRec[j], filmesRec[i]];
  }

  filmesRec = filmesRec.slice(0, 4);

  filmesRec.map( (filme) => {
    const div = document.createElement('div');

    div.innerHTML = `
        <a href="exibicao-filmes.html?filme=${encodeURIComponent(filme.nome)}" style="text-decoration: none;">
        <img src="${filme.url_capa}" alt="${filme.nome}" loading="lazy" />
        </a>`;
        
    let container = document.querySelector(`#filmes-recomendados`)
    container.appendChild(div);
    
    })

}


fetch('../jsons/filmes.json')
  .then(response => response.json())
  .then(data => loadFilme(data))  
  .catch(error => {
    console.error('Erro ao carregar o arquivo JSON:', error);
  });