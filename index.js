const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
  "Concerteza.",
  "Não tenho tanta certeza.",
  "É decididadmente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem que não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Prespectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim."
]

//console.log(numeroAleatorio)

//clicar em fazer pergunta
function fazerPergunta(){
  if(inputPergunta.value == "") {
    alert("Digite Sua Pergunta")
    return
  }
  buttonPerguntar.setAttribute("disable", true)
  const pergunta = "<div>" + inputPergunta.value + "</div>"
//Gerar número aleatório
const totalRespostas = respostas.length
const numeroAleatorio = Math.floor(Math.random()* totalRespostas)
console.log(respostas [numeroAleatorio])
  elementoResposta.innerHTML = pergunta + respostas [numeroAleatorio]
  elementoResposta.style.opacity = 1;
//sumir a resposta depois de 3 segundos
setTimeout(function(){
  elementoResposta.style.opacity = 0;
  buttonPerguntar.removeAttribute('disable')
}, 3000)
}