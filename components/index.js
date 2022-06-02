var respuesta = "";

const usuario = localStorage.getItem("usuario_logueado")
var levelGame = parseInt(localStorage.getItem("level"))
var pointsGame = parseInt(localStorage.getItem(usuario))
const container = document.querySelector("#container")
const nav = document.createElement("nav")
const ancla = document.createElement("a");
const puntuacion = document.createElement("div")
const navPoint = document.createElement("nav")
const anclaPoint = document.createElement("a");
const points = document.createElement('div')
const game = document.createElement("div")
const containerQuestion = document.createElement("div")
const level = document.createElement("div")
const questionTitle = document.createElement("h2")
const question = document.createElement("span")
const containerAnswer = document.createElement("div")

nav.classList.add("navbar", "navbar-dark", "bg-dark", "text-light", "justify-content-center")

ancla.classList.add("navbar-brand", "h1");
ancla.textContent = "JUEGA PARA GANAR"

puntuacion.classList.add("container", "card")
puntuacion.style.width = "250px"
puntuacion.style.marginTop = "30px"

points.classList.add("card-body")
points.textContent = localStorage.getItem(usuario)

navPoint.classList.add("navbar", "navbar-dark", "bg-secondary", "text-light", "justify-content-center")

anclaPoint.classList.add("navbar-brand", "h1");
anclaPoint.textContent = "SU PUNTUACION ES: "

game.classList.add("d-flex", "flex-row")
game.style.marginTop = "30px"

containerQuestion.classList.add("container", "card")

question.classList.add("badge", "container", "bg-dark", "card-header")

containerAnswer.classList.add("card-body", "btn-group-vertical")
containerAnswer.style.height = "300px"

level.classList.add("container")

questionTitle.append(question)
containerQuestion.append(questionTitle, containerAnswer);
game.append(containerQuestion, level)
navPoint.appendChild(anclaPoint)
puntuacion.append(navPoint, points)
nav.appendChild(ancla);
container.append(nav, puntuacion, game)

function crearPregunta(data) {
    let contador = 0;
    let numRandmo = Math.ceil(Math.random() * 5)
    for (const key in data) {
        let contadorDos = 0;
        contador += 1;
        if (contador == localStorage.getItem("level")) {
            data[key].forEach(element => {
                let contadorTres = 0
                contadorDos += 1;
                if (contadorDos === numRandmo) {
                    for (const keyDos in element) {
                        contadorTres += 1;
                        if (contadorTres === 1) {
                            question.textContent = element[keyDos]
                        } else if (contadorTres === 2) {
                            element[keyDos].forEach(elementDos => {
                                const buttonAnswer = document.createElement("input")
                                buttonAnswer.classList.add("btn", "btn-secondary")
                                buttonAnswer.setAttribute("type", "button")
                                buttonAnswer.style.width = "400px"
                                buttonAnswer.style.margin = "10px"
                                buttonAnswer.setAttribute("value", elementDos)
                                buttonAnswer.addEventListener('click', (e) => {
                                    buttonAnswer.style.background = "red"
                                    verificarOpcion(e.target.value);
                                })

                                containerAnswer.append(buttonAnswer)
                            });
                        } else {
                            respuesta = element[keyDos]
                        }
                    }
                }
            });
        }

    }
}

function verificarOpcion(event) {

    if (event === respuesta) {
        localStorage.setItem("level", levelGame += 1)
        localStorage.setItem(usuario, pointsGame += 200)
    }
}

function crearRespuestas(data) {
    for (const key in data) {
        console.log(data[key]);
    }
}

window.addEventListener('load', (e) => {
    validacionUser();
    localStorage.setItem("level", 1)
})

function validacionUser() {
    if (!(localStorage.getItem("usuario_logueado"))) {
        cargar();
    }
}

function cargar() {
    window.location.href = 'login.html'
}

function cargarArchivo() {
    fetch('../preguntas.json')
        .then(res => res.json()
            .then(res => {
                crearPregunta(res)
                // crearRespuestas(res)
            }))
}

cargarArchivo()