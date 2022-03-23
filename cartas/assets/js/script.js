var carta1 = {
  nome: "Goku",
  imagem:
    "https://s.aficionados.com.br/imagens/resina-oficial-goku-super-saiyan-2_cke.jpg",
  atributos: {
    ataque: 95,
    defesa: 85,
    habilidade: 9
  }
};

var carta2 = {
  nome: "Vegeta",
  imagem:
    "https://s.aficionados.com.br/imagens/dor1rafw0aewhsy_cke.jpg",
  atributos: {
    ataque: 80,
    defesa: 70,
    habilidade: 6
  }
};

var carta3 = {
  nome: "Gohan",
  imagem:
    "https://sm.ign.com/ign_br/screenshot/default/blob_ev5f.jpg",
  atributos: {
    ataque: 100,
    defesa: 90,
    habilidade: 8
  }
};

var carta4 = {
  nome: "Majin Boo",
  imagem:
    "https://s.aficionados.com.br/imagens/majinboomoro-1.jpg",
  atributos: {
    ataque: 98,
    defesa: 100,
    habilidade: 10
  }
};

var carta5 = {
  nome: "Piccolo",
  imagem: "https://s.aficionados.com.br/imagens/maxresdefault-1-11_cke.jpg",
  atributos: {
    ataque: 70,
    defesa: 60,
    habilidade: 3
  }
};

var carta6 = {
    nome: "Cell",
    imagem: "https://s.aficionados.com.br/imagens/saga03-animedbz.jpg",
    atributos: {
      ataque: 70,
      defesa: 65,
      habilidade: 4
    }
  };

  var carta7 = {
    nome: "Freeza",
    imagem: "https://s.aficionados.com.br/imagens/freeza-dragon-ball-z-luta-contra-o-goku_cke.jpg",
    atributos: {
      ataque: 90,
      defesa: 85,
      habilidade: 7
    }
  };
var cartas = [carta1, carta2, carta3, carta4, carta5,carta6,carta7];
var cartaMaquina;
var cartaJogador;

function sorteioCartas() {
  var numeroCartaMaquina = parseInt(Math.random() * 5);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 5);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 5);
  }
  cartaJogador = cartas[numeroCartaJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador();
  var divResultado = document.getElementById("resultado");
  divResultado.innerHTML="";
}
function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}
function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Você Venceu</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Você Perdeu</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Você Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnSortear").innerHTML = "Novo Sorteio";
}
function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = " ";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
