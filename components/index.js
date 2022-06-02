const container = document.querySelector("#container")
const logincontainer = document.createElement("div")
const loginTextContainer = document.createElement("div")
const loginTitle = document.createElement("h1")
const loginText = document.createElement("h3")
const loginSpan = document.createElement("span")
const loginLabel = document.createElement("label")
const loginInput = document.createElement("input")

container.classList.add("d-flex", "justify-content-center", "align-items-center")
container.style.height = '950px'

logincontainer.classList.add("card", "align-items-center")
logincontainer.style.height = '30%'
logincontainer.style.width = '45%'

loginTitle.classList.add("container")

loginSpan.classList.add("badge", "container", "bg-secondary")
loginSpan.textContent = "JUEGO DE LAS PREGUNTAS"

loginTextContainer.classList.add("card-body", "d-flex", "flex-column", "justify-content-center", "align-items-center");

loginLabel.classList.add("h3")
loginLabel.setAttribute('for', 'formLogin')
loginLabel.textContent = "Ingrese su usuario"
loginLabel.style.marginBottom = "30px"

loginInput.classList.add("form-control")
loginInput.setAttribute('type', 'text')
loginInput.setAttribute('id', 'formLogin')
loginInput.setAttribute('placeholder', 'miller.gallegof')


container.appendChild(logincontainer)
logincontainer.append(loginTitle, loginTextContainer)
loginTitle.appendChild(loginSpan)
loginTextContainer.append(loginLabel, loginInput)


