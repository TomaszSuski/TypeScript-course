"use strict";
class Player {
    // w TS wszystkie properties muszą być typowane. Również te tworzone w konstruktorze. Typy wpisuje się po prostu w klasę.
    // public jest słowem kluczowym pozwalającym wyraźnie zaznaczyć, że konkretne property czy metoda są dostępne na zewnątrz.
    // Wszystko jest domyślnie public. Stosuje się to ewentualnie dla czytelności kodu
    firstName;
    // readonly pozwala jedynie na odczyt po zainicjowaniu w konstruktorze
    lastName;
    // private wyłącza dostępność danego elementu spoza klasy. Oczywiście działa JSowe "#" (#score). Nie da się używac obu naraz.
    // private nie dodaje hasha, tylko przed kompilacją TS wskazuje niedostępność!
    // private jest jednostepne z zewnątrz, również dla klas dziedziczących
    // w JS nazwa "#score" i "score" są różne, w TS żeby móc dodać geter i seter o nazwie score, trzeba użyc innej nazwy dla elementu prywatnego (np. "_score")
    _score = 0;
    // protected wyłącza dostęp spoza klasy, ale pozwala na dziedziczenie (klasy dziedziczące też wyłączają dostęp spoza nich)
    setScore(newScore) {
        this._score = newScore;
    }
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // geter umożliwia wpisanie typu zwracanej wartości, choć oczywiście TS wykrywa ją sam
    get score() {
        return this._score;
    }
    // seter nie może nic zwracać i w związku z tym TS nie pozwala na przypisanie zwracanego typu - nawet void!
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score cannot be negative");
        }
        this._score = newScore;
    }
}
class PlayerTheDifferentWay {
    firstName;
    lastName;
    // można użyć innego zapisu, bez typowania properties, które będą inicjowane w konstruktorze.
    // W tym celu trzeba określić dostępność parametrów (public, private, protected).
    // W tym przypadku nie trzeba inicjalizować tych elementów z użyciem "this"!
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
class InheritedPlayer extends Player {
    set maxScore(newScore) {
        this.setScore(newScore);
    }
}
// klasy mogą być implementacjami interfejsów
class Bike {
    color;
    constructor(color) {
        this.color = color;
    }
}
// mogą implementować wiele interfejsów i muszą spełniać warunki wszystkich
class Jacket {
    brand;
    color;
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.color} ${this.brand} jacket`);
    }
}
// const bike = new Bike("red");
// const jacket = new Jacket("Prada", "black");
// jacket.print();
// klasy abstrakcyjne - nie mozna tworzyc bezpośrednio z nich obiektów, są parentami dla innych klas
class Employee {
    firstName;
    lastName;
    // mogą zawierać normalne properties i konstruktor
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // można oczywiście wprowadzać gotowe metody
    greet() {
        console.log("Hello");
    }
}
class FullTimeEmployee extends Employee {
    salary;
    // rozszerzanie konstruktora deklarując properties bezpośrednio w argumentach nie wymaga przpisania przez this,
    // nadal jednak wymaga przekazania argumentów wyżej przez super()
    constructor(firstName, lastName, salary) {
        super(firstName, lastName);
        this.salary = salary;
    }
    // klasa rodzica wymaga implementacji metody getPay
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    hoursWorked;
    hourlyRate;
    constructor(firstName, lastName, hoursWorked, hourlyRate) {
        super(firstName, lastName);
        this.hoursWorked = hoursWorked;
        this.hourlyRate = hourlyRate;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
// klasy mogą jednocześnie rozszerzać klasy rodziców i implementować interfejsy!
