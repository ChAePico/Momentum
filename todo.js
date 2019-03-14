const toDoForm=document.querySelector(".js-toDoForm"),
      toDoInput=toDoForm.querySelector("input"),
      todoList=document.querySelector(".js-toDoList");

const TODOS_LS="toDos";

function paintToDo(text){
    const li=document.createElement("li");
    const delBtn=document.createElement("button");
    delBtn.value="";//이모지 작동 안됨
    const span=document.createElement("span");
    span.innerText=text;
    li.appendChild(delBtn);
    li.appendChild(span);
    todoList.appendChild(li);
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue=toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}
function loadTodos(){
    const toDos=localStorage.getItem(TODOS_LS);
    if(toDos!==null){
        //toDoForm.addEventListener("submit", handleSubmit);
    }
}

function init(){
    loadTodos();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();