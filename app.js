let ListadeNumeros = [];
let NumeroLimite = 10;
let numerosecreto = GerarNumeroAleatorio();
let tentativas = 1;

function ExibirTextoNaTela(tag, texto) {
  let campos = document.querySelector(tag);
  campos.innerHTML = texto;
}


function ExibirMensagemInicial() {
  ExibirTextoNaTela("h1", "Jogo do numero secreto");
  ExibirTextoNaTela("p", "Escolha um numero entre 1 e 10");
}
ExibirTextoNaTela("h1", "Jogo do numero secreto");
ExibirTextoNaTela("p", "Escolha um numero entre 1 e 10");

ExibirMensagemInicial();

function verificarChute() {
  let chute = parseInt(document.querySelector("input").value);

  if (chute == numerosecreto) {
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Parabens, você acertou o numero secreto com ${tentativas} ${palavraTentativa}`;
    ExibirTextoNaTela("h1", "Você acertou!");
    ExibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numerosecreto) {
      ExibirTextoNaTela("p", "Numero secreto é menor que o chute");
    } else {
      ExibirTextoNaTela("p", "Numero secreto é maior que o chute");
    }
    tentativas++;
    LimparCampo();
  }
}

function GerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * NumeroLimite + 1);
  let quantidadeDeNumerosNaLista = ListadeNumeros.length;

  if (quantidadeDeNumerosNaLista == NumeroLimite) {
    ListadeNumeros = [];
  }

  if (ListadeNumeros.includes(numeroEscolhido)) {
    return GerarNumeroAleatorio();
  } else {
    ListadeNumeros.push(numeroEscolhido);
    console.log(ListadeNumeros);
    return numeroEscolhido;
  }
}

function LimparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numerosecreto = GerarNumeroAleatorio();
  LimparCampo();
  tentativas = 1;
  ExibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}