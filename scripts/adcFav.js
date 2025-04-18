document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('filmes')) {
        carregarBtnFilme();
    } else if (window.location.pathname.includes('series')) {
      carregarBtnSerie();
  }
  });
  
  function carregarBtnFilme() {
    const urlParams = new URLSearchParams(window.location.search);
    const filmeParametro = urlParams.get('filme');
    
    if (!filmeParametro) return; 
  
    fetch('../jsons/filmes.json')
        .then(response => response.json())
        .then(data => {
            const filme = data.find(f => f.nome == filmeParametro);
            
            if (filme) {
                let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
                const btnAdc = document.querySelector("#btn-adc");
                const pBtn = btnAdc.querySelector('p');
                
                if (favoritos.some(f => f.nome == filme.nome)) {
                    pBtn.textContent = '×'; 
                    btnAdc.title = 'Remover da minha lista';
                } else {
                    pBtn.textContent = '+'; 
                    btnAdc.title = 'Adicionar na minha lista';
                }
  
                btnAdc.addEventListener('click', function() {
                    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
                    
                    const index = favoritos.findIndex(f => f.nome === filme.nome);
                    
                    if (index !== -1) {
                        favoritos.splice(index, 1);
                        pBtn.textContent = '+'; 
                        btnAdc.title = 'Adicionar na minha lista';
                    } else {
                        favoritos.push(filme);
                        pBtn.textContent = '×'; 
                        btnAdc.title = 'Remover da minha lista';
                    }
  
                    localStorage.setItem("favoritos", JSON.stringify(favoritos));
                });
            }
        })
        .catch(error => {
            console.error('Erro ao carregar o arquivo JSON:', error);
        });
  }
  
  
  function carregarBtnSerie() {
      const urlParams = new URLSearchParams(window.location.search);
      const serieParametro = urlParams.get('serie');
      
      if (!serieParametro) return; 
    
      fetch('../jsons/series.json')
          .then(response => response.json())
          .then(data => {
              const serie = data.find(s => s.nome == serieParametro);
              
              if (serie) {
                  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
                  const btnAdc = document.querySelector("#btn-adc");
                  const pBtn = btnAdc.querySelector('p');
                  
                  if (favoritos.some(s => s.nome == serie.nome)) {
                      pBtn.textContent = '×'; 
                      btnAdc.title = 'Remover da minha lista';
                  } else {
                      pBtn.textContent = '+'; 
                      btnAdc.title = 'Adicionar na minha lista';
                  }
    
                  btnAdc.addEventListener('click', function() {
                      let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
                      
                      const index = favoritos.findIndex(s => s.nome === serie.nome);
                      
                      if (index !== -1) {
                          favoritos.splice(index, 1);
                          pBtn.textContent = '+'; 
                          btnAdc.title = 'Adicionar na minha lista';
                      } else {
                          favoritos.push(serie);
                          pBtn.textContent = '×'; 
                          btnAdc.title = 'Remover da minha lista';
                      }
    
                      localStorage.setItem("favoritos", JSON.stringify(favoritos));
                  });
              }
          })
          .catch(error => {
              console.error('Erro ao carregar o arquivo JSON:', error);
          });
    }