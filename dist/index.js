"use strict";
// wykrzyknik zaznacza element jako istniejący na pewno, nie null. Eliminuje union type z null.
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
// wyszukanie po typie elementu podpowiada TStyp
const form = document.querySelector("form");
// jeśli nie używamy wykrzyknika, trzeba przy korzystaniu z elementu uzywać "?"
const list = document.getElementById("todolist");
// można określić typ elementu w momencie wywołania zamiast przypisywać przy definiowaniu
// (<HTMLButtonElement>btn).addEventListener("click", function () {
//   const inputValue: string = input.value;
//   alert(inputValue);
//   input.value = "";
// });
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = input.value;
    const newListItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newListItem.append(newTodo);
    newListItem.append(checkbox);
    // korzystanie z ? żeby zabezpieczyć się przed możliwym null, gdy nie wiadomo czy element istnieje i/lub nie użylismy ! przy definiowaniu
    list?.append(newListItem);
    input.value = "";
}
form.addEventListener("submit", handleSubmit);
