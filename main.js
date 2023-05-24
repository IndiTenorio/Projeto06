const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const screen3 = document.querySelector(".screen3")
const campoNumero = document.querySelector("#campoNumero")
const titulo = document.querySelector("#tituloScreen2")
const titulo2 = document.querySelector("#tituloscreen3")

let numeroAleatorio
let tentativas = 1
rodar()

function rodar() {
  numeroAleatorio = Math.round(Math.random() * 10)
  console.log(numeroAleatorio)
}


function trocarTelas() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function trocarTelas1e3() {
  screen1.classList.toggle("hide")
  screen3.classList.toggle("hide")
}


function clicou(evento) {
  evento.preventDefault()
  if (Number(campoNumero.value) === numeroAleatorio) {
    trocarTelas()
    titulo.innerHTML = `Parabéns, você acertou em ${tentativas} tentativa(s)`
    campoNumero.value = ""
    rodar()
    tentativas = 1
  } else {
    tentativas++
    trocarTelas1e3()

  }
}


function jogarNovamente(evento) {
  trocarTelas()
}


function errou(event) {
  event.preventDefault()
  trocarTelas1e3()

}