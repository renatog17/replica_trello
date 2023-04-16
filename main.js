const imagem = document.querySelector('.btn-add');
imagem.addEventListener('click', (event) => {
    let modal = document.getElementById("modal-add-task")
    modal.style.display = 'block'
})

const btnCancelarModal = document.getElementById('btn-cancelar-modal')
btnCancelarModal.addEventListener('click', (event) => {
    event.preventDefault()
    let modal = document.getElementById("modal-add-task")
    modal.style.display = 'none'
})

let idCont = 0

const btnEnviarForm = document.getElementById('btn-enviar')
btnEnviarForm.addEventListener('click', (event) => {
    event.preventDefault()
    let inputTitulo = document.getElementById("titulo").value
    let inputDescricao = document.getElementById("descricao").value
    let inputPrazo = document.getElementById("prazo").value

    let divTask = document.createElement('div')
    divTask.id = idCont
    idCont++
    divTask.classList.add("tarefa")

    let divTitulo = document.createElement('div')
    let divDescricao = document.createElement('div')
    let divPrazo = document.createElement('div')
    divTitulo.innerHTML = 'Título: ' + inputTitulo
    divDescricao.innerHTML = 'Descricao: ' + inputDescricao
    divPrazo.innerHTML = 'Prazo: ' + inputPrazo
    divTask.appendChild(divTitulo)

    divTask.appendChild(divDescricao)
    divTask.appendChild(divPrazo)
    divTask.draggable = true

    divTask.addEventListener("dragstart", function (event) {
        console.log(event.target.id)
        event.dataTransfer.setData("text", event.target.id);
    });


    let tarefasTodo = document.getElementById('tarefas')
    tarefasTodo.appendChild(divTask)
    let modal = document.getElementById("modal-add-task")
    modal.style.display = 'none'
})


var doingEvent = document.getElementById('doing')

doingEvent.addEventListener("dragover", function (event) {
    event.preventDefault();
});

doingEvent.addEventListener("drop", function (event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
});

var todoEvent = document.getElementById('tarefas')

todoEvent.addEventListener("dragover", function (event) {
    event.preventDefault();
});

todoEvent.addEventListener("drop", function (event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
});

var done = document.getElementById('done')

done.addEventListener("dragover", function (event) {
    event.preventDefault();
});

done.addEventListener("drop", function (event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
});