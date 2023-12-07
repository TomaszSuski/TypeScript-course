import React from "react";

interface ShoppingListItem {
  id: number;
  product: string;
  quantity: number;
}

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
