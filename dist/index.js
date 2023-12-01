"use strict";
// zapis skrótowy typowanej tablicy
// const nums: number[] = [];
// zapis generyczny typowanej tablicy (wykorzystuje istniejący interfejs Array)
// "T" podane w nawiasie: <T> okresla typ przyjmowanych argumentów i determinuje typ zwracanych danych
const nums = [];
// wykorzystanie w istniejących metodach
const inputEl = document.querySelector("#username");
// inputEl może być null, więc value będzie undefined. Przed przypisaniem trzeba sprawdzić czy istnieje.
// łatwiej dodać wykrzyknik na końcu przypisania elementu do zmiennej, ale trzeba być pewnym, że istnieje
typeof inputEl?.value === "string" && (inputEl.value = "smthn");
// własne funkcje moga mieć przypisany generyczny typ (poniżej <Type>, ale zazwyczaj <T> - nazwa nie ma znaczenia)
// następnie przypisuje się ten typ normalnie do argumentu i jako typ zwracany
function identity(item) {
    return item;
}
// typ zwracany moez być użyty tez np, w tablicach itp.
function identities(item) {
    return [item];
}
// również typ argumentu może być typem elementów tablicy podanej jako argument
function getRandomElement(list) {
    return list[Math.floor(Math.random() * list.length)];
}
console.log(getRandomElement(["a", "b", "c"]));
