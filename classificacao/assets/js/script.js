var equipeAstralis = {
  icon:
    "https://www.kindpng.com/picc/m/32-329064_unofficial-stickers-you-astralis-icon-transparent-major-league.png",
  nome: "Astralis",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

var equipes = [equipeAstralis];

function calculo(equipes) {
  var pontos = equipes.vitorias * 3 + equipes.empates;
  return pontos;
}

function exibir(equipes) {
  var elem = "";
  for (var i = 0; i < equipes.length; i++) {
    elem += "<tr><td>" + `<img src="${equipes[i].icon}">` + "</td>";
    elem += "<td>" + equipes[i].nome + "</td>";
    elem += "<td>" + equipes[i].vitorias + "</td>";
    elem += "<td>" + equipes[i].empates + "</td>";
    elem += "<td>" + equipes[i].derrotas + "</td>";
    elem += "<td>" + equipes[i].pontos + "</td>";
    elem +=
      "<td><button class='operacoes ' onClick='adicionarVitoria(" +
      i +
      ")'>Vitória</button></td>";
    elem +=
      "<td><button class='operacoes ' onClick='adicionarEmpate("+i+")'>Empate</button></td>";
    elem += "</tr>";
  }
  var tabelaEquipes = document.getElementById("tabelaJogadores");
  tabelaEquipes.innerHTML = elem;
}
exibir(equipes);

function adicionarVitoria(i) {
   
  let equipes2 = equipes[i];
  equipes2.vitorias++;
  equipes2.pontos = calculo(equipes2);

  for (var cont = 0; cont < equipes.length; cont++) {
    if (cont != i) {
      var outrasEquipes = equipes[cont];
      outrasEquipes.derrotas++;
    }
  }
  exibir(equipes);
}

function adicionarEmpate(i) {
  for (var id = 0; id < equipes.length; id++) {
    let equipes3 = equipes[id];
    equipes3.empates++;
    equipes3.pontos = calculo(equipes3);
  }
  exibir(equipes);
}

function adicionarEquipe() {
  var nome = document.getElementById("nomeEquipe");
  var icone = document.getElementById("iconeEquipe");
  console.log(nome.value);
  console.log(icone.value);
  if(nome.value =="" || icone.value=="")
  {
      alert("Preencha o nome e o icone da equipe corretamente")
  }
  else
  {
    equipes.push({
        icon: icone.value,
        nome: nome.value,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0
      });
      nome.value = "";
      icone.value = "";
      exibir(equipes);
  }
}

function reiniciarPontuacao() {
  for (var i = 0; i < equipes.length; i++) {
    equipes[i].vitorias = 0;
    equipes[i].empates = 0;
    equipes[i].derrotas = 0;
    equipes[i].pontos = 0;
  }
  exibir(equipes);
}
