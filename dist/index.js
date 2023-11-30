class Player {
  // static pproperty/method jest dostępna wyłącznie wewnątrz klasy. Nie ma do niej dostępu w utworzonych instancjach.
  // Wywołuje się na klasie bezpośrednio: Player.description
  static description = "Player in a game";

  // fields/properties publiczne. Można to też wpisac w konstruktor przypisując this.score = 0. Zazwyczaj umieszczane na górze
  // nazwaa z podkreśleniem sugeruje deweloperom, żeby nie zmieniać tego bezpośrednio spoza klasy, ale nie ogranicza tego w żaden sposób
  _numLives = 10;

  // fields/properties prywatne. Nie da się ich zmienić spoza klasy ani nawet uzykać do nich dostęp
  #score = 0;
  #secret;
  // konstruktor przyjmuje parametry przy tworzeniu nowej instancji obiektu z klasy i np. przypisuje je do właściwości obiektu
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // użycie private field w konstruktorze wymaga uprzedniego zadeklarowania go w ciele klasy
    this.#secret = "dfsdfd";
  }

  // do prywatnych fields można tworzć metody zapewniające dostęp (jeśli potrzebny)
  getScore() {
    return this.#score;
  }
  setScore(newScore) {
    this.#score = newScore;
  }

  // ale klasy JS mają specjalne metody get i set do tworzenia metod zwracających coś jako zwykłe property, jednak pozwalają na dodatkową logikę (np. walidację przypisywanych wartości)
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  get score() {
    return this.#score;
  }
  set score(newScore) {
    if (newScore < 0) {
      throw new Error("Score must not be negative");
    }
    this.#score = newScore;
  }
  set fullName(newName) {
    const [first, last] = newName.split(" ");
    this.firstName = first;
    this.lastName = last;
  }

  // static metoda. Wywołuje się na klasie bezpośrednio: Player.defaultPlayer()
  static defaultPlayer() {
    return new Player("Default", "Player");
  }

  // inne metody klasy
  taunt() {
    console.log("booyah");
  }
  loseLife() {
    this.numLives -= 1;
  }
}

class GameMaster extends Player {
  constructor(first, last, capabilities) {
    // dodanie konstruktora w klasie dziedziczącej wymaga wywołania super konstruktora (klasy rodzica)
    super(first, last);
    this.capabilities = capabilities;
  }
  isGameMaster = true;
}

// const player1 = new Player("John", "Malkovich");
// console.log(player1);
// player1.taunt();
// player1.loseLife();
// console.log(player1._numLives);
// console.log(player1.getScore());
// player1.setScore(5);
// console.log(player1.getScore());
// console.log(player1.fullName);
// player1.score = -12;
// player1.score = 12;
// console.log(player1.score);
// player1.fullName = "Kurt Russell";
// console.log(player1.fullName);
// const player2 = Player.defaultPlayer();
// console.log(player2);

const gameMaster = new GameMaster("Keanu", "Reeves", ["enhance enemies", "rebuild the world"]);
console.log(gameMaster);
