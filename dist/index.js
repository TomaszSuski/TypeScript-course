// typescript zakłąda, że wszystko w plikach TS jest we wspólnym global scope i pozwala używać zmiennych czy funkcji z innych plików
// w momencie kompilacji jednak, JS trakutje pliki bez export (albo to-plevel await) jako skrypty a nie moduły i w związku z tym ten dostęp jest utracony,
// chyba że zostaną te ppliki załadowane jako skrypty w odpowiedniej kolejności np. w pliku html
// w tym wypadku TS rozpoznaje i pozwala używać metody z pliku utils.ts, ale po kompilacji to przestanie działać
// dopiero w momencie eksportu czegokolwiek z pliku utils.ts, TS zacznie zwracać uwagę na błąd braku importu i niemoznośc użycia tego, co nie zostało wyeksportowane
// trzeba przy tym pamiętać, że importuje się pliki .js bo to one po kompilacji będą używane:
import { add } from "./utils.js";
console.log(add(1, 2));
// żeby można było korzystać z importów/eksportów i modułów w przeglądarce, trzeba ustawić odpowiedni rodzaj kompilacji w tsconfig.json
// "module" musi mieć wartośc "EScokolwiek", domyślnie ma "commonjs"
// dodatkowo w pliku html importowany skrypt musi mieć okreslony type="module"
// w przeciwnym wypadku przeglądarka nie rozpoznaje niektórych elementów skompilowanych plików 
// (node tak i do pracy w konsoli to jest ok, przy czym po zmianie z kolei nie działa w node, przynajmniej bez odpowiednich zmian w package.json)
