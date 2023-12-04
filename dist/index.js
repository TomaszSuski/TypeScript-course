"use strict";
// dla primitives można użyć "typeof guard"
function triple(value) {
    if (typeof value === "string")
        return value.repeat(3);
    return value * 3;
}
// dla paramentrów, które mogą być null (np. szukane elementy DOM) stosuje się truthiness guard
function printLetters(word) {
    if (word) {
        for (let char of word) {
            console.log(char);
        }
    }
    return;
}
// alternatywny zapis parametru (string/undefined)
function printThoseToo(word) {
    if (word) {
        for (let char of word) {
            console.log(char);
        }
    }
    return;
}
// pusty string też jest falsy!
// mozna utworzyć safeguard porównując równość - jesli oba elementy są takie same w ponizszym przykładzie to oba są stringiem
function someDemo(x, y) {
    if (x === y) {
    }
}
function getRuntime(media) {
    if ("duration" in media)
        return media.duration;
    return media.episodeDuration * media.numEpisodes;
}
// uzywanie instanceof narrowing do sprawdzania czy dany argument jest instancją danej klasy
function printFullDate(date) {
    if (date instanceof Date) {
        console.log(date.toLocaleString());
    }
    else {
        console.log(new Date(date).toLocaleString());
    }
}
// prosta funkcja zwracająca boolean true dla kota, ale żeby TS wiedział, że po jej zastosowaniu mamy kota, w typie zwracanym używa się "argument is Type"
// w tym wypadku animal is Cat
// zapis "arg is Type" to właśnie Type Predicate
function isCat(animal) {
    return animal.numLives !== undefined;
}
// następnie można uzyć funkcji determinującej typ do sprawdzenia typu
// w tym wypadku TS dokładnie wie, że warunek spełnia tylko typ Cat, a wprzypadku niespełnienia warunku to jest Dog
function makeNoise(animal) {
    if (isCat(animal))
        return "Meow";
    return "Bark";
}
// w każdym z pzypadków switcha poniżej TS wie dokłądnie jaki jest typ argumentu
function farmAnimalSound(animal) {
    switch (animal.kind) {
        case "pig":
            return "oink";
        case "cow":
            return "muu";
        case "rooster":
            return "kukuryku";
        default:
            // switch nigdy nie powinien wejść w default, jeśli wszystkie przypadki obsłuzone sa poprawnie
            // to taki safeguuard gdyby np. dodać kolejny typ i zapomnieć go obsłużyć w switchu
            // wprzypadku pominięcia typu Sheep TS wskazuje błąd przypisania never do animal
            const _exhaustiveCheck = animal;
            return _exhaustiveCheck;
    }
}
// oczywiście w typ wypadku kind jest jedną z wymaganych właściwości typu i każda zmienna stworzona wg takiego typu musią ją również posiadać
// Jest to też sprawdzane i musi się zgadać, jak w przypadku każdej właściwości zapisanej jako literal
const steevie = {
    name: "Steevie",
    age: 1.5,
    weight: 2,
    kind: "rooster",
};
console.log(farmAnimalSound(steevie));
