class Player {
  // w TS wszystkie properties muszą być typowane. Również te tworzone w konstruktorze. Typy wpisuje się po prostu w klasę.
  // public jest słowem kluczowym pozwalającym wyraźnie zaznaczyć, że konkretne property czy metoda są dostępne na zewnątrz.
  // Wszystko jest domyślnie public. Stosuje się to ewentualnie dla czytelności kodu
  public firstName: string;
  // readonly pozwala jedynie na odczyt po zainicjowaniu w konstruktorze
  public readonly lastName: string;
  // private wyłącza dostępność danego elementu spoza klasy. Oczywiście działa JSowe "#" (#score). Nie da się używac obu naraz.
  // private nie dodaje hasha, tylko przed kompilacją TS wskazuje niedostępność!
  // private jest jednostepne z zewnątrz, również dla klas dziedziczących
  // w JS nazwa "#score" i "score" są różne, w TS żeby móc dodać geter i seter o nazwie score, trzeba użyc innej nazwy dla elementu prywatnego (np. "_score")
  private _score: number = 0;
  // protected wyłącza dostęp spoza klasy, ale pozwala na dziedziczenie (klasy dziedziczące też wyłączają dostęp spoza nich)
  protected setScore(newScore: number) {
    this._score = newScore;
  }

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // geter umożliwia wpisanie typu zwracanej wartości, choć oczywiście TS wykrywa ją sam
  get score(): number {
    return this._score;
  }
  // seter nie może nic zwracać i w związku z tym TS nie pozwala na przypisanie zwracanego typu - nawet void!
  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score cannot be negative");
    }
    this._score = newScore;
  }
}

class PlayerTheDifferentWay {
  // można użyć innego zapisu, bez typowania properties, które będą inicjowane w konstruktorze.
  // W tym celu trzeba określić dostępność parametrów (public, private, protected).
  // W tym przypadku nie trzeba inicjalizować tych elementów z użyciem "this"!
  constructor(public firstName: string, public lastName: string) {}
}

class InheritedPlayer extends Player {
  set maxScore(newScore: number) {
    this.setScore(newScore);
  }
}

// const player = new InheritedPlayer("John", "Doe");
// console.log(player);
// player.maxScore = 11111;
// console.log(player.score);

interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}

// klasy mogą być implementacjami interfejsów
class Bike implements Colorful {
  constructor(public color: string) {}
}

// mogą implementować wiele interfejsów i muszą spełniać warunki wszystkich
class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}
  print(): void {
    console.log(`${this.color} ${this.brand} jacket`);
  }
}

const bike = new Bike("red");
const jacket = new Jacket("Prada", "black");
jacket.print();
