// wykrzyknik zaznacza element jako istniejący na pewno, nie null. Eliminuje union type z null.
const btn = document.getElementById("btn")!;
const input = document.getElementById("todoinput")! as HTMLInputElement;
// wyszukanie po typie elementu podpowiada TStyp
const form = document.querySelector("form")!;
// jeśli nie używamy wykrzyknika, trzeba przy korzystaniu z elementu uzywać "?"
const list = document.getElementById("todolist") as HTMLUListElement;

interface Todo {
  text: string;
  completed: boolean;
}

const todos: Todo[] = [];

// można określić typ elementu w momencie wywołania zamiast przypisywać przy definiowaniu
// (<HTMLButtonElement>btn).addEventListener("click", function () {
//   const inputValue: string = input.value;
//   alert(inputValue);
//   input.value = "";
// });

function handleSubmit(e: SubmitEvent): void {
  e.preventDefault();

  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };
  createTodo(newTodo);
  todos.push(newTodo);


  input.value = "";
}

function createTodo(todo: Todo):void {
    const newListItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
  
    newListItem.append(todo.text);
    newListItem.append(checkbox);
  
    // korzystanie z ? żeby zabezpieczyć się przed możliwym null, gdy nie wiadomo czy element istnieje i/lub nie użylismy ! przy definiowaniu
    list?.append(newListItem);
}

form.addEventListener("submit", handleSubmit);
