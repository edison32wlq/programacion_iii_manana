import { useState } from 'react';

export default function PromedioMP() {
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(1);
  const [discount, setDiscount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subtotal = price * qty;
    const total = Math.max(subtotal - discount, 0);
    alert(`Subtotal: $${subtotal.toFixed(2)} | Total: $${total.toFixed(2)}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Precio del producto ($)"
        value={price}
        min="0"
        onChange={(e) => setPrice(Number(e.target.value))}
      />

      <input
        type="number"
        placeholder="Cantidad"
        value={qty}
        min="1"
        onChange={(e) => setQty(Number(e.target.value))}
      />

      <input
        type="number"
        placeholder="Descuento ($)"
        value={discount}
        min="0"
        onChange={(e) => setDiscount(Number(e.target.value))}
      />

      <button type="submit">Calcular total</button>
    </form>
  );
}
