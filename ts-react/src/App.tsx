import React, { useState } from "react";
import "./App.css";
import Greeter from "./Components/Greeter";
import ShoppingList from "./Components/ShoppingList";
// typy uzywane w kilku miejscach (w tym wypadku w App i ShoppingList) przenosi się do plików modeli i importuje gdzie trzeba
import ShoppingListItem from "./models/ShoppingListItem";
import ShoppingItemForm from "./Components/ShoppingItemForm";
import ShoppingItemFormWithRef from "./Components/ShoppingItemFormWithRef";

function App() {
  // dla poprawnego działania usestate należy podać typ przyjmowanych danych jako generyk
  const [items, setItems] = useState<ShoppingListItem[]>([]);
  const addItem = (product: string, quantity: number) => {
    const id = items.length > 0 ? items[items.length - 1].id + 1 : 1;
    setItems((items)=>[...items, { id, product, quantity }]);
  };
  console.log(items);

  return (
    <div className="App">
      <Greeter personName="stranger" />
      <ShoppingList items={items} />
      <ShoppingItemForm items={items} setItems={setItems} />
      <ShoppingItemFormWithRef onAddItem={addItem} />
    </div>
  );
}

export default App;
