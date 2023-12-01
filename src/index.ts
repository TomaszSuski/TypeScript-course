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

// łączenie kilku typów geneerycznych jest także mozliwe w jednej funkcji
// nazwy typów oddziela się przecinkiem, zgodnie zkonwencją przypisuje się kolejne litery alfabetu
// TS sam poprawnie wywnioskuje jaki będzie typ zwracany
function merge<T, U>(object1: T, object2: U) {
  return {
    ...object1,
    ...object2,
  };
}

const combo = merge({ name: "John" }, { lastName: "Doe" });
// powyższy przykład nie uwzględnia sprawdzenia poprawności typu - zakładamy, że to obiekty, ale można podać coś z basic type (np. number). Funkcja nie zadziała jak oczekujemy

// w tym celu mozna dodać type constraint - zawężenie typu do określonego/ych
function merge2<T extends object, U extends object>(object1: T, object2: U) {
  return {
    ...object1,
    ...object2,
  };
}
// dzięki takiemu zapisowi, oba argumenty muszą być obiektami. Dowolnymi, ale obiektami.

// inny przykład generycznego typu, który tym razem rozszerza interfejs
interface Lengthy {
  length: number;
}

function getDoubleLength<T extends Lengthy>(arg: T): number {
  return arg.length * 2;
}

console.log(getDoubleLength({ name: "whatever", length: 20 }));
//działa też na wbudowane obiekty mające length - np. stringi czy array
console.log(getDoubleLength([1, 2]));
