"use strict";
// type declaration files - specjalny typ plików z rozszerzeniem .d.ts
// mogą zawierać wyłącznie deklaracje typów, bez żadnego wykonywalnego kodu
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// w tej części będą wykonywane requesty za pomocą biblioteki axios. npm install axios przed rozpoczęciem
const axios_1 = __importDefault(require("axios"));
const URL = "https://jsonplaceholder.typicode.com/users/1";
axios_1.default
    // get przyjmuje generic type który można okreslić i zwraca response. TS będzie oczekiwał, że response jest typu przekazanego
    .get(URL)
    .then((resp) => {
    console.log(resp.data);
    printUser(resp.data);
})
    .catch((e) => {
    console.log("error", e);
});
// zdefiniowanie generic type dla get pozwala np. używać funkcji przetwarzającej dane, nie tylko bez zwracania przez TS uwagi na błędy, ale też z podpowiedziami ide przy okazji
function printUser(user) {
    console.log(user.name);
}
// working with lodash
// lodash nie ma pliku deklaracji typów więc TS wskaże to jako błąd przy imporcie
