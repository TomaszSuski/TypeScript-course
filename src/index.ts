// dla primitives można użyć "typeof guard"
function triple(value: number | string) {
  if (typeof value === "string") return value.repeat(3);
  return value * 3;
}

// dla paramentrów, które mogą być null (np. szukane elementy DOM) stosuje się truthiness guard
function printLetters(word: string | null) {
  if (word) {
    for (let char of word) {
      console.log(char);
    }
  }
  return;
}

// alternatywny zapis parametru (string/undefined)
function printThoseToo(word?: string) {
  if (word) {
    for (let char of word) {
      console.log(char);
    }
  }
  return;
}
// pusty string też jest falsy!

// mozna utworzyć safeguard porównując równość - jesli oba elementy są takie same w ponizszym przykładzie to oba są stringiem
function someDemo(x: string | number, y: string | null) {
  if (x === y) {
  }
}

// używanie operatora "in" pozwala sprawdzać prawdziwość istnienia klucza w obiekcie/tablicy
interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

function getRuntime(media: Movie | TVShow) {
  if ("duration" in media) return media.duration;
  return media.episodeDuration * media.numEpisodes;
}

// uzywanie instanceof narrowing do sprawdzania czy dany argument jest instancją danej klasy
function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.toLocaleString());
  } else {
    console.log(new Date(date).toLocaleString());
  }
}

// Type predicates

interface Cat {
  name: string;
  numLives: number;
}

interface Dog {
  name: string;
  breed: string;
}

// prosta funkcja zwracająca boolean true dla kota, ale żeby TS wiedział, że po jej zastosowaniu mamy kota, w typie zwracanym używa się "argument is Type"
// w tym wypadku animal is Cat
// zapis "arg is Type" to właśnie Type Predicate
function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined;
}

// następnie można uzyć funkcji determinującej typ do sprawdzenia typu
// w tym wypadku TS dokładnie wie, że warunek spełnia tylko typ Cat, a wprzypadku niespełnienia warunku to jest Dog
function makeNoise(animal: Cat | Dog): string {
  if (isCat(animal)) return "Meow";
  return "Bark";
}

// Discriminated Unions

// dodanie w interfejsie wspólnego klucza, do którego przypisuje się literal rozróżniający typy pozwala s na tej podstawie rozróżniać te typy
// taką właściwość nazywa się dyskryminantą
interface Cow {
  kind: "cow";
  name: string;
  age: number;
  weight: number;
}

interface Rooster {
  kind: "rooster";
  name: string;
  weight: number;
  age: number;
}

interface Pig {
  kind: "pig";
  name: string;
  weight: number;
  age: number;
}

// przykład typu do sprawdzenia przez never, nie obsłużony w switchu
interface Sheep {
  name: string;
  age: number;
  weight: number;
  kind: "sheep";
}

type FarmAnimal = Pig | Rooster | Cow | Sheep;

// w każdym z pzypadków switcha poniżej TS wie dokłądnie jaki jest typ argumentu
function farmAnimalSound(animal: FarmAnimal){
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
      const _exhaustiveCheck: never = animal;
      return _exhaustiveCheck;
  }
}

// oczywiście w typ wypadku kind jest jedną z wymaganych właściwości typu i każda zmienna stworzona wg takiego typu musią ją również posiadać
// Jest to też sprawdzane i musi się zgadać, jak w przypadku każdej właściwości zapisanej jako literal
const steevie: Rooster = {
  name: "Steevie",
  age: 1.5,
  weight: 2,
  kind: "rooster",
};

console.log(farmAnimalSound(steevie));
