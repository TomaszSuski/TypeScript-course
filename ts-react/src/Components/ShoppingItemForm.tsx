import React, { useState } from "react";
import ShoppingListItem from "../models/ShoppingListItem";

// rozwiązanie oparte na useState
type Id = number;
type Product = string;
type Quantity = number;
type SetItems = React.Dispatch<React.SetStateAction<ShoppingListItem[]>>;
interface ShoppingItemformProps {
  items: ShoppingListItem[];
  setItems: SetItems;
}

export default function ShoppingItemForm({
  items,
  setItems,
}: ShoppingItemformProps): JSX.Element {
  const [product, setProduct] = useState<Product>("");
  const [quantity, setQuantity] = useState<Quantity>(0);
  const [id] = useState<Id>(
    Array.isArray(items) && items.length > 0
      ? items[items.length - 1]?.id ?? 0
      : 0
  );

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const newItems: ShoppingListItem[] = items.concat([
      { id: id + 1, product, quantity },
    ]);
    setItems(newItems);
    setProduct("");
    setQuantity(0);
  };

  return (
    <form onSubmit={submitHandler}>
        <p>Wersja oparta na useState</p>
      <label htmlFor="product">What to buy?</label>
      <input
        id="product"
        type="text"
        placeholder="Product name"
        onChange={(e) => {
          setProduct(e.target.value);
        }}
        value={product}
      />
      <label htmlFor="quantity">Choose quantity</label>
      <input
        id="quantity"
        type="number"
        min="1"
        onChange={(e) => {
          setQuantity(+e.target.value);
        }}
        value={quantity || ''}
      />
      <button type="submit">Add to list</button>
    </form>
  );
}
