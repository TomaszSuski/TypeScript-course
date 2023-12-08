import React from "react";
import ShoppingListItem from "../models/ShoppingListItem";

interface ShoppingListProps {
  items: ShoppingListItem[];
}

export default function ShoppingList({
  items,
}: ShoppingListProps): JSX.Element {
  return (
    <div>
      <h1>Your shopping list</h1>

      <table>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.product}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
