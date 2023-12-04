"use strict";
// typescript zakłąda, że wszystko w plikach TS jest we wspólnym global scope i pozwala używać zmiennych czy funkcji z innych plików
// w momencie kompilacji jednak, JS trakutje pliki bez export (albo to-plevel await) jako skrypty a nie moduły i w związku z tym ten dostęp jest utracony,
// chyba że zostaną te ppliki załadowane jako skrypty w odpowiedniej kolejności np. w pliku html
// w tym wypadku TS rozpoznaje i pozwala używać metody z pliku utils.ts, ale po kompilacji to przestanie działać
Object.defineProperty(exports, "__esModule", { value: true });
// dopiero w momencie eksportu czegokolwiek z pliku utils.ts, TS zacznie zwracać uwagę na błąd braku importu i niemoznośc użycia tego, co nie zostało wyeksportowane
// trzeba przy tym pamiętać, że importuje się pliki .js bo to one po kompilacji będą używane:
const utils_js_1 = require("./utils.js");
console.log((0, utils_js_1.add)(1, 2));
;
