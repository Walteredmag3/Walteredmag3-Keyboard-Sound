function tocaSom(seletorAudio) {
 const elemento = document.querySelector(seletorAudio);

 if (elemento && elemento.localName === 'audio') {
    elemento.play();
 }
 else{
    console.log('Elemento não encontrado ou seletor não inválido');
 }


}
const listaTeclas = document.querySelectorAll(".tecla");

for (let contador = 0; contador < listaTeclas.length; contador++) {
  const tecla = listaTeclas[contador];
  const instrumentos = tecla.classList[1];
  const idAudio = `#som_${instrumentos}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  }

  tecla.onkeydown = function (evento) {
    console.log(evento.code);

    if (evento.code === 'Space' || evento.code === 'Enter') {
      tecla.classList.add("ativa");
    }
    
  }

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
