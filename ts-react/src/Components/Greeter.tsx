import React from "react";

// TS inferuje zwracany typ funkcji/komponentu, ale w celuzabezpieczenia zwracanego typu można/ czasem warto opisać go explicite
export default function Greeter(): JSX.Element {
  return <h1>Hello</h1>;
}
