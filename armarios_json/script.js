function mudarEstado() {
  const btn = event.target;
  const armario = btn.parentNode;
  const tipo = armario.querySelector(".tipo1, .tipo2, .tipo3");

  if (tipo.classList.contains("tipo1")) {
    tipo.classList.remove("tipo1");
    tipo.classList.add("tipo2");
    tipo.innerHTML = "<h5>Ocupado</h5>";
  } else if (tipo.classList.contains("tipo2")) {
    tipo.classList.remove("tipo2");
    tipo.classList.add("tipo3");
    tipo.innerHTML = "<h5>Manutenção</h5>";
  } else {
    tipo.classList.remove("tipo3");
    tipo.classList.add("tipo1");
    tipo.innerHTML = "<h5>Disponível</h5>";
  }
}

fetch("data.json")
      .then(response => response.json())
      .then(jsonCSS => {
        const armariosConjunto = document.getElementById("armariosConjunto");

        const quantidadeArmarios = jsonCSS.quantidade; 

        for (let i = 1; i <= quantidadeArmarios; i++) {
          const armarios = document.createElement("div");
          armarios.className = "armario";

          const tipoDisponivel = document.createElement("div");
          tipoDisponivel.className = "tipo1";
          tipoDisponivel.innerHTML = "<h5>Disponível</h5>";

          const abertura1 = document.createElement("div");
          abertura1.className = "abertura1";

          const abertura2 = document.createElement("div");
          abertura2.className = "abertura2";

          const btnMudar = document.createElement("button");
          btnMudar.type = "button";
          btnMudar.onclick = mudarEstado;
          btnMudar.className = "btnMudar";

          const abertura3 = document.createElement("div");
          abertura3.className = "abertura3";

          const abertura4 = document.createElement("div");
          abertura4.className = "abertura4";

          const numero = document.createElement("div");
          numero.className = "numero";
          numero.innerHTML = "<h2>" + i + "</h2>";

          armarios.appendChild(tipoDisponivel);
          armarios.appendChild(abertura1);
          armarios.appendChild(abertura2);
          armarios.appendChild(btnMudar);
          armarios.appendChild(abertura3);
          armarios.appendChild(abertura4);
          armarios.appendChild(numero);
          armariosConjunto.appendChild(armarios);

        }

      })
      .catch(error => {
        console.error("Ocorreu um erro ao tentar ler o arquivo JSON", error);
      });
  
      

  fetch("data.json")
  .then(response => response.json())
  .then(jsonCSS => {

    const armarioJsonCSS = document.getElementById("armarioJsonCSS");
    let cssTexto = "";

    for (const selecionar in jsonCSS) {
      cssTexto += selecionar + "{";
            const propriedades = jsonCSS[selecionar];
            for (const caracteristicas in propriedades) {
                cssTexto += caracteristicas + ": " + propriedades[caracteristicas] + ";";
            }
      cssTexto += "}";
    }
    armarioJsonCSS.textContent = cssTexto;
    })
  .catch(error => {
    console.error("Ocorreu um erro ao tentar ler o arquivo JSON", error);
  });


