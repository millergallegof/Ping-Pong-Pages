let nickname = "";
let value = 0;
var assec = false;

const container = document.querySelector("#container")
const logincontainer = document.createElement("div")
const loginTextContainer = document.createElement("div")
const loginTitle = document.createElement("h1")
const loginText = document.createElement("h3")
const loginSpan = document.createElement("span")
const loginForm = document.createElement("form")
const loginLabel = document.createElement("label")
const loginInput = document.createElement("input")
const loginButton = document.createElement("button")

container.classList.add("d-flex", "justify-content-center", "align-items-center")
container.style.height = '950px'

logincontainer.classList.add("card", "align-items-center")
logincontainer.style.height = '30%'
logincontainer.style.width = '45%'

loginTitle.classList.add("container")

loginSpan.classList.add("badge", "container", "bg-secondary")
loginSpan.textContent = "JUEGO DE LAS PREGUNTAS"

loginTextContainer.classList.add("card-body", "d-flex", "flex-column", "justify-content-center", "align-items-center");
loginForm.classList.add("card-body", "d-flex", "flex-column", "justify-content-center", "align-items-center");

loginLabel.classList.add("h4")
loginLabel.setAttribute('for', 'formLogin')
loginLabel.textContent = "INGRESE SU USUARIO"
loginLabel.style.marginBottom = "20px"

loginInput.classList.add("form-control")
loginInput.setAttribute('type', 'text')
loginInput.setAttribute('id', 'formLogin')
loginInput.setAttribute('placeholder', 'miller.gallegof')
loginInput.style.marginBottom = "10px"

loginButton.classList.add("btn", "btn-outline-secondary")
loginButton.setAttribute('type', 'submit')
loginButton.textContent = "INGRESAR AL JUEGO"

container.appendChild(logincontainer)
logincontainer.append(loginTitle, loginTextContainer)
loginTitle.appendChild(loginSpan)
loginTextContainer.append(loginForm)
loginForm.append(loginLabel, loginInput, loginButton)

function almacenarDato(user) {
    nickname = user
}

loginInput.addEventListener('change', (e) => {
    e.preventDefault();

    almacenarDato(e.target.value);
})

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem(nickname, value);
    localStorage.setItem("usuario_logueado", nickname)
    loginInput.value = ""
    validacionUser();
})

function validacionUser() {
    if (localStorage.getItem("usuario_logueado")) {
        assec = true
        ingresar();
    }
}

function ingresar() {
    window.location.href = 'index.html'
}
