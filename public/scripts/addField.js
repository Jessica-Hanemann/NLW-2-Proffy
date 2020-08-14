document.querySelector("#add-time")
    .addEventListener("click", cloneField)
// quando clicar no botão

// executar uma ação
function cloneField() {
    //  duplicar os campos. Que campo?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    // limpar os campos antes de clonar. Que campos pegar?
    const fields = newFieldContainer.querySelectorAll("input")

    // para cada campo, limpar
    fields.forEach(function (field) {
        // pegar o field do momento e limpa ele
        // console.log(field)
        field.value = ""
    })

    // console.log(fields[0])
    // fields[0].value = ""
    // fields[1].value = ""

    //  colocar na página. Onde??
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}
