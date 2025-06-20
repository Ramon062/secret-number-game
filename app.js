let listaDeNumeros;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 5;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.InnerHTML = texto;
}

function exibirMensagemInicial(){
  exibirTextoNaTela("h1", "Bem-vindo ao jogo!");
  exibirTextoNaTela("p", "Tente adivinhar o número entre 1 e 100!");
}
exibirMensagemInicial();
function verificarChute() {
  let chute = document.querySelector("input").value;
  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Parabéns!");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } 
  else {
    exibirTextoNaTela("h1", "Tente novamente!");
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é menor que " + chute + ".");
    } else {
      exibirTextoNaTela("p", "O número secreto é maior que " + chute + ".");
    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * 100 + 1);
  if (listaDeNumerosSorteados.includes(numeroEscolhido)){
      return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}
function reiniciarjogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 5;
  exibirMensagemInicial();
  document.gerElementById("reiniciar").setAttribute("disabled", true)
}
