// wykrzyknik zaznacza element jako istniejący na pewno, nie null. Eliminuje union type z null.
const btn = document.getElementById("btn")!;
const input = document.getElementById("todoinput")! as HTMLInputElement;
// wyszukanie po typie elementu podpowiada TStyp
const form = document.querySelector("form")!;

// można określić typ elementu w momencie wywołania zamiast przypisywać przy definiowaniu
// (<HTMLButtonElement>btn).addEventListener("click", function () {
//   const inputValue: string = input.value;
//   alert(inputValue);
//   input.value = "";
// });

function handleSubmit(e: SubmitEvent): void {
  e.preventDefault();
  console.log("Submitted");
}

form.addEventListener("submit", handleSubmit);
