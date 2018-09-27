const tarefaComposerButton = document.querySelector(".tarefa-composer__button");
const tarefaComposerInput = document.getElementById("tarefaComposerInput");
const listaTarefas = document.querySelector(".lista-tarefas");

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
    <div class="lista-tarefas__item" id="target "ondrop="drop_handler(event);" ondragover="dragover_handler(event);">
        <div class="lista-tarefas__item-checkbox">
            <input class="lista-tarefas__checkbox" type="checkbox">
            <span class="lista-tarefas__item-texto">${tarefaComposerInput.value}</span>
        </div>
        <button class="lista-tarefas__delete-button" onclick="deletar_esta_merda(this)">x</button>
    </div>
</div>`


    const socorroMeuDeus = document.querySelector(".lista-tarefas__item");

    // socorroMeuDeus.addEventListener("dragStart", function dragstart_handler(ev) {
    // console.log("dragStart");
    // // Adiciona o id do elemento em questão ao objeto de transferência de dados (dataTransfer)
    // ev.dataTransfer.setData(".listaTarefasItem", ev.target.id);
    // ev.dataTransfer.dropEffect = "move";
    // })
    // function dragover_handler(ev) {
    //     ev.preventDefault();
    //     // Define o dropEffect para ser do tipo move
    //     ev.dataTransfer.dropEffect = "move"
    //    }
    // function drop_handler(ev) {
    //     ev.preventDefault();
    //     // Pega o id do alvo e adiciona o elemento que foi movido para o DOM do alvo
    //     var data = ev.dataTransfer.getData(".listaTarefasItem");
    //     ev.target.appendChild(document.getElementById(data));
    //    }

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

// listaTarefasItem.onmousedown = function (event) { // (1) start the process

//     // (2) prepare to moving: make absolute and top by z-index
//     listaTarefasItem.style.position = 'absolute';
//     listaTarefasItem.style.zIndex = 1000;
//     // document.body.appendChild(listaTarefasItem);
  
//     // ...and put that absolutely positioned listaTarefasItem under the cursor
//     moveAt(event.pageX, event.pageY);
  
//     // centers the listaTarefasItem at (pageX, pageY) coordinates
//     function moveAt(pageX, pageY) {
//       listaTarefasItem.style.left = pageX - listaTarefasItem.offsetWidth / 2 + 'px';
//       listaTarefasItem.style.top = pageY - listaTarefasItem.offsetHeight / 2 + 'px';
//     }
  
//     function onMouseMove(event) {
//       moveAt(event.pageX, event.pageY);
//     }
  
//     // (3) move the listaTarefasItem on mousemove
//     document.addEventListener('mousemove', onMouseMove);
  
//     // (4) drop the listaTarefasItem, remove unneeded handlers
//     listaTarefasItem.onmouseup = function () {
//       document.removeEventListener('mousemove', onMouseMove);
//       listaTarefasItem.onmouseup = null;
//     };
  
//   };
  
//   listaTarefasItem.ondragstart = function () {
//     return false;
//   };

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
