import Dog from "./Dog.js";
import ShelterDog from "./ShelterDog.js";
import { add, multiply, divide } from "./utils.js";

const elton = new Dog("Elton", "Sheperd", 0.5);
elton.bark();

console.log(add(1, 2));
console.log(multiply(1, 2));
console.log(divide(1, 2));

const buffy = new ShelterDog("Buffy", "Chihuaua", 1, "New Reno Shelter");
