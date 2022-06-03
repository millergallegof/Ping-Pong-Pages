var respuesta = "";
const levels = ["Level 5", "Level 4", "Level 3", "Level 2", "Level 1"]
const usuario = localStorage.getItem("usuario_logueado")
var levelGame = parseInt(localStorage.getItem("level"))
var pointsGame = parseInt(localStorage.getItem(usuario))
let gamersPoints = new Object();
let temporal;
let nuevalista;
let listPodio = []
// listPodio.push(parseInt(localStorage.getItem("gamersPoints")));



const container = document.querySelector("#container")
const nav = document.createElement("nav")
const ancla = document.createElement("a");
const puntuacion = document.createElement("div")
const navPoint = document.createElement("nav")
const anclaPoint = document.createElement("a");
const points = document.createElement('div')
const game = document.createElement("div")
const containerQuestion = document.createElement("div")
const questionTitle = document.createElement("h2")
const question = document.createElement("span")
const containerAnswer = document.createElement("div")
const continerButtonAnswer = document.createElement("div")
const level = document.createElement("div")
const containerBarraProfess = document.createElement("div")
const containerProgress = document.createElement("div")
const contentProgress = document.createElement("div")
const containerLevel = document.createElement("div")
const listaLevel = document.createElement("ul")
const continerButtonRender = document.createElement("div")
const containerRender = document.createElement("div")
const buttonRender = document.createElement("input")

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

containerQuestion.classList.add("d-flex", "card")
containerQuestion.style.width = "50%"
containerQuestion.style.height = "300px"

question.classList.add("badge", "container", "bg-dark", "card-header")

continerButtonAnswer.classList.add("d-flex", "justify-content-center")

containerAnswer.classList.add("btn-group-vertical")
containerAnswer.style.height = "100%"

level.classList.add("d-flex", "flex-row", "align-items-end")
level.style.width = "50%"

containerBarraProfess.classList.add("skills__item")

containerProgress.classList.add("skillsBar", validarLevel())

contentProgress.classList.add("bg-dark");
contentProgress.style.width = "30%"

containerLevel.classList.add("d-flex")
containerLevel.style.width = "300px"
containerLevel.style.marginInlineStart = "100px"

listaLevel.classList.add("list-group")
mostrarLevel();

continerButtonRender.classList.add("d-flex", "justify-content-end")
continerButtonRender.style.marginTop = "80px"

containerRender.classList.add("d-flex", "align-items-center")

buttonRender.classList.add("btn", "btn-secondary")
buttonRender.setAttribute("type", "button")
buttonRender.setAttribute("value", "Rendirse")
buttonRender.style.width = "400px"
buttonRender.style.margin = "10px"

continerButtonRender.append(containerRender)
containerRender.append(buttonRender)
containerLevel.append(listaLevel)
containerBarraProfess.appendChild(containerProgress)
containerProgress.appendChild(contentProgress)
level.append(containerBarraProfess, containerLevel);
continerButtonAnswer.append(containerAnswer)
questionTitle.append(question)
containerQuestion.append(questionTitle, continerButtonAnswer, continerButtonRender);
game.append(containerQuestion, level)
navPoint.appendChild(anclaPoint)
puntuacion.append(navPoint, points)
nav.appendChild(ancla);
container.append(nav, puntuacion, game)


// eventos
window.addEventListener('load', (e) => {
    validacionUser();
})

buttonRender.addEventListener('click', (e) => {
    console.log(listPodio);
    resultados();
    crearListaGamers(listPodio, temporal, nuevalista);
})

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
                                buttonAnswer.classList.add("btn", "btn-outline-secondary")
                                buttonAnswer.setAttribute("type", "button")
                                buttonAnswer.style.width = "400px"
                                buttonAnswer.style.margin = "10px"
                                buttonAnswer.setAttribute("value", elementDos)
                                buttonAnswer.addEventListener('click', (e) => {
                                    verificarOpcion(e.target.value, buttonAnswer);
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

function verificarOpcion(event, button) {
    if (event === respuesta) {
        button.classList.add("bg-success", "text-light");
        localStorage.setItem("level", levelGame += 1)
        localStorage.setItem(usuario, pointsGame += 200)
        subirLevel();
    } else {
        localStorage.setItem("level", 1)
        localStorage.setItem(usuario, pointsGame = 0)
        button.classList.add("bg-danger", "text-light");
        resetGame();
    }

}

function mostrarLevel() {
    levels.forEach(element => {
        const itemLevel = document.createElement("li")
        itemLevel.classList.add("list-group-item", "bg-dark", "text-light")
        itemLevel.textContent = element
        itemLevel.style.marginTop = "30px"
        itemLevel.style.marginBottom = "30px"
        listaLevel.append(itemLevel)
    });
}

function subirLevel() {
    if (levelGame >= 6) {
        resultados()
        crearListaGamers()
        localStorage.setItem("level", 1)
    }
    setTimeout(() => {
        window.location.reload()
    }, 500);

}

function crearListaGamers(listPodio, temporal, nuevalista) {
    listPodio = [JSON.parse(localStorage.getItem("gamersPoints"))]
    // listPodio = JSON.parse("[" + listPodio + "]");
    // temporal = arrayObjeto(temporal)
    // list.push(temporal)
    gamersPoints.name = usuario;
    gamersPoints.points = pointsGame

    // console.log(list.length <= 0);
    if (!listPodio[0]) {
        listPodio.splice(0, listPodio.length)
        listPodio.push(gamersPoints);
        localStorage.setItem("gamersPoints", JSON.stringify(listPodio))
    } else {
        temporal = [];
        nuevalista = []
        temporal.push(gamersPoints)
        localStorage.setItem("temporal", JSON.stringify(temporal))
        nuevalista.push(temporal[0], listPodio[0][0])
        localStorage.setItem("gamersPoints", JSON.stringify(nuevalista))

    }



}

function arrayObjeto(objeto) {
    return Object.assign({}, objeto[0])

}

function resetGame() {
    setTimeout(() => {
        window.location.reload()
    }, 500);
}

function crearRespuestas(data) {
    for (const key in data) {
        console.log(data[key]);
    }
}

function validacionUser() {
    if (!(localStorage.getItem("usuario_logueado"))) {
        cargarLogin();
    }
}

function validarLevel() {
    if (levelGame === 1) {
        return "skillsBar--20";
    }
    if (levelGame === 2) {
        return "skillsBar--40";
    }
    if (levelGame === 3) {
        return "skillsBar--60";
    }
    if (levelGame === 4) {
        return "skillsBar--80";
    }
    if (levelGame === 5) {
        return "skillsBar--100";
    }

}

function cargarLogin() {
    window.location.href = 'login.html'
}

function resultados() {
    window.location.href = 'results.html'
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