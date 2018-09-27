const tarefaComposerButton = document.querySelector(".tarefa-composer__button");
const tarefaComposerInput = document.getElementById("tarefaComposerInput");
const listaTarefas = document.querySelector(".lista-tarefas");
const listaTarefasItem = document.querySelector(".lista-tarefas__item");

tarefaComposerButton.addEventListener("click", function (event) {
    event.preventDefault();

    if (tarefaComposerInput.value == null || tarefaComposerInput.value == undefined || tarefaComposerInput.value == "" || tarefaComposerInput.value == " " || !tarefaComposerInput.value.trim()) {
        console.log("Escreva uma tarefa");
        
        tarefaComposerInput.focus();
        return false;
    }

    const divTarefas = document.createElement("div");

    const checkboxTarefaButton = document.createElement("div");
    checkboxTarefaButton.className = "item__checkbox";
    checkboxTarefaButton.innerHTML = `<div class="tarefas-lista">
    <div class="lista-tarefas__item">
        <div class="lista-tarefas__item-checkbox">
            <input class="lista-tarefas__checkbox" type="checkbox">
            <span class="lista-tarefas__item-texto">${tarefaComposerInput.value}</span>
        </div>
        <button class="lista-tarefas__delete-button" onclick="deletar_esta_merda(this)">x</button>
    </div>
</div>`


    divTarefas.appendChild(checkboxTarefaButton);
    listaTarefas.appendChild(divTarefas);

    tarefaComposerInput.value = ""
    divTarefas.classname = "tarefaBox";


    const deleteAllButton = document.querySelector(".lista-tarefas__delete-all-button");
    deleteAllButton.addEventListener("click", function (event3) {
        // event2.preventDefault();

        divTarefas.remove()
    })

    const textoTarefa = document.querySelector(".lista-tarefas__item-texto");
    const buttonMarcar = document.querySelector(".lista-tarefas__delete-checked-button");
    
    buttonMarcar.addEventListener("click", function (selecionarTodas) {
    // selecionarTodas.preventDefault();
    divTarefas.className = "tarefa-cinza"
})

    divTarefas.addEventListener("click", function(clicarTarefa){
    clicarTarefa.preventDefault();

    if(divTarefas.classList.contains("tarefa-cinza")){
        divTarefas.classList.remove("tarefa-cinza")
        divTarefas.classList.add("tarefa")
      }else{
        divTarefas.classList.remove("tarefa");
        divTarefas.classList.add("tarefa-cinza");
      }
      
})

})


function deletar_esta_merda(event2) {
    let item = event2.parentNode
    item.remove();
}

// function checkAll(o) {
//     var boxes = document.getElementsByTagName("input");
//     for (var x = 0; x < boxes.length; x++) {
//       var obj = boxes[x];
//       if (obj.type == "checkbox") {
//         if (obj.name != "check")
//           obj.checked = o.checked;
//       }
//     }
//   }
