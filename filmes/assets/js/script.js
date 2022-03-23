var listaAnimes = [
  "https://br.web.img3.acsta.net/c_310_420/pictures/16/04/11/16/56/089875.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/7/74/Dragon_Ball_Super_Key_visual.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/61Z5kqnlxyL.jpg"
];


var container = document.getElementById('animes');


for (var i = 0; i < listaAnimes.length; i++) {
  var imagem = document.createElement('img');
  imagem.src=listaAnimes[i];
  container.appendChild(imagem);
}


function adicionarAnime() {
  var animeFavorito = document.getElementById("anime").value;
  if (animeFavorito.endsWith(".jpg")) {
    listarAnimesNaTela(animeFavorito);
  } else {
    console.error("Endereço de filme inválido");
  }
  document.getElementById("anime").value = "";
}

function listarAnimesNaTela(anime) {
  console.log(anime);
  var elementoanimeFavorito = "<img src=" + anime + ">";
  var elementoListaAnimes = document.getElementById("animes");
  elementoListaAnimes.innerHTML =
    elementoListaAnimes.innerHTML + elementoanimeFavorito;
}
