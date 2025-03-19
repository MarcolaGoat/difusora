function gerarCanais(categorias) {
    const main = document.getElementById('main');
    for (const categoria in categorias) {
      const h2 = document.createElement('h2');
      h2.classList.add('h2pc');
      h2.id= `${categoria.replace(' ', '')}`
      h2.textContent = 'Canais ' + categoria.charAt(0).toUpperCase() + categoria.slice(1);
      
      // Cria div .container-canais
      const containerCanais = document.createElement('div');
      containerCanais.classList.add('container-canais');
  
      categorias[categoria].forEach(canal => {
        const link = document.createElement('a');
        link.href = `exibicao.html?canal=${canal}`;
        
        const img = document.createElement('img');
        img.classList.add('canal');
        img.src = `imagens/${canal}-logo.png`;
        img.alt = canal;
  
        link.appendChild(img);

        main.appendChild(h2);
        containerCanais.appendChild(link);
        main.appendChild(containerCanais);
      });
      
    }
    for (const categoria in categorias) {
        const h2 = document.createElement('h2');
        h2.classList.add('h2mob');
        h2.textContent = 'Canais ' + categoria.charAt(0).toUpperCase() + categoria.slice(1);
    
        // Cria div .canais-mobile
        const canaisMobile = document.createElement('div');
        canaisMobile.classList.add('canais-mobile');
    
        categorias[categoria].forEach(canal => {
          const link = document.createElement('a');
          link.href = `exibicao.html?canal=${canal}`;
          
          const img = document.createElement('img');
          img.classList.add('canal');
          img.src = `imagens/${canal}-logo.png`;
          img.alt = canal;
    
          link.appendChild(img);
  
          main.appendChild(h2);
          canaisMobile.appendChild(link);
          main.appendChild(canaisMobile);
        });
        
      }
  }
  
  const categorias = {
    "Abertos": ["boborj", "sbt", "record", "band"],
    "de Noticias": ["globonews", "recordnews", "bandnews", "cnnbrasil"],
    "de Documentarios": ["animalplanet", "discovery", "history"],
    "de Entretenimento": ["cinemax", "comedycentral", "hbo", "megapix", "space", "tntseries","bbb25a"],
    "Infantil": ["cartoon", "gloob", "discoverykids", "nick", "disney"],
    "de Esportes": ["combate", "espn", "espn2", "premiereclubes", "premiere2", "sportv", "sportv2", "nossofutebol", "tnt"]
  };
  
  gerarCanais(categorias);