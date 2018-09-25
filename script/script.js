const tarefaComposerButton = document.querySelector(".tarefa-composer__button");
const tarefaComposerInput = document.getElementById("tarefaComposerInput");
const listaTarefas = document.querySelector(".lista-tarefas");
const listaTarefasItem = document.querySelector(".lista-tarefas__item");

tarefaComposerButton.addEventListener("click", function(event){
    event.preventDefault();

    if (tarefaComposerInput.value == null || tarefaComposerInput.value == undefined || tarefaComposerInput.value == "" || tarefaComposerInput.value == " "){
        console.log("Escreva uma tarefa");
        tarefaComposerInput.focus();
        return false;
    }

    const div = document.createElement("div");
    div.classname = "tarefaBox";

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

    div.appendChild(checkboxTarefaButton);
    listaTarefas.appendChild(div);

    tarefaComposerInput.value = ""

})

const listaTarefaItem = document.querySelector("div")

function deletar_esta_merda (event2){
    let item = event2.parentNode
    item.remove();
}

function checkAll(o) {
    var boxes = document.getElementsByTagName("input");
    for (var x = 0; x < boxes.length; x++) {
      var obj = boxes[x];
      if (obj.type == "checkbox") {
        if (obj.name != "check")
          obj.checked = o.checked;
      }
    }
  }

  const deleteAllButton = document.querySelector(".lista-tarefas__delete-all-button");
  const allCheckboxes = document.getElementById("allCheckboxes");
  const tarefasCheckbox = document.querySelector(".lista-tarefas__checkbox")



  deleteAllButton.addEventListener("click", function(event3){
      event3.preventDefault();

      if(allCheckboxes.checked === true){
        tarefasCheckbox.remove()
      } 

    // allCheckboxes[allCheckboxes.selectedIndex].remove()
  })

//   const deleteAllButton = document.querySelectorAll(".lista-tarefas__delete-button");

//   tarefaDeleteButton.addEventListener("click", function(event2){
//       event2.preventDefault();
//       div.remove();
//       console.log("Tarefa apagada");
//   })

