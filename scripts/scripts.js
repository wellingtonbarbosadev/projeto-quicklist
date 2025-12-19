const form = document.querySelector("form")
const input = document.querySelector('form input[type="text"]')
const warning = document.querySelector("#warning")
const warningButton = document.querySelector("footer button")
const list = document.querySelector("#itemsList ul");

form.addEventListener("submit", (event) => {
    event.preventDefault()

    let liElement = document.createElement("li")
    let labelElement = document.createElement("label")
    let inputElement = document.createElement("input")
    let spanElement = document.createElement("span")
    let buttonElement = document.createElement("button")
    let imgElement = document.createElement("img")

    inputElement.setAttribute("type", "checkbox")
    spanElement.textContent = input.value
    imgElement.setAttribute("src", "../assets/icons/trash.svg")
    
    labelElement.appendChild(inputElement)
    labelElement.appendChild(spanElement)
    buttonElement.appendChild(imgElement)
    labelElement.appendChild(buttonElement)

    liElement.appendChild(labelElement)

    list.appendChild(liElement)
    input.value = ""
    

})

list.addEventListener("click", (event) => {
    const deleteButton = event.target.closest("button")
    if (!deleteButton) return

    const item = event.target.closest("li")
    item.remove()
    warning.classList.remove("hidden")

})

warningButton.addEventListener("click", () => {
    warning.classList.add("hidden")
})