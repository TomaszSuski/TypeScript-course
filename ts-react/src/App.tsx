import React from "react";
import "./App.css";
import Greeter from "./Components/Greeter";
import ShoppingList from "./Components/ShoppingList";

function App() {
  const items = [
    {
      id: 1,
      product: "lemon",
      quantity: 3,
    },
    {
      id: 2,
      product: "chicken breast",
      quantity: 2,
    },
  ];
  return (
    <div className="App">
      <Greeter personName="stranger" />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
