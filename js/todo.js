const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

let todos = [];

const TODO_KEYS = "todos";
function saveTodos(){
    localStorage.setItem(TODO_KEYS, JSON.stringify(todos));

}

function deleteTodo(event){
    const li = event.target.parentElement;
    todos = todos.filter(todo => todo.id !== parseInt(li.id));
    li.remove();
    saveTodos();

}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);

}
function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value="";
    const newTodoObj = {
        id: Date.now(),
        text: newTodo,
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();

}

function sayHello(item){
    console.log(item);
}
todoForm.addEventListener("submit", handleTodoSubmit);
const savedTodos = localStorage.getItem(TODO_KEYS);
if(savedTodos){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach((element) => paintTodo(element));
}