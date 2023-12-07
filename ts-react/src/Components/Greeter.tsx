import React from "react";

// przypisanie props można zrobić podstawiając props:{prop: type}
// lub definiując typ dla obiektu props i podstawwiając obiekt zgodny z typem
// type GreeterProps = {
//   personName: string;
// };
// to może być też oczywiście interfejs
interface GreeterProps {
  personName: string;
}

// TS inferuje zwracany typ funkcji/komponentu, ale w celuzabezpieczenia zwracanego typu można/ czasem warto opisać go explicite
export default function Greeter({ personName }: GreeterProps): JSX.Element {
  return <h1>{`Hello ${personName}`}</h1>;
}
