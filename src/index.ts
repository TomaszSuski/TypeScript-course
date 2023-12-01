// zapis skrótowy typowanej tablicy
// const nums: number[] = [];

// zapis generyczny typowanej tablicy (wykorzystuje istniejący interfejs Array)
// "T" podane w nawiasie: <T> okresla typ przyjmowanych argumentów i determinuje typ zwracanych danych
const nums: Array<number> = [];

// wykorzystanie w istniejących metodach
const inputEl = document.querySelector<HTMLInputElement>("#username");
// inputEl może być null, więc value będzie undefined. Przed przypisaniem trzeba sprawdzić czy istnieje.
// łatwiej dodać wykrzyknik na końcu przypisania elementu do zmiennej, ale trzeba być pewnym, że istnieje
typeof inputEl?.value === "string" && (inputEl.value = "smthn");

// własne funkcje moga mieć przypisany generyczny typ (poniżej <Type>, ale zazwyczaj <T> - nazwa nie ma znaczenia)
// następnie przypisuje się ten typ normalnie do argumentu i jako typ zwracany
function identity<Type>(item: Type): Type {
  return item;
}

// typ zwracany moez być użyty tez np, w tablicach itp.
function identities<T>(item: T): T[] {
  return [item];
}

// również typ argumentu może być typem elementów tablicy podanej jako argument
function getRandomElement<T>(list: T[]): T {
  return list[Math.floor(Math.random() * list.length)];
}

console.log(getRandomElement<string>(["a", "b", "c"]));

// inferencja typów działa też w tym przypadku
// np. podanie argumentu w postaci tablicy liczb, zwraca typ number
const el = getRandomElement([1, 2, 3]);

