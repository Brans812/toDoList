const deleteDiv = function(id){
  const getDiv = document.getElementById("tasksDiv")
  getDiv.removeChild(id.target.parentNode)
}

const add = function(event){
  const getId = document.getElementById(event.path[1].id)
  if (event.srcElement.checked == true){
    const newButton = document.createElement("input")
    newButton.type = "button"
    newButton.value = "Delete"
    newButton.addEventListener("click",deleteDiv)
    getId.appendChild(newButton)
  }else{
    getId.removeChild(getId.lastChild)

  }
}
const addTask = function(){
  const text = document.getElementById("toDoText")
  const div = document.getElementById("tasksDiv")
  if(text.value != ""){
    const newTask = document.createElement("p")
    const newDiv = document.createElement("div")
    const newCheckbox = document.createElement("input")
    newDiv.id = text.value
    newCheckbox.type = "checkbox"
    newCheckbox.addEventListener("click",add)
    newTask.innerText = text.value
    newTask.style = "display: inline"
    div.appendChild(newDiv)
    newDiv.appendChild(newCheckbox)
    newDiv.appendChild(newTask)
    text.value = ""
  }
}

const submit = document.getElementById("toDoSubmit")
submit.addEventListener("click",addTask)