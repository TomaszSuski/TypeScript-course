// type declaration files - specjalny typ plików z rozszerzeniem .d.ts
// mogą zawierać wyłącznie deklaracje typów, bez żadnego wykonywalnego kodu

// w tej części będą wykonywane requesty za pomocą biblioteki axios. npm install axios przed rozpoczęciem

import axios from "axios";
import _ from "lodash";

const URL = "https://jsonplaceholder.typicode.com/users/1";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

axios
  // get przyjmuje generic type który można okreslić i zwraca response. TS będzie oczekiwał, że response jest typu przekazanego
  .get<User>(URL)
  .then((resp) => {
    console.log(resp.data);
    printUser(resp.data);
  })
  .catch((e) => {
    console.log("error", e);
  });

// zdefiniowanie generic type dla get pozwala np. używać funkcji przetwarzającej dane, nie tylko bez zwracania przez TS uwagi na błędy, ale też z podpowiedziami ide przy okazji
function printUser(user: User): void {
  console.log(user.name);
}

// working with lodash
// lodash nie ma pliku deklaracji typów więc TS wskaże to jako błąd przy imporcie
