import { useState } from "react";
import ProductItem from "./productItem";

export default function AgregarCarrito() {
  const [carrito, setCarrito] = useState(0);

  const agregarAlCarrito = () => {
    setCarrito(carrito + 1);
  };

  return (
    <>
      <h2>Carrito: {carrito}</h2>

      <ProductItem
        nombre="Mouse Gamer"
        onAdd={agregarAlCarrito}
      />
    </>
  );
}
