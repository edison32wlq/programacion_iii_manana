import { useState } from 'react';

export default function TechTotalCalculatorMP() {
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(1);
  const [total, setTotal] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (price <= 0) {
      setTotal('Ingresa un precio válido (mayor a 0).');
      return;
    }

    if (qty <= 0) {
      setTotal('Ingresa una cantidad válida (mayor a 0).');
      return;
    }

    const result = price * qty;
    setTotal(`Total a pagar: $${result.toFixed(2)} USD`);
  };

  return (
    <div>
      <h2>TechStore - Calculadora de compra</h2>

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

        <button type="submit">Calcular total</button>
      </form>

      {total && <p>{total}</p>}
    </div>
  );
}
