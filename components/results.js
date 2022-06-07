
const usuario = localStorage.getItem("usuario_logueado")

const container = document.querySelector("#container")
const containerTable = document.createElement("div")
const nav = document.createElement("nav")
const ancla = document.createElement("a");
const tablePoints = document.createElement("table");
const tablePointsHead = document.createElement("thead");
const tablePointbody = document.createElement("tbody");
const trtitle = document.createElement("tr")
const thGamer = document.createElement("th")
const thPoints = document.createElement("th")
const continerButtonLinguee = document.createElement("div")
const buttonLinguee = document.createElement("input")
const podio = document.createElement("img")
const continerButtonRestart = document.createElement("div")
const buttonRestart = document.createElement("input")

nav.classList.add("navbar", "navbar-dark", "bg-dark", "text-light", "justify-content-center")

ancla.classList.add("navbar-brand", "h1");
ancla.textContent = "RESULTADOS"

containerTable.classList.add("d-flex", "flex-column", "justify-content-center", "align-items-center")
// containerTable.style.height = "700px"

tablePoints.classList.add("table")
tablePoints.style.width = "50%"

thGamer.textContent = "Gamer";
thPoints.textContent = "Points";

trtitle.classList.add("bg-dark", "text-light")

continerButtonLinguee.classList.add("d-flex", "justify-content-end")
continerButtonLinguee.style.marginTop = "20px"

buttonLinguee.classList.add("btn", "btn-secondary")
buttonLinguee.setAttribute("type", "button")
buttonLinguee.setAttribute("value", "Cerrar Sesion")
buttonLinguee.style.width = "150px"
buttonLinguee.style.margin = "0px"

podio.setAttribute('src', '/img/podio.png')
podio.setAttribute('alt', 'imagen Podio')
podio.style.width = "450px"
podio.style.marginBottom = "20px"

continerButtonRestart.classList.add("d-flex", "justify-content-center", "align-items-end")
continerButtonRestart.style.marginTop = "100px"

buttonRestart.classList.add("btn", "btn-secondary")
buttonRestart.setAttribute("type", "button")
buttonRestart.setAttribute("value", "Reiniciar juego")
buttonRestart.style.width = "150px"
buttonRestart.style.margin = "0px"

continerButtonRestart.append(buttonRestart)
containerTable.append(podio)
continerButtonLinguee.append(buttonLinguee)
trtitle.append(thGamer, thPoints);
tablePointsHead.append(trtitle)
tablePoints.append(tablePointsHead, tablePointbody)
containerTable.append(tablePoints)
nav.appendChild(ancla);
container.append(nav, continerButtonLinguee, containerTable, continerButtonRestart)

// Eventos

window.addEventListener('load', (e) => {
    validacionUser();
})

buttonLinguee.addEventListener('click', (e) => {
    linguee();
})

buttonRestart.addEventListener('click', (e) => {
    restart();
})

let data = [];

function mostrarGamers(data) {
    data = localStorage.getItem("gamersPoints");
    data = JSON.parse(data);
    console.log(data);
    data.forEach(element => {
        const trCont = document.createElement("tr");
        trCont.classList.add("bg-secondary", "text-light")
        trCont.style.width = "200px"

        for (const key in element) {
            const td = document.createElement("td");
            td.textContent = element[key];
            trCont.append(td);
        }
        tablePointbody.append(trCont)
    });

}

function validacionUser() {
    if (!(localStorage.getItem("usuario_logueado"))) {
        cargarLogin();
    }
}

function linguee() {
    localStorage.removeItem(usuario)
    localStorage.removeItem("usuario_logueado")
    window.location.reload()
}

function restart(params) {
    localStorage.setItem(usuario, 0)
    localStorage.setItem("level", 1)
    window.location.href = '/index.html'
}

function cargarLogin() {
    window.location.href = 'login.html'
}

mostrarGamers();