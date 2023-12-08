import React, { useRef } from "react";

// rozwiązanie oparte na useRef

interface ShoppingItemFormWithRefprops {
  onAddItem: (product: string, quantity: number) => void;
}

export default function ShoppingItemFormWithRef({
  onAddItem,
}: ShoppingItemFormWithRefprops): JSX.Element {
  // w TS useref to generyk do którgo przekazujemy typ elementu
  const productInputRef = useRef<HTMLInputElement>(null);
  const quantityInputRef = useRef<HTMLInputElement>(null);

  // event przekazywany przez formularze w reakcie jest typu React.FormEvet
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const item = {
      product: productInputRef.current!.value,
      quantity: +quantityInputRef.current!.value,
    };
    if (item.quantity) {
      onAddItem(item.product, item.quantity);
      productInputRef.current!.value = "";
      quantityInputRef.current!.value = "";
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <p>Wersja oparta na useRef</p>
      <label htmlFor="product">What to buy?</label>
      <input
        id="product"
        type="text"
        placeholder="Product name"
        ref={productInputRef}
      />
      <label htmlFor="quantity">Choose quantity</label>
      <input id="quantity" type="number" min={1} ref={quantityInputRef} />
      <button type="submit">Add to list</button>
    </form>
  );
}
