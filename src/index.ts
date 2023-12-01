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
function someDemo (x: string | number, y: string | null) {
  if(x===y){

  }
}