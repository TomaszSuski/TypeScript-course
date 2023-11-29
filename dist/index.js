"use strict";
// wykrzyknik zaznacza element jako istniejący na pewno, nie null. Eliminuje union type z null.
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
// wyszukanie po typie elementu podpowiada TStyp
const form = document.querySelector("form");
// jeśli nie używamy wykrzyknika, trzeba przy korzystaniu z elementu uzywać "?"
const list = document.getElementById("todolist");
const todos = readTodos();
todos.forEach(createTodo);
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
// przekazanie eventu możliwe po wskazaniu, że to event
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    setStorage();
    input.value = "";
}
function createTodo(todo) {
    const newListItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        setStorage();
    });
    newListItem.append(todo.text);
    newListItem.append(checkbox);
    // korzystanie z ? żeby zabezpieczyć się przed możliwym null, gdy nie wiadomo czy element istnieje i/lub nie użylismy ! przy definiowaniu
    list?.append(newListItem);
}
function setStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
form.addEventListener("submit", handleSubmit);
