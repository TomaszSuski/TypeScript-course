// jeden ze sposobów na importowanie typów
import type { Person } from "./types";
// drugi sposób, przydatny jeśłi z danego pliku importuje się też inne rzeczy niz pliki
import { type Color } from "./types";

class User implements Person {
  constructor(
    public username: string,
    public email: string,
    public badgeColor: Color
  ) {}
}
